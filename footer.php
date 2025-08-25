<?php
/**
 * The footer template file
 *
 * Contains footer content and the closing of the #content and body tags
 *
 * @package Deseo_Vivo_Luxe
 */
?>

            </div><!-- #content -->

            <footer id="colophon" class="site-footer">
                <!-- Main Footer -->
                <div class="footer-main">
                    <div class="container">
                        <div class="footer-widgets">
                            <!-- Column 1: Brand -->
                            <div class="footer-widget footer-brand">
                                <?php if (has_custom_logo()) : ?>
                                    <div class="footer-logo">
                                        <?php the_custom_logo(); ?>
                                    </div>
                                <?php endif; ?>
                                <div class="site-description">
                                    <?php echo get_bloginfo('description'); ?>
                                </div>
                                <div class="social-links">
                                    <?php if (get_theme_mod('social_instagram')) : ?>
                                        <a href="<?php echo esc_url(get_theme_mod('social_instagram')); ?>" target="_blank" rel="noopener noreferrer">
                                            <svg class="icon icon-instagram" aria-hidden="true" role="img"><use href="#icon-instagram"></use></svg>
                                            <span class="screen-reader-text"><?php esc_html_e('Instagram', 'deseo-vivo-luxe'); ?></span>
                                        </a>
                                    <?php endif; ?>
                                    <?php if (get_theme_mod('social_facebook')) : ?>
                                        <a href="<?php echo esc_url(get_theme_mod('social_facebook')); ?>" target="_blank" rel="noopener noreferrer">
                                            <svg class="icon icon-facebook" aria-hidden="true" role="img"><use href="#icon-facebook"></use></svg>
                                            <span class="screen-reader-text"><?php esc_html_e('Facebook', 'deseo-vivo-luxe'); ?></span>
                                        </a>
                                    <?php endif; ?>
                                </div>
                            </div>

                            <!-- Column 2: Quick Menu -->
                            <div class="footer-widget footer-menu">
                                <h3 class="widget-title"><?php esc_html_e('Quick Links', 'deseo-vivo-luxe'); ?></h3>
                                <?php
                                wp_nav_menu(array(
                                    'theme_location' => 'footer-quick',
                                    'menu_class'     => 'footer-links',
                                    'container'      => false,
                                    'depth'          => 1,
                                ));
                                ?>
                            </div>

                            <!-- Column 3: Featured Categories -->
                            <div class="footer-widget footer-categories">
                                <h3 class="widget-title"><?php esc_html_e('Featured Categories', 'deseo-vivo-luxe'); ?></h3>
                                <?php
                                $featured_categories = get_theme_mod('featured_categories', array());
                                if (!empty($featured_categories)) :
                                    echo '<ul class="featured-categories">';
                                    foreach ($featured_categories as $cat_id) {
                                        $category = get_term($cat_id, 'product_cat');
                                        if ($category && !is_wp_error($category)) {
                                            echo '<li><a href="' . esc_url(get_term_link($category)) . '">' . esc_html($category->name) . '</a></li>';
                                        }
                                    }
                                    echo '</ul>';
                                endif;
                                ?>
                            </div>

                            <!-- Column 4: Support -->
                            <div class="footer-widget footer-support">
                                <h3 class="widget-title"><?php esc_html_e('Customer Support', 'deseo-vivo-luxe'); ?></h3>
                                <ul class="support-links">
                                    <li>
                                        <a href="<?php echo esc_url(get_permalink(get_page_by_path('contact'))); ?>">
                                            <?php esc_html_e('Contact Us', 'deseo-vivo-luxe'); ?>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="<?php echo esc_url(get_permalink(get_page_by_path('faq'))); ?>">
                                            <?php esc_html_e('FAQ', 'deseo-vivo-luxe'); ?>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="<?php echo esc_url(get_permalink(get_page_by_path('shipping'))); ?>">
                                            <?php esc_html_e('Shipping Information', 'deseo-vivo-luxe'); ?>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Trust Badges -->
                <div class="trust-badges">
                    <div class="container">
                        <div class="badges-grid">
                            <div class="badge-item">
                                <svg class="icon icon-discrete" aria-hidden="true" role="img"><use href="#icon-discrete"></use></svg>
                                <span><?php esc_html_e('Discreet Shipping', 'deseo-vivo-luxe'); ?></span>
                            </div>
                            <div class="badge-item">
                                <svg class="icon icon-shipping" aria-hidden="true" role="img"><use href="#icon-shipping"></use></svg>
                                <span><?php esc_html_e('Free Shipping', 'deseo-vivo-luxe'); ?></span>
                            </div>
                            <div class="badge-item">
                                <svg class="icon icon-quality" aria-hidden="true" role="img"><use href="#icon-quality"></use></svg>
                                <span><?php esc_html_e('Premium Quality', 'deseo-vivo-luxe'); ?></span>
                            </div>
                            <div class="badge-item">
                                <svg class="icon icon-returns" aria-hidden="true" role="img"><use href="#icon-returns"></use></svg>
                                <span><?php esc_html_e('30-Day Returns', 'deseo-vivo-luxe'); ?></span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Payment Methods -->
                <div class="payment-methods">
                    <div class="container">
                        <div class="payment-icons">
                            <svg class="icon icon-paypal" aria-hidden="true" role="img"><use href="#icon-paypal"></use></svg>
                            <svg class="icon icon-stripe" aria-hidden="true" role="img"><use href="#icon-stripe"></use></svg>
                            <svg class="icon icon-visa" aria-hidden="true" role="img"><use href="#icon-visa"></use></svg>
                            <svg class="icon icon-mastercard" aria-hidden="true" role="img"><use href="#icon-mastercard"></use></svg>
                            <svg class="icon icon-bitcoin" aria-hidden="true" role="img"><use href="#icon-bitcoin"></use></svg>
                        </div>
                    </div>
                </div>

                <!-- Legal Footer -->
                <div class="footer-legal">
                    <div class="container">
                        <div class="legal-wrapper">
                            <!-- Legal Menu -->
                            <nav class="legal-menu">
                                <?php
                                wp_nav_menu(array(
                                    'theme_location' => 'footer-legal',
                                    'menu_class'     => 'legal-links',
                                    'container'      => false,
                                    'depth'          => 1,
                                ));
                                ?>
                            </nav>

                            <!-- Copyright -->
                            <div class="copyright">
                                <?php
                                printf(
                                    /* translators: %1$s: Current year, %2$s: Site name */
                                    esc_html__('© %1$s %2$s. All rights reserved.', 'deseo-vivo-luxe'),
                                    date('Y'),
                                    get_bloginfo('name')
                                );
                                ?>
                            </div>

                            <!-- Adult Notice -->
                            <div class="adult-notice">
                                <?php esc_html_e('This website is intended for adults 18+ only.', 'deseo-vivo-luxe'); ?>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div><!-- #page -->

        <?php wp_footer(); ?>
    </body>
</html>
