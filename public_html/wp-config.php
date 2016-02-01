<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link https://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

require_once dirname(__DIR__) .'/vendor/autoload.php';
Dotenv::load(dirname(__DIR__));
Dotenv::required(['ENVIRONMENT','DB_DATABASE','DB_USERNAME','DB_PASSWORD','DB_HOST','DB_CHARSET','DB_PREFIX']);

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', getenv('DB_DATABASE'));

/** MySQL database username */
define('DB_USER', getenv('DB_USERNAME'));

/** MySQL database password */
define('DB_PASSWORD', getenv('DB_PASSWORD'));

/** MySQL hostname */
define('DB_HOST', getenv('DB_HOST'));

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', getenv('DB_CHARSET'));

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         ',8{H^vNoF%^dwi]]Dq{k2mku#bEujd(]//.5,k+#:<3<#:x|BScma7g`rG^%_0#z');
define('SECURE_AUTH_KEY',  'i}b>%D/NYqTU2e%@{@j%,e*q. s_m!X`0=Yw}^Vv:[QM.HXXkcLA4P t)j]Y2:c,');
define('LOGGED_IN_KEY',    '}Y3R9V%p7cT:-K(p$4AK#U=hdby}GQ<y+x7It  ,ATG2KT,hf&6A3CBqgq@*`X{,');
define('NONCE_KEY',        '[aTyxV]7-t]u.$KLyHO0|oDa)F]H7?me3_f$|HK&F|7cdaXS-WFEn%,kmnb5:b+H');
define('AUTH_SALT',        '*LUOHpjzM]P RPhy2e+V,6LWgRiFC8jhl:--VKVHWIXq-N|H>`^R%JpwrNF87Gch');
define('SECURE_AUTH_SALT', 'a!d*bP3N%o&qc70Gh-=9 =]5xP+fAR2PYz%YyrF}M[l|p7%-zAHXS7ffh-[l&93;');
define('LOGGED_IN_SALT',   '_Fpyw.,Xamrb p1w--jF6Ds_h@HiRlaq*?x;amX<cRyDPFr5f4%g`S5-9q$~iUu_');
define('NONCE_SALT',       'zW5?#DayGe9(Q9M_+q#4XF <Ek1|*Ojg+NTP@O6E- <eJj(C! <c*l8}67H8!|L&');

/**
 * Path configuration
 */
define('WP_CONTENT_DIR', __DIR__ . '/wp-content');
define('WP_CONTENT_URL', 'http://' . $_SERVER['SERVER_NAME'] . '/wp-content');
define('WP_SITEURL', 'http://' . $_SERVER['SERVER_NAME'] . '/wp');
define('WP_HOME', 'http://' . $_SERVER['SERVER_NAME']);


/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = getenv('DB_PREFIX');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', getenv('APP_ENV') === 'local' ? true : false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
