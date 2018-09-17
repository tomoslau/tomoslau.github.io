$(document).ready(function() {
    $('.tofadein').addClass("fadein");
    $('.tofadein-second').addClass("fadein move delay");

    /* Check the location of each desired element */
    $('.scrollreveal').each( function(i){
        
        var top_of_object = $(this).position().top;
        var middle_of_object = $(this).position().top + $(this).outerHeight() / 2;
        var bottom_of_object = $(this).position().top + $(this).outerHeight();            
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        /* If the object is completely visible in the window, fade it it */
        if( bottom_of_window > top_of_object ){
            
            $(this).addClass( "fadein move delay" );
                
        }
        
    }); 

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.scrollreveal').each( function(i){
            
            var top_of_object = $(this).position().top;
            var middle_of_object = $(this).position().top + $(this).outerHeight() / 2;
            var bottom_of_object = $(this).position().top + $(this).outerHeight();            
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > middle_of_object ){
                
                $(this).addClass( "fadein move" );
                    
            }
            
        }); 
    
    });

    var myLazyLoad = new LazyLoad({
        elements_selector: ".lazy"
    });
    
});