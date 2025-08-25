<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @package Deseo_Vivo_Luxe
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site">
    <a class="skip-link screen-reader-text" href="#primary">
        <?php esc_html_e('Skip to content', 'deseo-vivo-luxe'); ?>
    </a>

    <!-- Header -->
    <header id="masthead" class="site-header">
        <div class="container">
            <!-- Branding Section -->
            <div class="site-branding">
                <?php
                if (has_custom_logo()) :
                    the_custom_logo();
                else :
                ?>
                    <h1 class="site-title">
                        <a href="<?php echo esc_url(home_url('/')); ?>" rel="home">
                            <?php bloginfo('name'); ?>
                        </a>
                    </h1>
                <?php endif; ?>
            </div>

            <!-- Main Navigation -->
            <nav id="site-navigation" class="main-navigation">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'menu_id'        => 'primary-menu',
                    'container'      => false,
                ));
                ?>
            </nav>

            <!-- Action Buttons -->
            <div class="header-actions">
                <!-- Search Toggle -->
                <button class="search-toggle" aria-expanded="false">
                    <span class="screen-reader-text"><?php esc_html_e('Search', 'deseo-vivo-luxe'); ?></span>
                    <svg class="icon icon-search" aria-hidden="true" role="img">
                        <use href="#icon-search"></use>
                    </svg>
                </button>

                <!-- Wishlist -->
                <?php if (class_exists('YITH_WCWL')) : ?>
                    <a href="<?php echo esc_url(YITH_WCWL()->get_wishlist_url()); ?>" class="wishlist-link">
                        <span class="screen-reader-text"><?php esc_html_e('Wishlist', 'deseo-vivo-luxe'); ?></span>
                        <svg class="icon icon-heart" aria-hidden="true" role="img">
                            <use href="#icon-heart"></use>
                        </svg>
                        <span class="wishlist-count"><?php echo esc_html(yith_wcwl_count_all_products()); ?></span>
                    </a>
                <?php endif; ?>

                <!-- User Account -->
                <div class="user-account dropdown">
                    <button class="account-toggle" aria-expanded="false">
                        <span class="screen-reader-text"><?php esc_html_e('My Account', 'deseo-vivo-luxe'); ?></span>
                        <svg class="icon icon-user" aria-hidden="true" role="img">
                            <use href="#icon-user"></use>
                        </svg>
                    </button>
                    <div class="dropdown-menu">
                        <?php if (is_user_logged_in()) : ?>
                            <a href="<?php echo esc_url(wc_get_page_permalink('myaccount')); ?>">
                                <?php esc_html_e('My Account', 'deseo-vivo-luxe'); ?>
                            </a>
                            <a href="<?php echo esc_url(wc_get_endpoint_url('orders')); ?>">
                                <?php esc_html_e('Orders', 'deseo-vivo-luxe'); ?>
                            </a>
                            <a href="<?php echo esc_url(wp_logout_url(home_url())); ?>">
                                <?php esc_html_e('Logout', 'deseo-vivo-luxe'); ?>
                            </a>
                        <?php else : ?>
                            <a href="<?php echo esc_url(wc_get_page_permalink('myaccount')); ?>">
                                <?php esc_html_e('Login', 'deseo-vivo-luxe'); ?>
                            </a>
                        <?php endif; ?>
                    </div>
                </div>

                <!-- Mini Cart -->
                <?php if (class_exists('WooCommerce')) : ?>
                    <div class="mini-cart dropdown">
                        <button class="cart-toggle" aria-expanded="false">
                            <span class="screen-reader-text"><?php esc_html_e('Cart', 'deseo-vivo-luxe'); ?></span>
                            <svg class="icon icon-cart" aria-hidden="true" role="img">
                                <use href="#icon-cart"></use>
                            </svg>
                            <span class="cart-count"><?php echo esc_html(WC()->cart->get_cart_contents_count()); ?></span>
                        </button>
                        <div class="dropdown-menu cart-dropdown">
                            <div class="widget_shopping_cart_content">
                                <?php woocommerce_mini_cart(); ?>
                            </div>
                        </div>
                    </div>
                <?php endif; ?>

                <!-- Mobile Menu Toggle -->
                <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
                    <span class="screen-reader-text"><?php esc_html_e('Menu', 'deseo-vivo-luxe'); ?></span>
                    <span class="hamburger-icon"></span>
                </button>
            </div>
        </div>
    </header>

    <!-- Mobile Menu Overlay -->
    <div class="mobile-menu-overlay">
        <div class="mobile-menu-container"></div>
    </div>

    <!-- Search Modal -->
    <div class="search-modal" aria-hidden="true">
        <div class="search-modal-inner">
            <button class="close-search">
                <span class="screen-reader-text"><?php esc_html_e('Close search', 'deseo-vivo-luxe'); ?></span>
                <svg class="icon icon-close" aria-hidden="true" role="img">
                    <use href="#icon-close"></use>
                </svg>
            </button>
            <?php get_search_form(); ?>
        </div>
    </div>

    <div id="content" class="site-content">
