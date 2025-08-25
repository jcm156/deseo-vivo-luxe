/**
 * Main JavaScript for Deseo Vivo Luxe Theme
 * 
 * @package Deseo_Vivo_Luxe
 * @version 1.0.0
 */

(function($) {
    'use strict';

    // Global namespace
    window.DeseoVivo = {
        config: {
            ajaxUrl: deseoAjax.ajaxurl,
            nonce: deseoAjax.nonce,
            breakpoints: {
                mobile: 768,
                tablet: 992,
                desktop: 1200
            }
        },
        
        state: {
            cartCount: 0,
            filters: {
                category: '',
                tag: '',
                sort: 'default'
            },
            isMobile: window.innerWidth < 768,
            isHeaderSticky: false
        },

        /**
         * Initialize all functionality
         */
        init: function() {
            this.bindEvents();
            this.initHeader();
            this.initProducts();
            this.initFilters();
            this.initForms();
            this.initScroll();
            this.updateCartCount();
        },

        /**
         * Bind all events
         */
        bindEvents: function() {
            // Resize handler with debounce
            $(window).on('resize', this.utils.debounce(() => {
                this.state.isMobile = window.innerWidth < this.config.breakpoints.mobile;
                this.handleResponsive();
            }, 250));

            // Document ready
            $(document).ready(() => {
                this.initializeComponents();
            });
        },

        /**
         * Header functionality
         */
        initHeader: function() {
            const $header = $('.site-header');
            const $mobileNav = $('.mobile-nav-toggle');
            const $searchModal = $('.search-modal');
            const $userDropdown = $('.user-dropdown');
            const $miniCart = $('.mini-cart');

            // Mobile nav toggle
            $mobileNav.on('click', (e) => {
                e.preventDefault();
                $header.toggleClass('nav-open');
                $('body').toggleClass('nav-active');
            });

            // Search modal
            $('.search-toggle').on('click', (e) => {
                e.preventDefault();
                $searchModal.addClass('active');
                $searchModal.find('input').focus();
            });

            // User dropdown
            $('.user-account').on('click', (e) => {
                e.preventDefault();
                $userDropdown.toggleClass('active');
            });

            // Mini cart hover
            $miniCart.hover(
                () => $miniCart.addClass('active'),
                () => $miniCart.removeClass('active')
            );
        },

        /**
         * Product related functionality
         */
        initProducts: function() {
            // Quick add to cart
            $(document).on('click', '.ajax-add-to-cart', async (e) => {
                e.preventDefault();
                const $button = $(e.currentTarget);
                const productId = $button.data('product-id');
                const quantity = $button.data('quantity') || 1;

                try {
                    await this.quickAddToCart(productId, quantity);
                } catch (error) {
                    this.showNotification('error', error.message);
                }
            });

            // Wishlist toggle
            $(document).on('click', '.wishlist-btn', async (e) => {
                e.preventDefault();
                const $button = $(e.currentTarget);
                const productId = $button.data('product-id');

                try {
                    const response = await fetch(this.config.ajaxUrl, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        body: new URLSearchParams({
                            action: 'toggle_wishlist',
                            nonce: this.config.nonce,
                            product_id: productId
                        })
                    });

                    const data = await response.json();
                    if (data.success) {
                        $button.toggleClass('active');
                        this.showNotification('success', data.message);
                    } else {
                        throw new Error(data.message);
                    }
                } catch (error) {
                    this.showNotification('error', error.message);
                }
            });

            // Quick view
            $(document).on('click', '.quickview-btn', (e) => {
                e.preventDefault();
                // Placeholder for quick view functionality
                this.showNotification('info', 'Quick view coming soon');
            });
        },

        /**
         * Filter functionality
         */
        initFilters: function() {
            const $filterButtons = $('.filter-btn');
            const $sortSelect = $('.woocommerce-ordering select');
            const $resetFilters = $('.reset-filters');

            // Category/tag filter buttons
            $filterButtons.on('click', (e) => {
                e.preventDefault();
                const $button = $(e.currentTarget);
                const filter = $button.data('filter');
                
                $filterButtons.removeClass('active');
                $button.addClass('active');
                
                this.state.filters[filter.type] = filter.value;
                this.applyFilters();
            });

            // Sort dropdown
            $sortSelect.on('change', (e) => {
                this.state.filters.sort = e.target.value;
                this.applyFilters();
            });

            // Reset filters
            $resetFilters.on('click', (e) => {
                e.preventDefault();
                this.resetFilters();
            });
        },

        /**
         * Form handling
         */
        initForms: function() {
            // Newsletter form
            $('.newsletter-form').on('submit', async (e) => {
                e.preventDefault();
                const $form = $(e.currentTarget);
                const email = $form.find('input[type="email"]').val();

                if (!this.utils.validateEmail(email)) {
                    this.showNotification('error', 'Please enter a valid email address');
                    return;
                }

                try {
                    const response = await fetch(this.config.ajaxUrl, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        body: new URLSearchParams({
                            action: 'newsletter_signup',
                            nonce: this.config.nonce,
                            email: email
                        })
                    });

                    const data = await response.json();
                    if (data.success) {
                        this.showNotification('success', data.message);
                        $form[0].reset();
                    } else {
                        throw new Error(data.message);
                    }
                } catch (error) {
                    this.showNotification('error', error.message);
                }
            });

            // Contact form
            $('.contact-form').on('submit', async (e) => {
                e.preventDefault();
                // Contact form handling implementation
            });
        },

        /**
         * Scroll related functionality
         */
        initScroll: function() {
            const $header = $('.site-header');
            let lastScroll = 0;

            // Sticky header
            $(window).on('scroll', this.utils.throttle(() => {
                const currentScroll = window.pageYOffset;
                
                if (currentScroll > lastScroll && currentScroll > 100) {
                    $header.addClass('header-hidden');
                } else {
                    $header.removeClass('header-hidden');
                }

                if (currentScroll > 200) {
                    $header.addClass('header-sticky');
                    this.state.isHeaderSticky = true;
                } else {
                    $header.removeClass('header-sticky');
                    this.state.isHeaderSticky = false;
                }

                lastScroll = currentScroll;
            }, 100));

            // Smooth scroll
            $('a[href*="#"]:not([href="#"])').on('click', function(e) {
                if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && 
                    location.hostname === this.hostname) {
                    e.preventDefault();
                    let target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    
                    if (target.length) {
                        $('html, body').animate({
                            scrollTop: target.offset().top - 100
                        }, 1000);
                        return false;
                    }
                }
            });

            // Lazy loading
            if ('IntersectionObserver' in window) {
                const lazyImages = document.querySelectorAll('img[data-src]');
                const imageObserver = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const img = entry.target;
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                            observer.unobserve(img);
                        }
                    });
                });

                lazyImages.forEach(img => imageObserver.observe(img));
            }
        },

        /**
         * AJAX functions
         */
        async quickAddToCart(productId, quantity) {
            try {
                const response = await fetch(this.config.ajaxUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: new URLSearchParams({
                        action: 'quick_add_to_cart',
                        nonce: this.config.nonce,
                        product_id: productId,
                        quantity: quantity
                    })
                });

                const data = await response.json();
                if (data.success) {
                    await this.updateCartCount();
                    await this.updateMiniCart();
                    this.showNotification('success', data.message);
                } else {
                    throw new Error(data.message);
                }
            } catch (error) {
                throw new Error('Failed to add product to cart');
            }
        },

        async updateCartCount() {
            try {
                const response = await fetch(this.config.ajaxUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: new URLSearchParams({
                        action: 'get_cart_count',
                        nonce: this.config.nonce
                    })
                });

                const data = await response.json();
                if (data.success) {
                    this.state.cartCount = data.count;
                    $('.cart-count').text(data.count);
                }
            } catch (error) {
                console.error('Failed to update cart count:', error);
            }
        },

        async updateMiniCart() {
            try {
                const response = await fetch(this.config.ajaxUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: new URLSearchParams({
                        action: 'get_mini_cart',
                        nonce: this.config.nonce
                    })
                });

                const data = await response.json();
                if (data.success) {
                    $('.mini-cart-content').html(data.html);
                }
            } catch (error) {
                console.error('Failed to update mini cart:', error);
            }
        },

        /**
         * Notification system
         */
        showNotification(type, message) {
            const $notification = $('<div>', {
                class: `notification notification-${type}`,
                text: message
            });

            $('body').append($notification);
            
            setTimeout(() => {
                $notification.addClass('active');
            }, 100);

            setTimeout(() => {
                $notification.removeClass('active');
                setTimeout(() => {
                    $notification.remove();
                }, 300);
            }, 3000);
        },

        /**
         * Utility methods
         */
        utils: {
            debounce(func, wait) {
                let timeout;
                return function executedFunction(...args) {
                    const later = () => {
                        clearTimeout(timeout);
                        func(...args);
                    };
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                };
            },

            throttle(func, limit) {
                let inThrottle;
                return function executedFunction(...args) {
                    if (!inThrottle) {
                        func(...args);
                        inThrottle = true;
                        setTimeout(() => inThrottle = false, limit);
                    }
                };
            },

            validateEmail(email) {
                const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(email).toLowerCase());
            }
        },

        /**
         * Responsive handlers
         */
        handleResponsive() {
            if (this.state.isMobile) {
                // Mobile specific adjustments
                $('.site-nav').addClass('mobile-nav');
            } else {
                // Desktop specific adjustments
                $('.site-nav').removeClass('mobile-nav');
            }
        }
    };

    // Initialize on document ready
    $(document).ready(() => {
        DeseoVivo.init();
    });

})(jQuery);
