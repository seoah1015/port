$(window).scroll(function(){
    let wScroll = $(window).scrollTop()

    if(wScroll >= $("#main").offset().top - $(window).height()/2){
        $("#main").addClass("show");
    }

    if(wScroll >= $("#about").offset().top - $(window).height()/2){
        $("#about").addClass("show");
    }

    if(wScroll >= $("#skill").offset().top - $(window).height()/2){
        $("#skill").addClass("show");
    }        

    if(wScroll >= $("#work1").offset().top - $(window).height()/2){
        $("#work1").addClass("show");
    }

    if(wScroll >= $("#work2").offset().top - $(window).height()/2){
        $("#work2").addClass("show");
    }
    
    if(wScroll >= $("#work3").offset().top - $(window).height()/2){
        $("#work3").addClass("show");
    }
    
    if(wScroll >= $("#work4").offset().top - $(window).height()/2){
        $("#work4").addClass("show");
    }
    
    if(wScroll >= $("#work5").offset().top - $(window).height()/2){
        $("#work5").addClass("show");
    }

    if(wScroll >= $("#work6").offset().top - $(window).height()/2){
        $("#work6").addClass("show");
    }

    if(wScroll >= $("#contact").offset().top - $(window).height()/2){
        $("#contact").addClass("show");
    }

    if(wScroll >= $("#footer").offset().top - $(window).height()/2){
        $("#footer").addClass("show");
    }
});
