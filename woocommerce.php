<?php
/**
 * The template for displaying WooCommerce pages
 *
 * This is the template that displays all WooCommerce pages by default.
 * It works as a fallback for all WooCommerce templates.
 *
 * @package Deseo_Vivo_Luxe
 */

get_header(); ?>

<div id="primary" class="content-area woocommerce-content">
    <?php
    /**
     * Hook: woocommerce_before_main_content
     * 
     * @hooked woocommerce_output_content_wrapper - 10 (outputs opening divs for the content)
     * @hooked woocommerce_breadcrumb - 20
     */
    ?>
    <div class="woocommerce-breadcrumb-wrapper">
        <div class="container">
            <?php
            woocommerce_breadcrumb(array(
                'delimiter'   => '<span class="breadcrumb-delimiter">/</span>',
                'wrap_before' => '<nav class="woocommerce-breadcrumb luxury-breadcrumb" aria-label="' . esc_attr__('Breadcrumb Navigation', 'deseo-vivo-luxe') . '">',
                'wrap_after'  => '</nav>',
                'home'        => esc_html__('Home', 'deseo-vivo-luxe'),
            ));
            ?>
        </div>
    </div>

    <main class="site-main woocommerce-main">
        <div class="container">
            <div class="woocommerce-content-wrapper">
                <?php
                /**
                 * Hook: woocommerce_sidebar
                 *
                 * @hooked woocommerce_get_sidebar - 10
                 */
                if (is_active_sidebar('shop-sidebar') && !is_product()) : ?>
                    <div class="shop-sidebar-wrapper">
                        <?php dynamic_sidebar('shop-sidebar'); ?>
                    </div>
                <?php endif; ?>

                <div class="shop-content-area<?php echo is_product() ? ' single-product-content' : ''; ?>">
                    <?php
                    /**
                     * Hook: woocommerce_archive_description
                     *
                     * @hooked woocommerce_taxonomy_archive_description - 10
                     * @hooked woocommerce_product_archive_description - 10
                     */
                    if (is_shop() || is_product_category() || is_product_tag()) {
                        do_action('woocommerce_archive_description');
                    }
                    
                    if (woocommerce_product_loop()) {
                        /**
                         * Hook: woocommerce_before_shop_loop
                         *
                         * @hooked woocommerce_output_all_notices - 10
                         * @hooked woocommerce_result_count - 20
                         * @hooked woocommerce_catalog_ordering - 30
                         */
                        if (!is_product()) : ?>
                            <div class="shop-header">
                                <?php do_action('woocommerce_before_shop_loop'); ?>
                            </div>
                        <?php endif;

                        // Output the main WooCommerce content
                        woocommerce_content();

                    } else {
                        /**
                         * Hook: woocommerce_no_products_found
                         *
                         * @hooked wc_no_products_found - 10
                         */
                        do_action('woocommerce_no_products_found');
                    }
                    ?>
                </div>
            </div>
        </div>
    </main>
</div>

<?php get_footer(); ?>
