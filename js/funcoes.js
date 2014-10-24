$(document).ready(function() {
    $({property: 0}).animate({property: 105}, {
        duration: 4000,
        step: function() {
            var _percent = Math.round(this.property);
            $('#progress').css('width',  _percent+"%");
            if(_percent == 105) {
                $("#progress").addClass("done");
            }
        },
        complete: function() {
            //alert('complete');
        }
    });
    
    $('.foto img').each(function(n) {
        n += 1;
        $(this).wrap('<figure class="tint "></figure>');
    });
    
    $("a[rel^='prettyPhoto']").prettyPhoto();
    $(".colorbox").colorbox({inline:true, width:"930px"});


/* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 
    
    });

    

  });

// WOW Animations
new WOW();
