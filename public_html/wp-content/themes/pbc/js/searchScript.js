
(function() {
	var cx = 'partner-pub-1991224061411288:3p6i5a-bh4x';
	var gcse = document.createElement('script');
	gcse.type = 'text/javascript';
	gcse.async = true;
	gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
	'//cse.google.com/cse.js?cx=' + cx;
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(gcse, s);
	$(window).bind("load", function() {
		$('input.gsc-search-button').val('').css('width','24px');
	});
})();