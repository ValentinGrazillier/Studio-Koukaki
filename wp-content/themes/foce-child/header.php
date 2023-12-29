<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'foce' ); ?></a>

	<header id="masthead" class="site-header">
		<nav id="site-navigation" class="main-navigation">
            <a class ="site-title" href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a>
            <button class="burger-icon" id="burgerBtn">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </button>
		</nav><!-- #site-navigation -->
        <div id="mySidenav" class="sidenav">
            <img class="logoBurgerMenu" src="<?php echo get_stylesheet_directory_uri() . '/assets/Logo-menu.png' ?>" alt="logo Fleurs d'oranger & chats errants">
            <ul>
                <li id="Ligne1BurgerNav"><a href="#story">Histoire</a></li>
                <li id="Ligne2BurgerNav"><a href="#characters">Personnages</a></li>
                <li id="Ligne3BurgerNav"><a href="#place">Lieu</a></li>
                <li id="Ligne4BurgerNav"><a href="#studio">Studio Koukaki</a></li>
            </ul>
            <img class="signature" src="<?php echo get_stylesheet_directory_uri() . '/assets/Studio.png' ?>" alt="Signature Studio Koukaki">
        </div>
	</header><!-- #masthead -->
