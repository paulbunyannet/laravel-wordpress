/*
 * Created by the Blank scaffold.
 * Should be removed.
 */

$(document).ready(function() {
	$("#myBilling").hover(function(){
		var originalPicture = "button-mybilling2.gif";
		var hoverPicture = "button-mybilling2On.gif";
		var link = $(this).attr('src');
		link = link.replace(originalPicture, hoverPicture);
		$(this).attr('src',link);
	}).mouseleave(function(){
		var originalPicture = "button-mybilling2.gif";
		var hoverPicture = "button-mybilling2On.gif";
		var link = $(this).attr('src');
		link = link.replace(hoverPicture, originalPicture);
		$(this).attr('src',link);
	});
	///weather
	$.simpleWeather({
		location: 'Bemidji, MN',
		woeid: '',
		unit: 'f',
		success: function(weather) {
			console.log(weather);
			//html = '<i class="codeText '+code+'" alt="'+weather.currently+'"></i>'
			html = '<img src="'+weather.image+'" alt="'+weather.currently+'"/>'
			+ '<a href="http://www.paulbunyan.net/weathernews/"> <span class="onRight"> <span class="cityText"> '+weather.city+'</span>'
			+ '<br /><span class="tempText"> '+weather.temp+'&deg;'+weather.units.temp+'</span>'
			+ '<br /><span class="windText"> '+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</span></span></a>';

			$("#weather").html(html);
		},
		error: function(error) {
			$("#weather").html('<p>'+error+'</p>');
		}
	});$.simpleWeather({
		location: 'Grand Rapids, MN',
		woeid: '',
		unit: 'f',
		success: function(weather) {
			html = '<img src="'+weather.image+'" alt="'+weather.currently+'"/>'
			+ '<a href="http://www.paulbunyan.net/weathernews/"> <span class="onRight"> <span class="cityText"> '+weather.city+'</span>'
			+ '<br /><span class="tempText"> '+weather.temp+'&deg;'+weather.units.temp+'</span>'
			+ '<br /><span class="windText"> '+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</span></span></a>';

			$("#weather2").html(html);
		},
		error: function(error) {
			$("#weather2").html('<p>'+error+'</p>');
		}
	});
  $( window ).resize(function() {
	resize();
	});
	function resize(){
		var windowWidth = $( window ).width();
		var navbarWidth = $('ul#main-menu').width();
		var numberOfFirstLevelLinks = $('ul#main-menu>li').length;
		var liWidth = navbarWidth/numberOfFirstLevelLinks;
		var margin = [navbarWidth - (liWidth*numberOfFirstLevelLinks)];
		if ((windowWidth > 767)) {
			$('#main-menu').show();
		}
		console.log(windowWidth);
		console.log(navbarWidth);
		console.log(numberOfFirstLevelLinks);
		console.log(liWidth);
		console.log(margin);
	}
	$('button.toggler').click(function(){
		var windowWidth = $( window ).width();
		if ((windowWidth < 768)) {
			$('#main-menu').toggle();
		}
	});
	//$('.caret').click(function(){
	//	$(this).parent('a').sibling('ul').toggleClass('showSubMenu');
	//});
	$('.has-submenu').click(function(){
		if(!$(this).hasClass('highlighted')){
			$(this).css('backgroundColor', '#0F007C');
		}
	});

});
