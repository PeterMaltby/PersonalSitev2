function isTouchDevice() {
    return 'ontouchstart' in document.documentElement;
}

$(document).ready(function(){
    var de = 1000;

    $(".touch").show();
    if (isTouchDevice){
        $(".touch").hide();
    }

    $("html").css("display","block");
    //$("#title,footer,nav li,.jsFlow").hide();
    $("#title").hide().fadeIn(de);
    $("footer").hide().fadeIn(de);
    $('nav li').hide().delay(900).each(function( i ) {
        $(this).delay( i * 100 ).fadeIn(de);
    });

    $('.jsFlow').hide().delay(900).each(function( x ) {
        $(this).delay( x * 250 ).fadeTo(de,1.0);
    });

    //$(".text").fadeIn(de);


    $('a').click(function (e) {
        e.preventDefault();
        var goTo = this.getAttribute("href");
        
        $("*:not(title)").fadeOut(de);
   
        setTimeout(function(){
            window.location = goTo;
        },de);       
    }); 

});


