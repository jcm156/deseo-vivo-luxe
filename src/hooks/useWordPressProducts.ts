import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { productsApi, categoriesApi, cartApi, utils } from '@/lib/wordpress-api';
import { useToast } from '@/hooks/use-toast';

// Hook for fetching products
export const useProducts = (params?: {
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
}) => {
  return useQuery({
    queryKey: ['products', params],
    queryFn: () => productsApi.getProducts(params),
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
  });
};

// Hook for fetching a single product
export const useProduct = (id: number) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => productsApi.getProduct(id),
    staleTime: 10 * 60 * 1000, // 10 minutes
    retry: 2,
  });
};

// Hook for fetching product by slug
export const useProductBySlug = (slug: string) => {
  return useQuery({
    queryKey: ['product', 'slug', slug],
    queryFn: () => productsApi.getProductBySlug(slug),
    staleTime: 10 * 60 * 1000, // 10 minutes
    retry: 2,
    enabled: !!slug,
  });
};

// Hook for fetching product variations
export const useProductVariations = (productId: number) => {
  return useQuery({
    queryKey: ['product-variations', productId],
    queryFn: () => productsApi.getProductVariations(productId),
    staleTime: 10 * 60 * 1000,
    retry: 2,
    enabled: !!productId,
  });
};

// Hook for fetching product reviews
export const useProductReviews = (productId: number) => {
  return useQuery({
    queryKey: ['product-reviews', productId],
    queryFn: () => productsApi.getProductReviews(productId),
    staleTime: 5 * 60 * 1000,
    retry: 2,
    enabled: !!productId,
  });
};

// Hook for fetching categories
export const useCategories = (params?: {
  page?: number;
  per_page?: number;
  search?: string;
  parent?: number;
  orderby?: 'id' | 'include' | 'slug' | 'name' | 'description' | 'term_group' | 'count';
  order?: 'asc' | 'desc';
  hide_empty?: boolean;
}) => {
  return useQuery({
    queryKey: ['categories', params],
    queryFn: () => categoriesApi.getCategories(params),
    staleTime: 15 * 60 * 1000, // 15 minutes
    retry: 2,
  });
};

// Hook for fetching featured products
export const useFeaturedProducts = (limit: number = 8) => {
  return useQuery({
    queryKey: ['featured-products', limit],
    queryFn: () => productsApi.getProducts({ 
      featured: true, 
      per_page: limit,
      status: 'publish'
    }),
    staleTime: 10 * 60 * 1000,
    retry: 2,
  });
};

// Hook for fetching sale products
export const useSaleProducts = (limit: number = 8) => {
  return useQuery({
    queryKey: ['sale-products', limit],
    queryFn: () => productsApi.getProducts({ 
      on_sale: true, 
      per_page: limit,
      status: 'publish'
    }),
    staleTime: 5 * 60 * 1000,
    retry: 2,
  });
};

// Hook for product search
export const useProductSearch = (searchTerm: string, enabled: boolean = true) => {
  return useQuery({
    queryKey: ['product-search', searchTerm],
    queryFn: () => productsApi.getProducts({ 
      search: searchTerm,
      per_page: 20,
      status: 'publish'
    }),
    staleTime: 2 * 60 * 1000, // 2 minutes for search results
    retry: 1,
    enabled: enabled && !!searchTerm && searchTerm.length >= 2,
  });
};

// Hook for fetching cart
export const useCart = () => {
  return useQuery({
    queryKey: ['cart'],
    queryFn: () => cartApi.getCart(),
    staleTime: 0, // Always fresh
    retry: 2,
  });
};

// Hook for adding to cart
export const useAddToCart = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: ({ 
      productId, 
      quantity = 1, 
      variation 
    }: { 
      productId: number; 
      quantity?: number; 
      variation?: any;
    }) => cartApi.addToCart(productId, quantity, variation),
    onSuccess: () => {
      // Invalidate cart query to refresh cart data
      queryClient.invalidateQueries({ queryKey: ['cart'] });
      toast({
        title: "Added to cart",
        description: "Product has been added to your cart successfully.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to add product to cart. Please try again.",
        variant: "destructive",
      });
      console.error('Add to cart error:', error);
    },
  });
};

// Hook for updating cart item
export const useUpdateCartItem = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: ({ key, quantity }: { key: string; quantity: number }) =>
      cartApi.updateCartItem(key, quantity),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
      toast({
        title: "Cart updated",
        description: "Cart item quantity has been updated.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to update cart item. Please try again.",
        variant: "destructive",
      });
      console.error('Update cart error:', error);
    },
  });
};

// Hook for removing cart item
export const useRemoveCartItem = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: (key: string) => cartApi.removeCartItem(key),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
      toast({
        title: "Item removed",
        description: "Product has been removed from your cart.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to remove item from cart. Please try again.",
        variant: "destructive",
      });
      console.error('Remove cart item error:', error);
    },
  });
};

// Hook for applying coupon
export const useApplyCoupon = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: (code: string) => cartApi.applyCoupon(code),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
      toast({
        title: "Coupon applied",
        description: "Your discount has been applied successfully.",
      });
    },
    onError: (error) => {
      toast({
        title: "Coupon error",
        description: "Invalid coupon code or coupon has expired.",
        variant: "destructive",
      });
      console.error('Apply coupon error:', error);
    },
  });
};

// Hook for clearing cart
export const useClearCart = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: () => cartApi.clearCart(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
      toast({
        title: "Cart cleared",
        description: "All items have been removed from your cart.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to clear cart. Please try again.",
        variant: "destructive",
      });
      console.error('Clear cart error:', error);
    },
  });
};

// Custom hook for product filtering and sorting
export const useProductFilters = () => {
  const queryClient = useQueryClient();

  const searchProducts = (params: {
    search?: string;
    category?: string;
    min_price?: number;
    max_price?: number;
    on_sale?: boolean;
    featured?: boolean;
    orderby?: 'date' | 'id' | 'include' | 'title' | 'slug' | 'price' | 'popularity' | 'rating';
    order?: 'asc' | 'desc';
    page?: number;
    per_page?: number;
  }) => {
    return queryClient.fetchQuery({
      queryKey: ['filtered-products', params],
      queryFn: () => productsApi.getProducts(params),
      staleTime: 2 * 60 * 1000,
    });
  };

  return { searchProducts };
};

// Utility hooks
export const useProductUtils = () => {
  return {
    formatPrice: utils.formatPrice,
    calculateSalePercentage: utils.calculateSalePercentage,
    isOnSale: utils.isOnSale,
    getProductImage: utils.getProductImage,
    getProductGallery: utils.getProductGallery,
    convertToInternalProduct: utils.convertToInternalProduct,
  };
};