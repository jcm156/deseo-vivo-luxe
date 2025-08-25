<?php
/**
 * The template for displaying product content within loops
 *
 * @package Deseo_Vivo_Luxe
 * @version 1.0.0
 */

defined('ABSPATH') || exit;

global $product;

// Ensure visibility
if (empty($product) || !$product->is_visible()) {
    return;
}

// Get product data for attributes
$product_cats = wp_get_post_terms($product->get_id(), 'product_cat', array('fields' => 'names'));
$product_price = $product->get_price();
$product_rating = $product->get_average_rating();
$product_date = $product->get_date_created() ? $product->get_date_created()->date('Y-m-d') : '';

// Get gallery images
$gallery_images = $product->get_gallery_image_ids();
$hover_image_url = !empty($gallery_images) ? wp_get_attachment_image_url($gallery_images[0], 'woocommerce_thumbnail') : '';

// Stock status
$stock_status = $product->is_in_stock() ? 'instock' : 'outofstock';
$stock_qty = $product->get_stock_quantity();

// Badges logic
$is_new = (time() - strtotime($product_date)) < (30 * 24 * 60 * 60); // 30 days
$is_bestseller = $product->is_featured();
$is_limited = $stock_qty !== null && $stock_qty < 10 && $stock_qty > 0;
$is_on_sale = $product->is_on_sale();
?>

<li <?php wc_product_class('luxury-product-item', $product); ?> 
    data-category="<?php echo esc_attr(implode(', ', $product_cats)); ?>"
    data-price="<?php echo esc_attr($product_price); ?>"
    data-rating="<?php echo esc_attr($product_rating); ?>"
    data-date="<?php echo esc_attr($product_date); ?>">
    
    <div class="luxury-product-card">
        <!-- Product Image Container -->
        <div class="product-image-wrapper">
            <?php
            woocommerce_template_loop_product_link_open();
            
            // Main product image
            woocommerce_template_loop_product_thumbnail();
            
            // Hover image
            if ($hover_image_url) :
                echo '<img class="hover-image" src="' . esc_url($hover_image_url) . '" alt="' . esc_attr($product->get_name()) . '">';
            endif;
            
            woocommerce_template_loop_product_link_close();
            ?>

            <!-- Product Badges -->
            <div class="product-badges">
                <?php if ($is_new) : ?>
                    <span class="badge badge-new"><?php esc_html_e('New', 'deseo-vivo-luxe'); ?></span>
                <?php endif; ?>
                
                <?php if ($is_bestseller) : ?>
                    <span class="badge badge-bestseller"><?php esc_html_e('Bestseller', 'deseo-vivo-luxe'); ?></span>
                <?php endif; ?>
                
                <?php if ($is_limited) : ?>
                    <span class="badge badge-limited"><?php esc_html_e('Limited Stock', 'deseo-vivo-luxe'); ?></span>
                <?php endif; ?>
                
                <?php if ($is_on_sale) : ?>
                    <span class="badge badge-sale"><?php esc_html_e('Sale', 'deseo-vivo-luxe'); ?></span>
                <?php endif; ?>
            </div>

            <!-- Quick Actions -->
            <div class="quick-actions">
                <?php if (class_exists('YITH_WCWL')) : ?>
                    <button class="quick-action-btn wishlist-btn" 
                            data-product-id="<?php echo esc_attr($product->get_id()); ?>"
                            aria-label="<?php esc_attr_e('Add to Wishlist', 'deseo-vivo-luxe'); ?>">
                        <svg class="icon icon-heart" aria-hidden="true"><use href="#icon-heart"></use></svg>
                    </button>
                <?php endif; ?>

                <button class="quick-action-btn quickview-btn" 
                        data-product-id="<?php echo esc_attr($product->get_id()); ?>"
                        aria-label="<?php esc_attr_e('Quick View', 'deseo-vivo-luxe'); ?>">
                    <svg class="icon icon-eye" aria-hidden="true"><use href="#icon-eye"></use></svg>
                </button>
            </div>

            <!-- Quick Add to Cart -->
            <?php if ($product->is_type('simple') && $product->is_purchasable() && $product->is_in_stock()) : ?>
                <div class="quick-add-to-cart">
                    <button class="ajax-add-to-cart" 
                            data-product-id="<?php echo esc_attr($product->get_id()); ?>"
                            data-quantity="1">
                        <svg class="icon icon-cart" aria-hidden="true"><use href="#icon-cart"></use></svg>
                        <span><?php esc_html_e('Add to Cart', 'deseo-vivo-luxe'); ?></span>
                    </button>
                </div>
            <?php endif; ?>

            <!-- Stock Status -->
            <div class="stock-status <?php echo esc_attr($stock_status); ?>">
                <?php if ($stock_qty !== null && $stock_qty > 0) : ?>
                    <span class="stock-qty">
                        <?php
                        printf(
                            /* translators: %s: stock quantity */
                            esc_html__('%s in stock', 'deseo-vivo-luxe'),
                            $stock_qty
                        );
                        ?>
                    </span>
                <?php elseif (!$product->is_in_stock()) : ?>
                    <span class="out-of-stock"><?php esc_html_e('Out of Stock', 'deseo-vivo-luxe'); ?></span>
                <?php endif; ?>
            </div>
        </div>

        <!-- Product Info -->
        <div class="product-info">
            <?php if (!empty($product_cats)) : ?>
                <div class="product-category">
                    <?php echo esc_html($product_cats[0]); ?>
                </div>
            <?php endif; ?>

            <?php
            woocommerce_template_loop_product_link_open();
            woocommerce_template_loop_product_title();
            woocommerce_template_loop_product_link_close();
            ?>

            <?php if ($product->get_short_description()) : ?>
                <div class="product-excerpt">
                    <?php echo wp_trim_words(get_the_excerpt(), 12); ?>
                </div>
            <?php endif; ?>

            <div class="product-meta">
                <?php
                woocommerce_template_loop_rating();
                woocommerce_template_loop_price();
                ?>
            </div>

            <div class="product-actions">
                <a href="<?php echo esc_url($product->get_permalink()); ?>" class="btn-view-details">
                    <?php esc_html_e('View Details', 'deseo-vivo-luxe'); ?>
                </a>
            </div>
        </div>
    </div>
</li>
