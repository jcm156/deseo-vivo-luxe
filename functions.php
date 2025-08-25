<?php
/**
 * Deseo Vivo Luxe Theme Functions
 *
 * @package DeseaVivoLuxe
 * @version 1.0.0
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

/**
 * Theme Setup
 */
function deseo_vivo_luxe_setup() {
    // Add theme support
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo', array(
        'height'      => 100,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
    ));
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
    add_theme_support('title-tag');
    add_theme_support('woocommerce');

    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'deseo-vivo-luxe'),
        'footer'  => __('Footer Menu', 'deseo-vivo-luxe'),
        'legal'   => __('Legal Menu', 'deseo-vivo-luxe'),
    ));
}
add_action('after_setup_theme', 'deseo_vivo_luxe_setup');

/**
 * Enqueue scripts and styles
 */
function deseo_vivo_luxe_scripts() {
    // Theme stylesheet
    wp_enqueue_style('deseo-vivo-luxe-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Google Fonts
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap', array(), null);
    
    // Main JavaScript
    wp_enqueue_script('deseo-vivo-luxe-main', get_template_directory_uri() . '/assets/js/main.js', array('jquery'), '1.0.0', true);
    
    // Localize script
    wp_localize_script('deseo-vivo-luxe-main', 'deseoVivoLuxe', array(
        'ajaxurl' => admin_url('admin-ajax.php'),
        'nonce'   => wp_create_nonce('deseo_vivo_luxe_nonce')
    ));
}
add_action('wp_enqueue_scripts', 'deseo_vivo_luxe_scripts');

/**
 * AJAX Handlers
 */
function deseo_vivo_luxe_add_to_cart() {
    check_ajax_referer('deseo_vivo_luxe_nonce', 'nonce');
    
    if (!isset($_POST['product_id'])) {
        wp_send_json_error('Product ID is required');
    }
    
    $product_id = absint($_POST['product_id']);
    $quantity = isset($_POST['quantity']) ? absint($_POST['quantity']) : 1;
    
    $added = WC()->cart->add_to_cart($product_id, $quantity);
    
    if ($added) {
        wp_send_json_success(array(
            'message' => __('Product added to cart', 'deseo-vivo-luxe'),
            'cart_count' => WC()->cart->get_cart_contents_count()
        ));
    } else {
        wp_send_json_error(__('Failed to add product to cart', 'deseo-vivo-luxe'));
    }
}
add_action('wp_ajax_deseo_vivo_luxe_add_to_cart', 'deseo_vivo_luxe_add_to_cart');
add_action('wp_ajax_nopriv_deseo_vivo_luxe_add_to_cart', 'deseo_vivo_luxe_add_to_cart');

function deseo_vivo_luxe_get_cart_count() {
    check_ajax_referer('deseo_vivo_luxe_nonce', 'nonce');
    
    wp_send_json_success(array(
        'count' => WC()->cart->get_cart_contents_count()
    ));
}
add_action('wp_ajax_deseo_vivo_luxe_get_cart_count', 'deseo_vivo_luxe_get_cart_count');
add_action('wp_ajax_nopriv_deseo_vivo_luxe_get_cart_count', 'deseo_vivo_luxe_get_cart_count');

/**
 * Age Verification
 */
function deseo_vivo_luxe_age_verification() {
    if (!isset($_COOKIE['age_verified'])) {
        ?>
        <div id="age-verification-overlay" class="age-overlay">
            <div class="age-verification-content">
                <h2><?php _e('Age Verification', 'deseo-vivo-luxe'); ?></h2>
                <p><?php _e('Please confirm you are over 18 years old to continue.', 'deseo-vivo-luxe'); ?></p>
                <button id="confirm-age"><?php _e('Yes, I am over 18', 'deseo-vivo-luxe'); ?></button>
                <button id="deny-age"><?php _e('No, I am under 18', 'deseo-vivo-luxe'); ?></button>
            </div>
        </div>
        <?php
    }
}
add_action('wp_footer', 'deseo_vivo_luxe_age_verification');

/**
 * GDPR Cookie Consent Banner
 */
function deseo_vivo_luxe_cookie_consent() {
    if (!isset($_COOKIE['gdpr_consent'])) {
        ?>
        <div id="cookie-consent-banner" class="cookie-banner">
            <p><?php _e('We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.', 'deseo-vivo-luxe'); ?></p>
            <button id="accept-cookies"><?php _e('Accept', 'deseo-vivo-luxe'); ?></button>
            <button id="reject-cookies"><?php _e('Reject', 'deseo-vivo-luxe'); ?></button>
            <a href="<?php echo get_privacy_policy_url(); ?>"><?php _e('Learn More', 'deseo-vivo-luxe'); ?></a>
        </div>
        <?php
    }
}
add_action('wp_footer', 'deseo_vivo_luxe_cookie_consent');

/**
 * Custom Post Types
 */
function deseo_vivo_luxe_register_post_types() {
    // Testimonials
    register_post_type('testimonial', array(
        'labels' => array(
            'name' => __('Testimonials', 'deseo-vivo-luxe'),
            'singular_name' => __('Testimonial', 'deseo-vivo-luxe'),
        ),
        'public' => true,
        'supports' => array('title', 'editor', 'thumbnail'),
        'menu_icon' => 'dashicons-format-quote',
    ));

    // FAQs
    register_post_type('faq', array(
        'labels' => array(
            'name' => __('FAQs', 'deseo-vivo-luxe'),
            'singular_name' => __('FAQ', 'deseo-vivo-luxe'),
        ),
        'public' => true,
        'supports' => array('title', 'editor'),
        'menu_icon' => 'dashicons-editor-help',
    ));
}
add_action('init', 'deseo_vivo_luxe_register_post_types');

/**
 * Extra Security Measures
 */
// Remove WordPress version number
remove_action('wp_head', 'wp_generator');

// Disable XML-RPC
add_filter('xmlrpc_enabled', '__return_false');
add_filter('wp_headers', function($headers) {
    unset($headers['X-Pingback']);
    return $headers;
});

/**
 * Payment Gateway Helper Comments
 */
// PayPal Integration
// Documentation: https://developer.paypal.com/docs/api/overview/
// Required: Client ID and Secret from PayPal Developer Dashboard
// Supported: Express Checkout, Standard Payments, Subscription Payments

// Stripe Integration
// Documentation: https://stripe.com/docs/api
// Required: Publishable Key and Secret Key from Stripe Dashboard
// Supported: Credit Cards, Apple Pay, Google Pay, SEPA Direct Debit

// Square Integration
// Documentation: https://developer.squareup.com/docs
// Required: Application ID and Access Token from Square Developer Dashboard
// Supported: Card Payments, Square Gift Cards, Cash App Pay

// Authorize.Net Integration
// Documentation: https://developer.authorize.net/api/reference/
// Required: API Login ID and Transaction Key
// Supported: Credit Cards, eCheck, Recurring Billing

// Crypto Payment Integration
// Supported Currencies: BTC, ETH, USDT, etc.
// Consider using services like BitPay or Coinbase Commerce
// Required: API Keys and Webhook Configuration
?>
