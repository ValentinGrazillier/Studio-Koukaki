<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'fleur' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'F+U:yFz[}BhO9B^R`!E|U1 <BQ{?^tHR8:l[&~QRs!)&r3/0J1fo7v19a$O<dOZ]' );
define( 'SECURE_AUTH_KEY',  '4G7ExB!Fa=Y5J*]]ihP:UPwm>fun+^{J/>jmQ0FH26s. v3;%6kFOf&/yrLdjxlw' );
define( 'LOGGED_IN_KEY',    'W3SMlf9gaBa:}pxR;K1RqW[4]OR*e>3Kpl$dT%@kiz`QDEMC.ZKTJ#{a2~U*C/R~' );
define( 'NONCE_KEY',        '=D6#qiP@%F<5I!LcPJbmA;{-t[af.vc%X~x1;Al/y&5-sC%tS55Sw_5R&gwTyy._' );
define( 'AUTH_SALT',        'X[.D.B aQgi*.&8xD(*W*;+2Rh<j}VKo.3cY3F#`!yx5;6T4~e%><itm<ceU.D*c' );
define( 'SECURE_AUTH_SALT', 'sxIA`Eub>*lWc7OIbirNy|eycij$s(agv]6G@MBNCjOnuk-hZdE{QVMzS*XMuiy0' );
define( 'LOGGED_IN_SALT',   'X^EeCXtXE^}hso2b3vAT;0)RM@|.b&|rb-zil}Ht6s$_YQ)z@LZgxaOa9S/iqciB' );
define( 'NONCE_SALT',       'Jmw!8E#Lza`57x;mBK|Qj!A?iZvk1=xS7J<i=9zn=oe%$R,4u!`jXU.J)YmOMyc/' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */

@ini_set( 'upload_max_filesize' , '500M' );
@ini_set( 'post_max_size', '500M');
@ini_set( 'memory_limit', '500M' );
@ini_set( 'max_execution_time', '300' );
@ini_set( 'max_input_time', '300' );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
