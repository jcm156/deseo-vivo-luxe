<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @package Deseo_Vivo_Luxe
 */

get_header(); ?>

<main id="primary" class="site-main error-404-main">
    <div class="container">
        <section class="error-404 not-found">
            <div class="error-content">
                <!-- 404 Icon -->
                <div class="error-icon">
                    <svg class="icon-404" width="120" height="120" viewBox="0 0 120 120" aria-hidden="true">
                        <path class="error-circle" d="M60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0zm0 110c-27.57 0-50-22.43-50-50s22.43-50 50-50 50 22.43 50 50-22.43 50-50 50z"/>
                        <path class="error-text" d="M57.5 75.5h5v5h-5v-5zm0-35h5v30h-5v-30z"/>
                    </svg>
                </div>

                <!-- Error Header -->
                <header class="error-header">
                    <h1 class="error-title">
                        <?php esc_html_e('Page Not Found', 'deseo-vivo-luxe'); ?>
                    </h1>
                    <p class="error-description">
                        <?php esc_html_e('We apologize, but the page you\'re looking for seems to have moved or no longer exists. Let us help you find what you need.', 'deseo-vivo-luxe'); ?>
                    </p>
                </header>

                <!-- Search Form -->
                <div class="error-search">
                    <h2 class="search-title">
                        <?php esc_html_e('Search Our Site', 'deseo-vivo-luxe'); ?>
                    </h2>
                    <?php get_search_form(); ?>
                </div>

                <!-- Quick Links -->
                <nav class="error-navigation" aria-label="<?php esc_attr_e('Helpful Links', 'deseo-vivo-luxe'); ?>">
                    <h2 class="navigation-title">
                        <?php esc_html_e('Quick Links', 'deseo-vivo-luxe'); ?>
                    </h2>
                    <div class="quick-links">
                        <a href="<?php echo esc_url(home_url('/')); ?>" class="quick-link">
                            <svg class="icon icon-home" aria-hidden="true"><use href="#icon-home"></use></svg>
                            <span><?php esc_html_e('Return Home', 'deseo-vivo-luxe'); ?></span>
                        </a>
                        <?php if (class_exists('WooCommerce')) : ?>
                            <a href="<?php echo esc_url(wc_get_page_permalink('shop')); ?>" class="quick-link">
                                <svg class="icon icon-shop" aria-hidden="true"><use href="#icon-shop"></use></svg>
                                <span><?php esc_html_e('Visit Shop', 'deseo-vivo-luxe'); ?></span>
                            </a>
                        <?php endif; ?>
                        <a href="<?php echo esc_url(get_permalink(get_page_by_path('contact'))); ?>" class="quick-link">
                            <svg class="icon icon-contact" aria-hidden="true"><use href="#icon-contact"></use></svg>
                            <span><?php esc_html_e('Contact Us', 'deseo-vivo-luxe'); ?></span>
                        </a>
                    </div>
                </nav>

                <?php if (class_exists('WooCommerce')) : ?>
                    <!-- Featured Products -->
                    <section class="error-products">
                        <h2 class="products-title">
                            <?php esc_html_e('Popular Products', 'deseo-vivo-luxe'); ?>
                        </h2>
                        <div class="products-grid">
                            <?php
                            $featured_products = wc_get_products(array(
                                'featured' => true,
                                'limit' => 4,
                                'status' => 'publish'
                            ));

                            foreach ($featured_products as $product) :
                                $product_id = $product->get_id();
                            ?>
                                <div class="product-card">
                                    <a href="<?php echo esc_url(get_permalink($product_id)); ?>" class="product-link">
                                        <?php echo wp_get_attachment_image($product->get_image_id(), 'woocommerce_thumbnail', false, array('class' => 'product-image')); ?>
                                        <h3 class="product-title"><?php echo esc_html($product->get_name()); ?></h3>
                                        <span class="product-price"><?php echo wp_kses_post($product->get_price_html()); ?></span>
                                    </a>
                                </div>
                            <?php endforeach; ?>
                        </div>
                        <a href="<?php echo esc_url(wc_get_page_permalink('shop')); ?>" class="btn btn-primary view-all">
                            <?php esc_html_e('View All Products', 'deseo-vivo-luxe'); ?>
                        </a>
                    </section>
                <?php endif; ?>
            </div>
        </section>
    </div>
</main>

<?php get_footer(); ?>
