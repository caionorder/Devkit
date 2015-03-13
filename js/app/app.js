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

    $.stellar({
        responsive: true
    });

  

  });

smoothScroll.init();

// WOW Animations
new WOW().init();


// new FilmRoll({
//     container: '#destaqueproduto ul',
//     height: 209
// });