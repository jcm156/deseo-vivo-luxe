// WordPress WooCommerce API Integration
import { z } from 'zod';

// Configuration - you'll need to set these for your WordPress site
const WP_CONFIG = {
  baseUrl: process.env.VITE_WP_BASE_URL || 'https://your-wordpress-site.com',
  consumerKey: process.env.VITE_WC_CONSUMER_KEY || '',
  consumerSecret: process.env.VITE_WC_CONSUMER_SECRET || '',
  apiVersion: 'wc/v3'
};

// Product schema for type safety
const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  slug: z.string(),
  permalink: z.string(),
  price: z.string(),
  regular_price: z.string(),
  sale_price: z.string(),
  description: z.string(),
  short_description: z.string(),
  sku: z.string(),
  status: z.string(),
  featured: z.boolean(),
  catalog_visibility: z.string(),
  stock_status: z.string(),
  stock_quantity: z.number().nullable(),
  categories: z.array(z.object({
    id: z.number(),
    name: z.string(),
    slug: z.string()
  })),
  images: z.array(z.object({
    id: z.number(),
    src: z.string(),
    name: z.string(),
    alt: z.string()
  })),
  attributes: z.array(z.object({
    id: z.number(),
    name: z.string(),
    position: z.number(),
    visible: z.boolean(),
    variation: z.boolean(),
    options: z.array(z.string())
  })),
  variations: z.array(z.number()),
  average_rating: z.string(),
  rating_count: z.number(),
  meta_data: z.array(z.any())
});

const CategorySchema = z.object({
  id: z.number(),
  name: z.string(),
  slug: z.string(),
  parent: z.number(),
  description: z.string(),
  display: z.string(),
  image: z.object({
    id: z.number(),
    src: z.string(),
    name: z.string(),
    alt: z.string()
  }).nullable(),
  menu_order: z.number(),
  count: z.number()
});

const CartItemSchema = z.object({
  key: z.string(),
  id: z.number(),
  quantity: z.number(),
  name: z.string(),
  price: z.number(),
  line_total: z.string(),
  line_subtotal: z.string(),
  featured_image: z.string()
});

const CartSchema = z.object({
  items: z.array(CartItemSchema),
  items_count: z.number(),
  items_weight: z.number(),
  cross_sells: z.array(z.any()),
  needs_payment: z.boolean(),
  needs_shipping: z.boolean(),
  shipping_total: z.string(),
  shipping_tax_total: z.string(),
  fee_total: z.string(),
  fee_tax_total: z.string(),
  discount_total: z.string(),
  discount_tax_total: z.string(),
  cart_contents_total: z.string(),
  cart_contents_tax: z.string(),
  cart_contents_weight: z.number(),
  total: z.string()
});

export type Product = z.infer<typeof ProductSchema>;
export type Category = z.infer<typeof CategorySchema>;
export type CartItem = z.infer<typeof CartItemSchema>;
export type Cart = z.infer<typeof CartSchema>;

