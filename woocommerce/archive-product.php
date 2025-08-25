<?php
/**
 * The Template for displaying product archives, including the main shop page
 *
 * @package Deseo_Vivo_Luxe
 * @version 1.0.0
 */

defined('ABSPATH') || exit;

get_header('shop');
?>

<div class="luxury-shop-wrapper">
    <!-- Breadcrumbs -->
    <div class="luxury-breadcrumbs">
        <div class="container">
            <?php
            woocommerce_breadcrumb(array(
                'delimiter'   => '<span class="breadcrumb-divider">/</span>',
                'wrap_before' => '<nav class="woocommerce-breadcrumb luxury-breadcrumb" aria-label="' . esc_attr__('Shop Navigation', 'deseo-vivo-luxe') . '">',
                'wrap_after'  => '</nav>',
                'home'        => esc_html__('Home', 'deseo-vivo-luxe'),
            ));
            ?>
        </div>
    </div>

    <!-- Shop Header -->
    <header class="luxury-shop-header">
        <div class="container">
            <?php if (apply_filters('woocommerce_show_page_title', true)) : ?>
                <h1 class="luxury-shop-title">
                    <?php
                    if (is_shop()) {
                        esc_html_e('Our Collection', 'deseo-vivo-luxe');
                    } elseif (is_product_category()) {
                        single_term_title();
                    } elseif (is_search()) {
                        /* translators: %s: search query */
                        printf(esc_html__('Search Results for: %s', 'deseo-vivo-luxe'), '<span>' . get_search_query() . '</span>');
                    }
                    ?>
                </h1>
            <?php endif; ?>

            <?php
            // Category Description
            if (is_product_category()) {
                $category_description = category_description();
                if ($category_description) {
                    echo '<div class="luxury-category-description">' . wp_kses_post($category_description) . '</div>';
                }
            }
            ?>

            <?php if (woocommerce_product_loop()) : ?>
                <div class="luxury-result-count">
                    <?php woocommerce_result_count(); ?>
                </div>
            <?php endif; ?>
        </div>
    </header>

    <div class="luxury-shop-content">
        <div class="container">
            <?php
            if (woocommerce_product_loop()) :

                // Filters Toolbar
                ?>
                <div class="luxury-shop-toolbar">
                    <!-- Category Filters -->
                    <div class="luxury-category-filters">
                        <?php
                        $current_cat = is_product_category() ? get_queried_object_id() : 0;
                        $categories = get_terms(array(
                            'taxonomy'   => 'product_cat',
                            'hide_empty' => true,
                            'parent'     => 0,
                        ));
                        ?>
                        <div class="filter-buttons">
                            <a href="<?php echo esc_url(get_permalink(wc_get_page_id('shop'))); ?>" 
                               class="filter-btn<?php echo !$current_cat ? ' active' : ''; ?>">
                                <?php esc_html_e('All Products', 'deseo-vivo-luxe'); ?>
                            </a>

                            <?php
                            if (!empty($categories) && !is_wp_error($categories)) :
                                foreach ($categories as $category) :
                                    ?>
                                    <a href="<?php echo esc_url(get_term_link($category)); ?>" 
                                       class="filter-btn<?php echo $current_cat === $category->term_id ? ' active' : ''; ?>">
                                        <?php echo esc_html($category->name); ?>
                                    </a>
                                    <?php
                                endforeach;
                            endif;
                            ?>
                        </div>
                    </div>

                    <!-- Product Ordering -->
                    <div class="luxury-product-ordering">
                        <?php woocommerce_catalog_ordering(); ?>
                    </div>
                </div>

                <?php
                // Start the product loop
                woocommerce_product_loop_start();

                if (wc_get_loop_prop('total')) {
                    // Show subcategories
                    if (is_shop()) {
                        woocommerce_product_subcategories();
                    }

                    // Product Loop
                    while (have_posts()) {
                        the_post();
                        wc_get_template_part('content', 'product');
                    }
                }

                woocommerce_product_loop_end();

                // Pagination
                woocommerce_pagination();

            else :
                ?>
                <!-- No Products Found -->
                <div class="luxury-no-products">
                    <div class="no-products-content">
                        <div class="no-products-icon">
                            <svg class="icon-search" aria-hidden="true" width="48" height="48">
                                <use href="#icon-search"></use>
                            </svg>
                        </div>
                        <h2><?php esc_html_e('No Products Found', 'deseo-vivo-luxe'); ?></h2>
                        <p><?php esc_html_e('We couldn\'t find any products matching your criteria.', 'deseo-vivo-luxe'); ?></p>
                        <div class="no-products-actions">
                            <a href="<?php echo esc_url(get_permalink(wc_get_page_id('shop'))); ?>" class="btn-luxury btn-primary">
                                <?php esc_html_e('View All Products', 'deseo-vivo-luxe'); ?>
                            </a>
                            <a href="<?php echo esc_url(home_url('/')); ?>" class="btn-luxury btn-outline">
                                <?php esc_html_e('Return Home', 'deseo-vivo-luxe'); ?>
                            </a>
                        </div>
                    </div>
                </div>
            <?php
            endif;

            // Featured Categories Section (only on shop page and not search)
            if (is_shop() && !is_search()) :
                $featured_categories = get_terms(array(
                    'taxonomy'   => 'product_cat',
                    'hide_empty' => true,
                    'number'     => 4,
                    'meta_query' => array(
                        array(
                            'key'     => 'featured',
                            'value'   => 'yes',
                            'compare' => '='
                        )
                    )
                ));

                if (!empty($featured_categories) && !is_wp_error($featured_categories)) :
                    ?>
                    <section class="luxury-featured-categories">
                        <h2 class="section-title"><?php esc_html_e('Featured Categories', 'deseo-vivo-luxe'); ?></h2>
                        <div class="categories-grid">
                            <?php
                            foreach ($featured_categories as $category) :
                                $thumbnail_id = get_term_meta($category->term_id, 'thumbnail_id', true);
                                $image = wp_get_attachment_image_src($thumbnail_id, 'woocommerce_thumbnail');
                                ?>
                                <a href="<?php echo esc_url(get_term_link($category)); ?>" class="category-card">
                                    <?php if ($image) : ?>
                                        <div class="category-image">
                                            <img src="<?php echo esc_url($image[0]); ?>" 
                                                 alt="<?php echo esc_attr($category->name); ?>"
                                                 loading="lazy">
                                        </div>
                                    <?php endif; ?>
                                    <div class="category-info">
                                        <h3><?php echo esc_html($category->name); ?></h3>
                                        <span class="product-count">
                                            <?php
                                            printf(
                                                /* translators: %s: product count */
                                                _n('%s Product', '%s Products', $category->count, 'deseo-vivo-luxe'),
                                                number_format_i18n($category->count)
                                            );
                                            ?>
                                        </span>
                                    </div>
                                </a>
                            <?php endforeach; ?>
                        </div>
                    </section>
                <?php
                endif;
            endif;
            ?>
        </div>
    </div>
</div>

<?php
get_footer('shop');
