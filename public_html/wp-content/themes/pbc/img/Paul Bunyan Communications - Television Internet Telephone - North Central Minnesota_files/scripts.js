$(document).ready(function() {
   
	$('.footer').addClass('clearfix');
    
    // move the CC tag into the discription if it's there
    $('.boxcontent p.disc_cc, .boxcontent_nospace p.disc_cc, #front_page_vod p.disc_cc').each(function() {
        
        $.disc_cc_text = $(this).text();
        $(this).prev('p').append("&nbsp;" + $.disc_cc_text);
        $(this).remove();
        
    });
	
	$('#front_page_vod ul.Cat li.Cat:last-child, #disc_container ul.Cat li.Cat:last-child').remove(); 
	
    
    // for truncating the discription of the vod assets so that they don't run too long
	$.vod_round_box_count = $('.vod_round_box').size();
	
	if ($.vod_round_box_count >= 3) {
	
    $('.vod_round_box .disc_container').jTruncate({  
        length: 175,  
        minTrail: 20,  
        moreText: "[more]",  
        lessText: "[less]",  
        ellipsisText: "&#8230;" 
    });  
	
	}
	
	
	// truncate front page VOD discription if it's too long
	   $('#VODSlimTable .disc_container .caps').each( function(){ $(this).replaceWith( $(this).text() ); });		
	   $('#VODSlimTable .disc_container').jTruncate({  
        length: 200,  
        minTrail: 100,  
        moreText: "[more]",  
        lessText: "[less]",  
        ellipsisText: "&#8230;" 
    }); 
	
	$('table.slimboxes tr td:first-child').addClass('even_col');
	$('table.slimboxes tr td:last-child').addClass('odd_col');
	 
    
});    