// Base API function with authentication
async function apiRequest(endpoint: string, options: RequestInit = {}) {
  const url = `${WP_CONFIG.baseUrl}/wp-json/${WP_CONFIG.apiVersion}/${endpoint}`;
  
  // Add basic auth for WooCommerce API
  const auth = btoa(`${WP_CONFIG.consumerKey}:${WP_CONFIG.consumerSecret}`);
  
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${auth}`,
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

// Products API
export const productsApi = {
  // Get all products with filtering
  async getProducts(params: {
    page?: number;
    per_page?: number;
    search?: string;
    category?: string;
    featured?: boolean;
    on_sale?: boolean;
    min_price?: number;
    max_price?: number;
    orderby?: 'date' | 'id' | 'include' | 'title' | 'slug' | 'price' | 'popularity' | 'rating';
    order?: 'asc' | 'desc';
    status?: 'draft' | 'pending' | 'private' | 'publish';
  } = {}) {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        searchParams.append(key, String(value));
      }
    });

    const data = await apiRequest(`products?${searchParams.toString()}`);
    return data.map((product: any) => ProductSchema.parse(product));
  },

  // Get single product by ID
  async getProduct(id: number) {
    const data = await apiRequest(`products/${id}`);
    return ProductSchema.parse(data);
  },

  // Get product by slug
  async getProductBySlug(slug: string) {
    const data = await apiRequest(`products?slug=${slug}`);
    if (data.length === 0) {
      throw new Error('Product not found');
    }
    return ProductSchema.parse(data[0]);
  },

  // Get product variations
  async getProductVariations(productId: number) {
    const data = await apiRequest(`products/${productId}/variations`);
    return data;
  },

  // Get product reviews
  async getProductReviews(productId: number) {
    const data = await apiRequest(`products/reviews?product=${productId}`);
    return data;
  }
};

// Categories API
export const categoriesApi = {
  // Get all categories
  async getCategories(params: {
    page?: number;
    per_page?: number;
    search?: string;
    parent?: number;
    orderby?: 'id' | 'include' | 'name' | 'slug' | 'term_group' | 'description' | 'count';
    order?: 'asc' | 'desc';
    hide_empty?: boolean;
  } = {}) {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        searchParams.append(key, String(value));
      }
    });

    const data = await apiRequest(`products/categories?${searchParams.toString()}`);
    return data.map((category: any) => CategorySchema.parse(category));
  },

  // Get single category
  async getCategory(id: number) {
    const data = await apiRequest(`products/categories/${id}`);
    return CategorySchema.parse(data);
  }
};

// Cart API (requires WooCommerce REST API plugin or custom endpoints)
export const cartApi = {
  // Get cart contents
  async getCart() {
    // This requires a custom endpoint or WooCommerce Cart REST API plugin
    const data = await apiRequest('cart');
    return CartSchema.parse(data);
  },

  // Add item to cart
  async addToCart(productId: number, quantity: number = 1, variation?: any) {
    const body = {
      product_id: productId,
      quantity,
      ...variation
    };

    const data = await apiRequest('cart/add-item', {
      method: 'POST',
      body: JSON.stringify(body)
    });
    return data;
  },

  // Update cart item
  async updateCartItem(key: string, quantity: number) {
    const data = await apiRequest(`cart/item/${key}`, {
      method: 'PUT',
      body: JSON.stringify({ quantity })
    });
    return data;
  },

  // Remove cart item
  async removeCartItem(key: string) {
    const data = await apiRequest(`cart/item/${key}`, {
      method: 'DELETE'
    });
    return data;
  },

  // Clear cart
  async clearCart() {
    const data = await apiRequest('cart/clear', {
      method: 'POST'
    });
    return data;
  },

  // Apply coupon
  async applyCoupon(code: string) {
    const data = await apiRequest('cart/apply-coupon', {
      method: 'POST',
      body: JSON.stringify({ code })
    });
    return data;
  }
};

// Orders API
export const ordersApi = {
  // Create order
  async createOrder(orderData: {
    payment_method: string;
    payment_method_title: string;
    set_paid?: boolean;
    billing: {
      first_name: string;
      last_name: string;
      address_1: string;
      address_2?: string;
      city: string;
      state: string;
      postcode: string;
      country: string;
      email: string;
      phone: string;
    };
    shipping?: {
      first_name: string;
      last_name: string;
      address_1: string;
      address_2?: string;
      city: string;
      state: string;
      postcode: string;
      country: string;
    };
    line_items: Array<{
      product_id: number;
      quantity: number;
      variation_id?: number;
    }>;
    shipping_lines?: Array<{
      method_id: string;
      method_title: string;
      total: string;
    }>;
    coupon_lines?: Array<{
      code: string;
    }>;
  }) {
    const data = await apiRequest('orders', {
      method: 'POST',
      body: JSON.stringify(orderData)
    });
    return data;
  },

  // Get order by ID
  async getOrder(id: number) {
    const data = await apiRequest(`orders/${id}`);
    return data;
  },

  // Get orders for customer
  async getCustomerOrders(customerId: number) {
    const data = await apiRequest(`orders?customer=${customerId}`);
    return data;
  }
};

// Customers API
export const customersApi = {
  // Create customer
  async createCustomer(customerData: {
    email: string;
    first_name: string;
    last_name: string;
    username?: string;
    password?: string;
    billing?: any;
    shipping?: any;
  }) {
    const data = await apiRequest('customers', {
      method: 'POST',
      body: JSON.stringify(customerData)
    });
    return data;
  },

  // Get customer by ID
  async getCustomer(id: number) {
    const data = await apiRequest(`customers/${id}`);
    return data;
  },

  // Update customer
  async updateCustomer(id: number, customerData: any) {
    const data = await apiRequest(`customers/${id}`, {
      method: 'PUT',
      body: JSON.stringify(customerData)
    });
    return data;
  }
};

// Utility functions
export const utils = {
  // Format price for display
  formatPrice(price: string | number, currency: string = 'USD') {
    const numPrice = typeof price === 'string' ? parseFloat(price) : price;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(numPrice);
  },

  // Calculate sale percentage
  calculateSalePercentage(regularPrice: string, salePrice: string) {
    const regular = parseFloat(regularPrice);
    const sale = parseFloat(salePrice);
    if (regular === 0) return 0;
    return Math.round(((regular - sale) / regular) * 100);
  },

  // Check if product is on sale
  isOnSale(product: Product) {
    return product.sale_price && parseFloat(product.sale_price) > 0;
  },

  // Get product main image
  getProductImage(product: Product, size: 'thumbnail' | 'medium' | 'large' | 'full' = 'medium') {
    if (product.images && product.images.length > 0) {
      return product.images[0].src;
    }
    return '/placeholder-product.jpg'; // fallback image
  },

  // Get product gallery images
  getProductGallery(product: Product) {
    return product.images || [];
  },

  // Convert WordPress product to our internal format
  convertToInternalProduct(wpProduct: Product) {
    return {
      id: wpProduct.id,
      name: wpProduct.name,
      slug: wpProduct.slug,
      price: parseFloat(wpProduct.price),
      regularPrice: wpProduct.regular_price ? parseFloat(wpProduct.regular_price) : null,
      salePrice: wpProduct.sale_price ? parseFloat(wpProduct.sale_price) : null,
      description: wpProduct.description,
      shortDescription: wpProduct.short_description,
      image: this.getProductImage(wpProduct),
      gallery: this.getProductGallery(wpProduct),
      categories: wpProduct.categories,
      inStock: wpProduct.stock_status === 'instock',
      stockQuantity: wpProduct.stock_quantity,
      rating: parseFloat(wpProduct.average_rating),
      reviewCount: wpProduct.rating_count,
      featured: wpProduct.featured,
      sku: wpProduct.sku,
      permalink: wpProduct.permalink
    };
  }
};

// Export configuration helper
export const configureWordPressApi = (config: {
  baseUrl: string;
  consumerKey: string;
  consumerSecret: string;
}) => {
  WP_CONFIG.baseUrl = config.baseUrl;
  WP_CONFIG.consumerKey = config.consumerKey;
  WP_CONFIG.consumerSecret = config.consumerSecret;
};