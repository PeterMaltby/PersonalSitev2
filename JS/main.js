



$(document).ready(function(){
    var de = 1000;
    $("#title,footer,nav li").hide();
    $("#title").fadeIn(de);
    $("footer").slideDown(de).css('display','none').fadeIn(de*1.5).dequeue();
    $('nav li').show().fadeTo(0,0).delay(900).each(function( i ) {
        $(this).delay( i * 100 ).fadeTo(de,1.0);
    });



    $('a').click(function (e) {
        e.preventDefault();
        var goTo = this.getAttribute("href");
        
        $("*:not(title)").fadeOut(de);
   
        setTimeout(function(){
            window.location = goTo;
        },de);       
    }); 

});


