<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
}

// Get customizer options form parent theme
if ( get_stylesheet() !== get_template() ) {
    add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
        update_option( 'theme_mods_' . get_template(), $value );
        return $old_value; // prevent update to child theme mods
    }, 10, 2 );
    add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
        return get_option( 'theme_mods_' . get_template(), $default );
    } );
}

// Chargement des scripts JS
function enqueue_custom_scripts() {
    // Ajout du script swiper JS avant le chargement de mon script.js
    wp_enqueue_script('swiperjs-script', get_stylesheet_directory_uri() . '/node_modules/swiper/swiper-bundle.min.js', array(), '1.0.0', true);
    wp_enqueue_script('scripts', get_stylesheet_directory_uri() . '/js/script.js', array(), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'enqueue_custom_scripts');

// Chargement du theme.css compilé
function enqueue_custom_styles() {
    // Ajout du style swiper JS
    wp_enqueue_style('swiperjs-style', get_stylesheet_directory_uri() . '/node_modules/swiper/swiper-bundle.min.css');
    wp_enqueue_style('theme-style', get_stylesheet_directory_uri() . '/theme.css');
}
add_action('wp_enqueue_scripts', 'enqueue_custom_styles');
