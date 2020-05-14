$(document).ready(function(){

    /*====Sticky Navigation*/

    $('.jsSectionFeatures').waypoint(function(direction){
        if(direction=="down"){
            $('nav').addClass('sticky');
        }
        else{
            $('nav').removeClass('sticky');
        }
    },{
        offset: '60px'
    });

    /*====Scroll on buttons====*/

    $('.jsScrollToPlans').click(function(){
        $('html, body').animate({scrollTop: $('.jsSectionPlans').offset().top},1000);
    });

    $('.jsScrollToStart').click(function(){
        $('html, body').animate({scrollTop: $('.jsSectionFeatures').offset().top},1000);
    });

    /*====Navigation Scroll*/

    $('a[href*="#"]')

    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {

        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
        ) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            if (target.length){

                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {

                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex','-1');
                        $target.focus();
                    };
                });
            }
        }
    });

    /*====Animations on scroll====*/

    $('.jswp1').waypoint(function(direction) {
        $('.jswp1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.jswp2').waypoint(function(direction) {
        $('.jswp2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.jswp3').waypoint(function(direction) {
        $('.jswp3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.jswp4').waypoint(function(direction) {
        $('.jswp4').addClass('animated pulse');
    }, {
        offset: '50%'
    });

    /*====Mobile Nav====*/

    $('.jsNavIcon').click(function() {
        var nav = $('.jsMainNav');
        var icon = $('.jsNavIcon i'); 

        nav.slideToggle(200);

        if(icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        }
        else{
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }

    });

});
