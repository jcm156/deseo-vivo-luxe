<?php
/**
 * The template for displaying pages
 *
 * @package Deseo_Vivo_Luxe
 */

get_header(); ?>

<main id="primary" class="site-main page-main">
    <div class="container">
        <?php
        // Show breadcrumbs only if not front page
        if (!is_front_page()) :
        ?>
            <nav class="breadcrumbs" aria-label="<?php esc_attr_e('Breadcrumb Navigation', 'deseo-vivo-luxe'); ?>">
                <ol class="breadcrumbs-list">
                    <li>
                        <a href="<?php echo esc_url(home_url('/')); ?>">
                            <?php esc_html_e('Home', 'deseo-vivo-luxe'); ?>
                        </a>
                    </li>
                    <?php
                    // Add parent page if exists
                    if ($post->post_parent) :
                        $parent_title = get_the_title($post->post_parent);
                        $parent_url = get_permalink($post->post_parent);
                    ?>
                        <li>
                            <a href="<?php echo esc_url($parent_url); ?>">
                                <?php echo esc_html($parent_title); ?>
                            </a>
                        </li>
                    <?php endif; ?>
                    <li aria-current="page">
                        <?php echo esc_html(get_the_title()); ?>
                    </li>
                </ol>
            </nav>
        <?php endif; ?>

        <div class="content-sidebar-wrapper">
            <div class="content-area">
                <?php
                while (have_posts()) :
                    the_post();
                ?>
                    <article id="page-<?php the_ID(); ?>" <?php post_class('luxury-page'); ?>>
                        <header class="entry-header">
                            <?php if (!is_front_page()) : ?>
                                <h1 class="entry-title"><?php the_title(); ?></h1>
                            <?php endif; ?>

                            <?php if (has_post_thumbnail()) : ?>
                                <div class="featured-image-wrapper">
                                    <?php
                                    the_post_thumbnail('full', array(
                                        'class' => 'featured-image',
                                        'alt' => get_the_title()
                                    ));
                                    ?>
                                </div>
                            <?php endif; ?>
                        </header>

                        <div class="entry-content">
                            <?php
                            the_content();

                            wp_link_pages(array(
                                'before' => '<div class="page-links">' . esc_html__('Pages:', 'deseo-vivo-luxe'),
                                'after'  => '</div>',
                            ));
                            ?>
                        </div>

                        <?php
                        // Display child pages navigation if they exist
                        $children = get_pages(array(
                            'child_of' => $post->ID,
                            'sort_column' => 'menu_order,post_title',
                        ));

                        if ($children) :
                        ?>
                            <nav class="subpages-navigation" aria-label="<?php esc_attr_e('Subpages Navigation', 'deseo-vivo-luxe'); ?>">
                                <h2 class="subpages-title"><?php esc_html_e('Related Pages', 'deseo-vivo-luxe'); ?></h2>
                                <ul class="subpages-list">
                                    <?php
                                    wp_list_pages(array(
                                        'title_li' => '',
                                        'child_of' => $post->ID,
                                        'depth' => 1,
                                    ));
                                    ?>
                                </ul>
                            </nav>
                        <?php endif; ?>
                    </article>

                    <?php
                    // If comments are open or we have at least one comment
                    if (comments_open() || get_comments_number()) :
                        comments_template();
                    endif;
                    ?>

                <?php endwhile; ?>
            </div>

            <?php
            // Load sidebar if it's active and not front page
            if (!is_front_page() && is_active_sidebar('sidebar-1')) :
                get_sidebar();
            endif;
            ?>
        </div>
    </div>
</main>

<?php get_footer(); ?>
