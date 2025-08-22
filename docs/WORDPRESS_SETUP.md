# WordPress WooCommerce Headless Setup Guide

This React application has been configured as a headless frontend for your WordPress WooCommerce site. Follow these steps to connect it to your WordPress backend.

## Prerequisites

1. **WordPress Site** with WooCommerce plugin installed
2. **WordPress Admin Access** to configure API keys
3. **HTTPS** enabled on your WordPress site (required for secure API communication)

## Step 1: Install Required WordPress Plugins

### Essential Plugins:
1. **WooCommerce** - Core e-commerce functionality
2. **WooCommerce REST API** (usually included with WooCommerce)
3. **JWT Authentication for WooCommerce** (for customer authentication)
4. **WooCommerce Cart REST API** (for cart functionality)

### Optional but Recommended:
- **Yoast SEO** - For better SEO
- **WooCommerce Subscriptions** - If you need recurring payments
- **WooCommerce Bookings** - For appointment-based products

## Step 2: Configure WooCommerce REST API

### 2.1 Create API Keys
1. Go to **WooCommerce > Settings > Advanced > REST API**
2. Click **Add key**
3. Fill in the details:
   - **Description**: "React Headless Frontend"
   - **User**: Select an admin user
   - **Permissions**: Read/Write
4. Click **Generate API key**
5. **IMPORTANT**: Copy and save the Consumer Key and Consumer Secret immediately

### 2.2 Enable CORS (if needed)
Add this to your WordPress `functions.php` file:

```php
// Enable CORS for your React app
function add_cors_http_header(){
    header("Access-Control-Allow-Origin: https://your-react-app-domain.com");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
}
add_action('init','add_cors_http_header');

// Handle preflight requests
function handle_preflight() {
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        header("Access-Control-Allow-Origin: https://your-react-app-domain.com");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
        header("Access-Control-Allow-Headers: Content-Type, Authorization");
        exit;
    }
}
add_action('init', 'handle_preflight');
```

## Step 3: Configure Your React App

### 3.1 Update Configuration File
Edit `src/config/wordpress.ts`:

```typescript
export const WORDPRESS_CONFIG = {
  BASE_URL: 'https://your-wordpress-site.com', // Your actual WordPress URL
  CONSUMER_KEY: 'ck_your_actual_consumer_key_here',
  CONSUMER_SECRET: 'cs_your_actual_consumer_secret_here',
  API_VERSION: 'wc/v3',
};
```

### 3.2 Environment Variables (Recommended)
Create a `.env.local` file in your project root:

```env
VITE_WP_BASE_URL=https://your-wordpress-site.com
VITE_WC_CONSUMER_KEY=ck_your_actual_consumer_key_here
VITE_WC_CONSUMER_SECRET=cs_your_actual_consumer_secret_here
```

## Step 4: Set Up Products in WordPress

### 4.1 Product Categories
Create categories in **Products > Categories**:
- For Her
- For Him  
- For Couples
- Privée Collection
- Wellness
- Luxury Gifts

### 4.2 Product Attributes
Go to **Products > Attributes** and create:
- Color
- Size
- Material
- Style

### 4.3 Add Products
1. Go to **Products > Add New**
2. Fill in product details:
   - **Title**: Product name
   - **Description**: Full product description
   - **Short Description**: Brief summary for product cards
   - **Product Data**: Set price, inventory, shipping
   - **Product Image**: Main product image
   - **Product Gallery**: Additional images
   - **Categories**: Assign to appropriate categories
   - **Attributes**: Set product variations

## Step 5: Configure Cart Functionality

### 5.1 Install CoCart Plugin
The easiest way to handle cart functionality is to install the **CoCart** plugin:

1. Install **CoCart** plugin from WordPress repository
2. Activate the plugin
3. The cart endpoints will be available at:
   - `GET /wp-json/cocart/v2/cart`
   - `POST /wp-json/cocart/v2/cart/add-item`
   - `PUT /wp-json/cocart/v2/cart/item/{item_key}`
   - `DELETE /wp-json/cocart/v2/cart/item/{item_key}`

### 5.2 Alternative: Custom Cart Endpoints
If you prefer custom implementation, add this to your theme's `functions.php`:

