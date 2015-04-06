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
    
    $("a[rel^='prettyPhoto']").prettyPhoto();
    
    $(".colorbox").colorbox({inline:true, width:"930px"});

    $.stellar({
        responsive: true,
        horizontalScrolling:false
    });

    $('.search').click(function(event) {
        $('.search input').css('margin-right','0');
        $('.search input').css('border','1px solid #CFCFCF');

    });
  
    $('i.resp').click(function(){
        $('.menu').slideToggle();
    });

    $('#calendar').datepicker({
        inline: true,
        firstDay: 1,
        showOtherMonths: true,
        dayNamesMin: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
        dateFormat: 'dd/mm/yy',
        dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
        dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb','Dom'],
        monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
        monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
    });


  
    $( ".tabs" ).tabs();
  

  });

smoothScroll.init();

// WOW Animations
new WOW().init();


new FilmRoll({
    container: '.logosclientes ul',
    height: 70
});