$(function() {

  // prevent scrolling on touch devices
  $(document.body).on('touchmove', function(e) {
    e.preventDefault();
    e.stopPropagation();
  }); // end function to prevent scrolling

  // on click of hamburger menu
  $('.mobileMenu').on('click', function() {
    $('.grid').toggleClass('grid--active');
    $('.menu').toggleClass('menu--active');
    $('.menu__item').fadeToggle(300);
    if ($(window).width() <= 500) {
      $('.mobileMenu__bars:nth-of-type(1)').toggleClass('type1AnimInit type1Anim500');
      $('.mobileMenu__bars:nth-of-type(2)').toggleClass('type2AnimInit type2Anim');
      $('.mobileMenu__bars:nth-of-type(3)').toggleClass('type3AnimInit type3Anim500');
    } else {
      $('.mobileMenu__bars:nth-of-type(1)').toggleClass('type1AnimInit type1Anim');
      $('.mobileMenu__bars:nth-of-type(2)').toggleClass('type2AnimInit type2Anim');
      $('.mobileMenu__bars:nth-of-type(3)').toggleClass('type3AnimInit type3Anim');
    };
  }); // end function onClick of hamburger menu

  // on click of each letter in profile grid 
  $('.grid__cell .grid__link').on('click', function() {
    console.log('click');
    const currentCell = $($(this).attr('href'));
    // const slideColor = $(currentCell).children('.slide__right').css('background-color');
    // document.styleSheets[2].cssRules[167].style.backgroundColor = slideColor;

    console.log(document.styleSheets);

    // activates swipe animation
    $('body').addClass('swipeAnimation swipeRtoL');

    // displays:none everything but current cell
    $('header').addClass('animShrinkX').fadeOut();
    $('footer').addClass('animShrinkX').fadeOut();
    $('.profile').addClass('animShrinkX').fadeOut().delay(800).queue(function() {
      $(currentCell).addClass('animGrowX').css({display: 'flex'}).dequeue();
    });
    
    // remove classes on animation end
    $('body').on('animationend', function() {
      $('body').delay(100).queue(function() {
        $('body').removeClass('swipeAnimation swipeRtoL swipeLtoR').dequeue();
        $('header').removeClass();
        $('footer').removeClass();
        $('.profile').removeClass('animShrinkX');
        $(currentCell).removeClass('animGrowX');
      });
    });
  }); // end function onClick of each letter in profile


  // on click of center square
  $('.ctrl__desktop--center').on('click', function(e) {
    const thisSlide = $(this).parents('div').eq(3);
    
    e.preventDefault();

    $(thisSlide).addClass('animShrinkUp');
    
    // activates animation
    $('body').addClass('swipeUpAnimation swipeUp').on('animationend', function() {
      $('body').delay(450).queue(function() {
        $('body').removeClass();
      });
    });

    setTimeout(function() {
      window.location.href = "index.html";
    }, 1870);

  }); // end function onClick of center square
  

  // on click of arrows
  $('.ctrl__desktop--arrows').on('click', function() {
    const currentSlide = $(this).parents('div').eq(3);
    const previousSlide = $(currentSlide).prev('.slide');
    const nextSlide = $(currentSlide).next('.slide');

    const currentSlideColor = $(currentSlide).children('.slide__right').css('background-color');
    document.styleSheets[2].cssRules[167].style.backgroundColor = currentSlideColor;

    $('.slide').removeClass().addClass('slide');

    if ($(this).attr('class') === 'btn ctrl__desktop--arrows ctrl__desktop--right' && $(currentSlide).attr('id') === 'Z') {
      $('body').addClass('swipeAnimation swipeRtoL');
      $(currentSlide).fadeOut(900).delay(250).queue(function () {
        $(currentSlide).siblings('#A').addClass('animGrowX').css({ display: 'flex'}).dequeue();
      });
    }
    else if ($(this).attr('class') === 'btn ctrl__desktop--arrows ctrl__desktop--right') {
      $('body').addClass('swipeAnimation swipeRtoL');
      $(currentSlide).fadeOut(900).delay(250).queue(function() {
        $(nextSlide).addClass('animGrowX').css({display: 'flex'}).dequeue();
      });
    } else if ($(this).attr('class') == 'btn ctrl__desktop--arrows ctrl__desktop--left' && $(currentSlide).attr('id') === 'A') {
      $('body').addClass('swipeAnimation swipeLtoR');
      $(currentSlide).addClass('animShrinkXFromRight').fadeOut(1000).delay(300).queue(function () {
        $(currentSlide).siblings('#Z').addClass('animGrowXFromLeft').css({ display: 'flex' }).dequeue();
      });
    } else if ($(this).attr('class') === 'btn ctrl__desktop--arrows ctrl__desktop--left') {
      $('body').addClass('swipeAnimation swipeLtoR');
      $(currentSlide).addClass('animShrinkXFromRight').fadeOut(1000).delay(300).queue(function () {
        $(previousSlide).addClass('animGrowXFromLeft').css({ display: 'flex' }).dequeue();
      });
    }
  }); // end function onClick of arrows
}); // end doc ready