```php
// Custom cart endpoints
add_action('rest_api_init', function () {
    register_rest_route('custom/v1', '/cart', array(
        'methods' => 'GET',
        'callback' => 'get_cart_contents',
        'permission_callback' => '__return_true'
    ));
    
    register_rest_route('custom/v1', '/cart/add', array(
        'methods' => 'POST',
        'callback' => 'add_to_cart',
        'permission_callback' => '__return_true'
    ));
});

function get_cart_contents() {
    if (!WC()->cart) {
        return new WP_Error('cart_not_found', 'Cart not initialized', array('status' => 404));
    }
    
    return array(
        'items' => WC()->cart->get_cart(),
        'total' => WC()->cart->get_cart_total(),
        'count' => WC()->cart->get_cart_contents_count()
    );
}

function add_to_cart($request) {
    $product_id = $request->get_param('product_id');
    $quantity = $request->get_param('quantity') ?: 1;
    
    $cart_item_key = WC()->cart->add_to_cart($product_id, $quantity);
    
    if ($cart_item_key) {
        return array('success' => true, 'cart_item_key' => $cart_item_key);
    } else {
        return new WP_Error('add_to_cart_failed', 'Failed to add item to cart', array('status' => 400));
    }
}
```

## Step 6: Customer Authentication (Optional)

For customer accounts and order history, install **JWT Authentication for WooCommerce**:

1. Install the plugin
2. Add this to `wp-config.php`:
```php
define('JWT_AUTH_SECRET_KEY', 'your-top-secret-key-here');
define('JWT_AUTH_CORS_ENABLE', true);
```

## Step 7: Testing the Connection

### 7.1 Test API Connection
Open your browser console and run:

```javascript
fetch('https://your-wordpress-site.com/wp-json/wc/v3/products?consumer_key=ck_your_key&consumer_secret=cs_your_secret')
  .then(response => response.json())
  .then(data => console.log(data));
```

### 7.2 Verify React App
1. Start your React development server: `npm run dev`
2. Check that products load on the homepage
3. Test navigation to product detail pages
4. Test adding items to cart

## Step 8: Security Considerations

### 8.1 WordPress Security
- Use strong passwords for all admin accounts
- Keep WordPress and plugins updated
- Install a security plugin like Wordfence
- Use HTTPS everywhere
- Limit login attempts

### 8.2 API Security
- Never expose secret keys in frontend code
- Use environment variables for sensitive data
- Consider implementing rate limiting
- Monitor API usage

### 8.3 GDPR Compliance
Your WordPress setup already includes:
- Privacy policy
- Cookie consent
- Data processing notices
- Age verification

Make sure your WordPress site has:
- Privacy policy page
- Terms and conditions
- Cookie policy
- Data retention policies

## Step 9: Performance Optimization

### 9.1 WordPress Optimization
- Install a caching plugin (W3 Total Cache, WP Rocket)
- Optimize images with plugins like Smush
- Use a CDN for better global performance
- Enable GZIP compression

### 9.2 React App Optimization
- The app already includes optimized API caching
- Images are lazy-loaded
- Components are optimized for performance

## Step 10: Going Live

### 10.1 WordPress Production
1. Move WordPress to production server
2. Update DNS settings
3. Configure SSL certificate
4. Set up automated backups
5. Configure monitoring

### 10.2 React App Deployment
1. Update `WORDPRESS_CONFIG` with production URLs
2. Build the React app: `npm run build`
3. Deploy to your hosting platform
4. Update CORS settings in WordPress

## Troubleshooting

### Common Issues:

**"Products not loading"**
- Check WordPress URL in configuration
- Verify API keys are correct
- Check CORS settings
- Ensure WooCommerce is active

**"Cart not working"**
- Install CoCart plugin
- Check cart API endpoints
- Verify session handling

**"CORS errors"**
- Add CORS headers to WordPress
- Check domain whitelist
- Verify HTTPS usage

**"API authentication failed"**
- Regenerate API keys
- Check key permissions (should be Read/Write)
- Verify key format (no extra spaces)

## Support

For additional help:
1. Check WooCommerce REST API documentation
2. Review CoCart plugin documentation
3. WordPress developer resources
4. React Query documentation for API state management

## Next Steps

Once basic functionality is working:
1. Set up payment processing (Stripe, PayPal)
2. Configure shipping methods
3. Set up email notifications
4. Add product reviews
5. Implement customer accounts
6. Set up analytics tracking