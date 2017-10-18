



$(document).ready(function(){
    var de = 1000;
    $("html").css("display","block");
    $("#title,footer,nav li,.text").hide();
    $("#title").fadeIn(de);
    $("footer").slideDown(de*1.5).css('display','none').fadeIn(de*1.5).dequeue();
    $('nav li').show().fadeTo(0,0).delay(900).each(function( i ) {
        $(this).delay( i * 100 ).fadeTo(de,1.0);
    });
    $(".text").fadeIn(de);


    $('a').click(function (e) {
        e.preventDefault();
        var goTo = this.getAttribute("href");
        
        $("*:not(title)").fadeOut(de);
   
        setTimeout(function(){
            window.location = goTo;
        },de);       
    }); 

});


