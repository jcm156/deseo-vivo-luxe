<?php
/**
 * The template for displaying single posts
 *
 * @package Deseo_Vivo_Luxe
 */

get_header(); ?>

<main id="primary" class="site-main single-post-main">
    <div class="container">
        <!-- Breadcrumbs -->
        <nav class="breadcrumbs" aria-label="<?php esc_attr_e('Breadcrumb Navigation', 'deseo-vivo-luxe'); ?>">
            <?php
            $categories = get_the_category();
            ?>
            <ol class="breadcrumbs-list">
                <li>
                    <a href="<?php echo esc_url(home_url('/')); ?>">
                        <?php esc_html_e('Home', 'deseo-vivo-luxe'); ?>
                    </a>
                </li>
                <?php if (!empty($categories)) : ?>
                    <li>
                        <a href="<?php echo esc_url(get_category_link($categories[0]->term_id)); ?>">
                            <?php echo esc_html($categories[0]->name); ?>
                        </a>
                    </li>
                <?php endif; ?>
                <li aria-current="page">
                    <?php echo esc_html(wp_trim_words(get_the_title(), 5, '...')); ?>
                </li>
            </ol>
        </nav>

        <div class="content-sidebar-wrapper">
            <div class="content-area">
                <?php
                while (have_posts()) :
                    the_post();
                ?>
                    <article id="post-<?php the_ID(); ?>" <?php post_class('luxury-post'); ?>>
                        <header class="entry-header">
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

                            <div class="entry-meta">
                                <time class="posted-on" datetime="<?php echo esc_attr(get_the_date('c')); ?>">
                                    <svg class="icon icon-calendar" aria-hidden="true" role="img">
                                        <use href="#icon-calendar"></use>
                                    </svg>
                                    <?php echo esc_html(get_the_date()); ?>
                                </time>

                                <span class="byline">
                                    <svg class="icon icon-user" aria-hidden="true" role="img">
                                        <use href="#icon-user"></use>
                                    </svg>
                                    <?php
                                    printf(
                                        /* translators: %s: Author name */
                                        esc_html_x('By %s', 'post author', 'deseo-vivo-luxe'),
                                        '<a href="' . esc_url(get_author_posts_url(get_the_author_meta('ID'))) . '">' . esc_html(get_the_author()) . '</a>'
                                    );
                                    ?>
                                </span>

                                <?php if (!empty($categories)) : ?>
                                    <span class="categories">
                                        <svg class="icon icon-folder" aria-hidden="true" role="img">
                                            <use href="#icon-folder"></use>
                                        </svg>
                                        <?php the_category(', '); ?>
                                    </span>
                                <?php endif; ?>
                            </div>

                            <?php the_title('<h1 class="entry-title">', '</h1>'); ?>
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

                        <?php if (has_tag()) : ?>
                            <footer class="entry-footer">
                                <div class="tags-links">
                                    <svg class="icon icon-tag" aria-hidden="true" role="img">
                                        <use href="#icon-tag"></use>
                                    </svg>
                                    <?php the_tags('', ', '); ?>
                                </div>
                            </footer>
                        <?php endif; ?>
                    </article>

                    <nav class="post-navigation luxury-navigation" aria-label="<?php esc_attr_e('Post Navigation', 'deseo-vivo-luxe'); ?>">
                        <div class="nav-links">
                            <?php
                            $prev_post = get_previous_post();
                            if (!empty($prev_post)) :
                            ?>
                                <div class="nav-previous">
                                    <span class="nav-subtitle"><?php esc_html_e('Previous Post', 'deseo-vivo-luxe'); ?></span>
                                    <a href="<?php echo esc_url(get_permalink($prev_post->ID)); ?>" rel="prev">
                                        <?php echo esc_html($prev_post->post_title); ?>
                                    </a>
                                </div>
                            <?php
                            endif;

                            $next_post = get_next_post();
                            if (!empty($next_post)) :
                            ?>
                                <div class="nav-next">
                                    <span class="nav-subtitle"><?php esc_html_e('Next Post', 'deseo-vivo-luxe'); ?></span>
                                    <a href="<?php echo esc_url(get_permalink($next_post->ID)); ?>" rel="next">
                                        <?php echo esc_html($next_post->post_title); ?>
                                    </a>
                                </div>
                            <?php endif; ?>
                        </div>
                    </nav>

                    <?php
                    // If comments are open or we have at least one comment
                    if (comments_open() || get_comments_number()) :
                        comments_template();
                    endif;
                    ?>

                <?php endwhile; ?>
            </div>

            <?php
            // Load sidebar if it's active
            if (is_active_sidebar('sidebar-1')) :
                get_sidebar();
            endif;
            ?>
        </div>
    </div>
</main>

<?php get_footer(); ?>
