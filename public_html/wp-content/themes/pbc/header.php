<!doctype html>

<?php
define('THEMEFOLDER', get_template_directory_uri());
define('IMAGEFOLDER', get_template_directory_uri()."/img/");
define('CSSFOLDER', get_template_directory_uri()."/css/");
define('LESSCSSFOLDER', get_template_directory_uri()."/less/site/");
define('JSFOLDER', get_template_directory_uri()."/js/");
define('FONTFOLDER', get_template_directory_uri()."/fonts/");
define('VENDORFOLDER', get_template_directory_uri()."/vendor/");
define('BOWERFOLDER', get_template_directory_uri()."/bower/");
?>

<html <?php language_attributes(); ?> class="no-js">
	<head>
		<meta charset="<?php bloginfo('charset'); ?>">
		<title><?php wp_title(''); ?><?php if(wp_title('', false)) { echo ' :'; } ?> <?php bloginfo('name'); ?></title>

		<link href="//www.google-analytics.com" rel="dns-prefetch">
        <link href="<?php echo get_template_directory_uri(); ?>/img/icons/favicon.ico" rel="shortcut icon">
        <link href="<?php echo get_template_directory_uri(); ?>/img/icons/touch.png" rel="apple-touch-icon-precomposed">

		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="<?php bloginfo('description'); ?>">
		<link rel="stylesheet" type="text/css" href="<?php echo CSSFOLDER;?>/app.css">
		<link rel="stylesheet" type="text/css" href="<?php echo CSSFOLDER;?>/weatherPBC.css">
		<link rel="stylesheet" type="text/css" href="<?php echo CSSFOLDER;?>/gSearch.css">
		<link rel="stylesheet" type="text/css" href="<?php echo CSSFOLDER;?>/jquery.smartmenus.bootstrap.css">
		<link rel="stylesheet" type="text/css" href="<?php echo CSSFOLDER;?>/normalize.min.css">
<!--		<link rel="stylesheet" type="text/css" href="--><?php //echo VENDORFOLDER;?><!--/bootstrap/css/bootstrap.min.css">-->
<!--		<link rel="stylesheet" type="text/css" href="--><?php //echo VENDORFOLDER;?><!--/font-awesome.min.css">-->
<!--		<link rel="stylesheet" type="text/css" href="--><?php //echo LESSCSSFOLDER;?><!--/main_content.css">-->
<!--		<link rel="stylesheet" type="text/css" href="--><?php //echo LESSCSSFOLDER;?><!--/main_header.css">-->
<!--		<link rel="stylesheet" type="text/css" href="--><?php //echo LESSCSSFOLDER;?><!--/main_nav.css">-->
<!--		<link rel="stylesheet" type="text/css" href="--><?php //echo LESSCSSFOLDER;?><!--/pbc_styles.css">-->
<!--		<link rel="stylesheet" type="text/css" href="--><?php //echo LESSCSSFOLDER;?><!--/main_content.css">-->

		<?php
		wp_head();
		?>
		<script>
        // conditionizr.com
        // configure environment tests
//        conditionizr.config({
//            assets: '<?php //echo get_template_directory_uri(); ?>//',
//            tests: {}
//        });
        </script>

	</head>
	<body <?php body_class(); ?>>

	<div id="pbc_site" class="media-container container">

		<div id="topnav2"  width="100%" class="text-center">
			<?php
			do_action( 'PBCTopMenu' );
			?>
		</div>
		<div id="topnav"  width="100%" class="hidden-xs text-center">
			<div class="separation_bar white-text">
				<a href="/index.html">Home</a>
				<span class="separator">|</span>
				<a href="/contact.html">Contact &amp; Offices</a>
				<span class="separator">|</span>
				<a href="/support.html">Support</a>
				<span class="separator">|</span>
				<a href="/weathernews/index.html">Weather &amp; News</a>
				<span class="separator">|</span>
				<a href="/contact.html">Live Chat</a>
				<span class="separator">|</span>
				<p>888-586-3100 &middot; 218-444-1234 &middot; 218-999-1234</p>
			</div>
		</div>
		<header>
		<div id="headerwrap" width="100%">
			<img width="110%" id="topLogoImage" height="auto" src="<?php echo IMAGEFOLDER; ?>/bg-headerpic_web.png">
			<div id="rightHeaderMenu">
				<div><a href="http://myaccount.paulbunyan.net/"><img id="myBilling" src="<?php echo IMAGEFOLDER; ?>/button-mybilling2.gif" ></a></div>
				<div><a href="http://webmail.paulbunyan.net/"><span class="ico glyphicon glyphicon-envelope"></span><span class="text">Check E-mail</span></a></div>
				<div><a href="/television/channels/lineup.html"><span class="ico fa fa-binoculars"></span><span class="text">PBTV Guide</span></a></div>
				<div><a href="/contact.html"><span class="ico fa fa-comments"></span><span class="text">Live Chat</span></a></div>
				<div class="hidden-xs" id="weather"></div>
				<div class="hidden-xs" id="weather2"></div>
				<div class="searchBar">
					<span class="yellowSquare">Google Search</span>
					<span class="yellowSquare"><a href="">MN Gold People</a></span>
					<span class="yellowSquare"><a href="">MN Gold Business</a></span>
					<div id="searchBarShape">
						<div id="searchTriangle"></div>
						<div class="gSearch">
							<gcse:search enableAutoComplete="true"></gcse:search>
						</div>
						<div id="searchCurve"></div>
					</div>
				</div>
			</div>
		</div>

			<?php
			do_action( 'PBCMenu' );
			?>
		</header>

		<div id="content" class="container">