<?php
/**
 * The main template file
 *
 * @package Deseo_Vivo_Luxe
 */

get_header(); ?>

<main id="primary" class="site-main">
    <!-- Hero Section -->
    <section id="hero" class="hero-section">
        <div class="hero-image" style="background-image: url('<?php echo esc_url(get_theme_file_uri('assets/images/hero-image.jpg')); ?>');">
            <div class="hero-overlay"></div>
            <div class="container">
                <div class="hero-content">
                    <h1 class="hero-title"><?php echo esc_html(get_theme_mod('hero_title', 'Discover Luxury & Elegance')); ?></h1>
                    <p class="hero-subtitle"><?php echo esc_html(get_theme_mod('hero_subtitle', 'Experience our premium collection of intimate products')); ?></p>
                    <div class="hero-buttons">
                        <a href="<?php echo esc_url(get_permalink(wc_get_page_id('shop'))); ?>" class="btn btn-primary">
                            <?php esc_html_e('Explore Collection', 'deseo-vivo-luxe'); ?>
                        </a>
                        <a href="<?php echo esc_url(get_permalink(get_theme_mod('featured_products_page'))); ?>" class="btn btn-secondary">
                            <?php esc_html_e('View Products', 'deseo-vivo-luxe'); ?>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Trust Indicators Section -->
    <section id="trust-indicators" class="trust-indicators-section">
        <div class="container">
            <div class="trust-grid">
                <div class="trust-item">
                    <svg class="icon icon-shipping" aria-hidden="true" role="img"><use href="#icon-shipping"></use></svg>
                    <h3><?php esc_html_e('Discreet Shipping', 'deseo-vivo-luxe'); ?></h3>
                    <p><?php esc_html_e('Plain packaging with no external branding', 'deseo-vivo-luxe'); ?></p>
                </div>
                <div class="trust-item">
                    <svg class="icon icon-quality" aria-hidden="true" role="img"><use href="#icon-quality"></use></svg>
                    <h3><?php esc_html_e('Premium Quality', 'deseo-vivo-luxe'); ?></h3>
                    <p><?php esc_html_e('Certified materials & strict quality control', 'deseo-vivo-luxe'); ?></p>
                </div>
                <div class="trust-item">
                    <svg class="icon icon-secure" aria-hidden="true" role="img"><use href="#icon-secure"></use></svg>
                    <h3><?php esc_html_e('Secure Payment', 'deseo-vivo-luxe'); ?></h3>
                    <p><?php esc_html_e('SSL encrypted checkout & multiple payment options', 'deseo-vivo-luxe'); ?></p>
                </div>
                <div class="trust-item">
                    <svg class="icon icon-support" aria-hidden="true" role="img"><use href="#icon-support"></use></svg>
                    <h3><?php esc_html_e('24/7 Support', 'deseo-vivo-luxe'); ?></h3>
                    <p><?php esc_html_e('Expert assistance available around the clock', 'deseo-vivo-luxe'); ?></p>
                </div>
            </div>
        </div>
    </section>

    <!-- Featured Products Section -->
    <section id="featured-products" class="products-section">
        <div class="container">
            <header class="section-header">
                <h2 class="section-title">
                    <?php echo esc_html(get_theme_mod('featured_products_title', 'Featured Products')); ?>
                </h2>
                <p class="section-subtitle">
                    <?php echo esc_html(get_theme_mod('featured_products_subtitle', 'Discover our carefully curated selection')); ?>
                </p>
            </header>

            <div class="products-grid">
                <?php
                $featured_products = new WP_Query(array(
                    'post_type' => 'product',
                    'posts_per_page' => 8,
                    'tax_query' => array(
                        array(
                            'taxonomy' => 'product_visibility',
                            'field'    => 'name',
                            'terms'    => 'featured',
                        ),
                    ),
                ));

                if ($featured_products->have_posts()) :
                    while ($featured_products->have_posts()) : $featured_products->the_post();
                        get_template_part('woocommerce/content', 'product');
                    endwhile;
                    wp_reset_postdata();
                endif;
                ?>
            </div>

            <div class="section-footer">
                <a href="<?php echo esc_url(get_permalink(wc_get_page_id('shop'))); ?>" class="btn btn-primary">
                    <?php esc_html_e('View All Products', 'deseo-vivo-luxe'); ?>
                </a>
            </div>
        </div>
    </section>

    <!-- Newsletter Section -->
    <section id="newsletter" class="newsletter-section">
        <div class="container">
            <div class="newsletter-wrapper">
                <div class="newsletter-content">
                    <h2><?php echo esc_html(get_theme_mod('newsletter_title', 'Stay Updated')); ?></h2>
                    <p><?php echo esc_html(get_theme_mod('newsletter_description', 'Subscribe to our newsletter for exclusive offers and updates')); ?></p>
                </div>

                <form class="newsletter-form" action="<?php echo esc_url(get_theme_mod('newsletter_action_url')); ?>" method="post">
                    <div class="form-group">
                        <label class="screen-reader-text" for="newsletter-email">
                            <?php esc_html_e('Email Address', 'deseo-vivo-luxe'); ?>
                        </label>
                        <input type="email" 
                               id="newsletter-email" 
                               name="email" 
                               placeholder="<?php esc_attr_e('Enter your email address', 'deseo-vivo-luxe'); ?>"
                               required>
                        <button type="submit" class="btn btn-primary">
                            <?php esc_html_e('Subscribe', 'deseo-vivo-luxe'); ?>
                        </button>
                    </div>
                    <div class="form-privacy">
                        <small>
                            <?php
                            printf(
                                /* translators: %s: Privacy policy URL */
                                wp_kses_post(__('By subscribing, you agree to our <a href="%s">Privacy Policy</a> and consent to receive updates from our store.', 'deseo-vivo-luxe')),
                                esc_url(get_privacy_policy_url())
                            );
                            ?>
                        </small>
                    </div>
                </form>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>
