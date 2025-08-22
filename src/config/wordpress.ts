// WordPress Configuration
// Update these values to connect to your WordPress site

export const WORDPRESS_CONFIG = {
  // Your WordPress site URL (without trailing slash)
  BASE_URL: 'https://your-wordpress-site.com',
  
  // WooCommerce REST API credentials
  // Get these from WooCommerce > Settings > Advanced > REST API
  CONSUMER_KEY: 'ck_your_consumer_key_here',
  CONSUMER_SECRET: 'cs_your_consumer_secret_here',
  
  // API version
  API_VERSION: 'wc/v3',
  
  // Cache settings (in milliseconds)
  CACHE_DURATION: {
    PRODUCTS: 5 * 60 * 1000,     // 5 minutes
    CATEGORIES: 15 * 60 * 1000,  // 15 minutes
    CART: 0,                     // No cache for cart
    ORDERS: 2 * 60 * 1000,       // 2 minutes
  }
};

// Environment-specific configuration
if (typeof window !== 'undefined') {
  // Browser environment - use environment variables
  const config = {
    BASE_URL: import.meta.env.VITE_WP_BASE_URL || WORDPRESS_CONFIG.BASE_URL,
    CONSUMER_KEY: import.meta.env.VITE_WC_CONSUMER_KEY || WORDPRESS_CONFIG.CONSUMER_KEY,
    CONSUMER_SECRET: import.meta.env.VITE_WC_CONSUMER_SECRET || WORDPRESS_CONFIG.CONSUMER_SECRET,
  };
  
  // Update the configuration
  Object.assign(WORDPRESS_CONFIG, config);
}

// Validation function
export const validateWordPressConfig = () => {
  const errors: string[] = [];
  
  if (!WORDPRESS_CONFIG.BASE_URL || WORDPRESS_CONFIG.BASE_URL === 'https://your-wordpress-site.com') {
    errors.push('WordPress BASE_URL is not configured');
  }
  
  if (!WORDPRESS_CONFIG.CONSUMER_KEY || WORDPRESS_CONFIG.CONSUMER_KEY === 'ck_your_consumer_key_here') {
    errors.push('WooCommerce CONSUMER_KEY is not configured');
  }
  
  if (!WORDPRESS_CONFIG.CONSUMER_SECRET || WORDPRESS_CONFIG.CONSUMER_SECRET === 'cs_your_consumer_secret_here') {
    errors.push('WooCommerce CONSUMER_SECRET is not configured');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Helper to get full API URL
export const getApiUrl = (endpoint: string) => {
  return `${WORDPRESS_CONFIG.BASE_URL}/wp-json/${WORDPRESS_CONFIG.API_VERSION}/${endpoint}`;
};

// Helper to get WooCommerce auth
export const getWooCommerceAuth = () => {
  return btoa(`${WORDPRESS_CONFIG.CONSUMER_KEY}:${WORDPRESS_CONFIG.CONSUMER_SECRET}`);
};