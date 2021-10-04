const nav = $('nav');
const navLink = $('#home nav .nav-link');
const navbarBrand = $('.navbar-brand');
const logo = $('.navbar-brand img');
const sections = $('section');
const burgerBtn = $('.fa-bars');
const colorPicker = $('#color-picker--item a');
const spinner = $('.lds-hourglass');
const loadingScreen = $('.loading-screen');
const aboutOffset = $('#about').offset().top



$(document).ready(()=>{
    spinner.fadeOut(1000,()=>{
        loadingScreen.fadeOut(1000,()=>{
            $('body').css('overflow-y','auto')
        })
    })
});



function pickColor(){
    colorPicker.click((e)=>{
      let currentColor= $(e.target).css('background-color');
      
      $('h2').css('color',currentColor)
    })
}

function reset(){
    $('.reset').click(()=>{
        $('h2').css('color','#282828');
        $('.carousel-inner h2').css('color','#fff');
        

    })
}


function scrollMe(){
    navLink.addClass('nav-link--not-scroll');
    nav.addClass('not-scrolling');

    $(window).scroll(()=>{
        if($('body','html').scrollTop() == 0){
            nav.removeClass('scrolling');
            nav.removeClass('shadow');
            nav.addClass('not-scrolling');
            navLink.removeClass('nav-link--scroll');
            navLink.addClass('nav-link--not-scroll');
            
            burgerBtn.removeClass('burger-onscroll');
            burgerBtn.addClass('burger-offscroll');
            logo.attr('src','images/logo-white.png')
    
        }else {
            nav.removeClass('not-scrolling');
            nav.addClass('scrolling');
            nav.addClass('shadow');
            navLink.removeClass('nav-link--not-scroll');
            navLink.addClass('nav-link--scroll');
            
       
            burgerBtn.removeClass('burger-offscroll');
            burgerBtn.addClass('burger-onscroll');
            logo.attr('src','images/icon3\'.png');
        }
      
        
        for(let i = 0; i < sections.length;i++){
            let secId = sections[i].getAttribute('id')
            if($('body','html').scrollTop() >= sections[i].offsetTop-50){
                for(let link of navLink){
                    if(link.getAttribute('href') == `#${secId}`){
                        link.classList.add('active');
            
                    }else{
                        link.classList.remove('active')
                    }
                    
                }
                    
             }else if($('body','html').scrollTop() < sections[0].offsetTop){
                navLink.removeClass('active')
                navLink.eq(0).addClass('active')
                }
                
        }
        
       
    })
}
function clickOnNav(){
    navLink.click((e)=>{
    let linkHref = $(e.target).attr('href');
    let currentSecOff = $(linkHref).offset().top;
    $('body,html').animate({scrollTop:currentSecOff},1500);

})
}

function goToTop(){
    $('.goToTop').click(()=>{
        $('html,body').animate({scrollTop:0},1500)
    })
}

function goToSecondSec() {
    $('#mouse').click(()=>{
        $('body,html').animate({scrollTop:aboutOffset},2000)
    })
}

function callFuncs(){
    scrollMe();
    clickOnNav();
    pickColor();
    reset();
    goToTop();
    goToSecondSec();
    

}

callFuncs();