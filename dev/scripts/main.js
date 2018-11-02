$(function() {

  // prevent scrolling on touch devices
  $(document.body).on('touchmove', function(e) {
    e.preventDefault();
    e.stopPropagation();
  });

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
  });

  // on click of each letter in profile grid 
  $('.grid__cell .grid__link').on('click', function() {
    const currentCell = $($(this).attr('href'));
    const slideColor = $(currentCell).children('.slide__right').css('background-color');
    document.styleSheets[2].cssRules[167].style.backgroundColor = slideColor;

    // activates swipe animation
    $('body').addClass('swipeAnimation swipeRtoL');

    // displays none everything but current cell
    $('header').addClass('animShrinkX').fadeOut();
    $('footer').addClass('animShrinkX').fadeOut();
    $('.profile').addClass('animShrinkX').fadeOut().delay(800).queue(function() {
      $(currentCell).addClass('animGrowX').css({display: 'flex'}).dequeue();
    });
    
    // remove classes on animation end
    $('body').on('animationend', function () {
      $('body').delay(100).queue(function() {
        $('body').removeClass().dequeue();
        $('header').removeClass();
        $('footer').removeClass();
        $('.profile').removeClass('animShrinkX');
        $(currentCell).removeClass('animGrowX');
      });
    });
  }); // end function onClick of each letter in profile


  // on click of center square
  $('.ctrl__desktop--center').on('click', function() {
    const thisSlide = $(this).parents('div').eq(3);
    
    // activates animation
    $('body').addClass('swipeUpAnimation swipeUp');

    // re-displays grid, header, and footer
    $(thisSlide).addClass('animShrinkDown').fadeOut().delay(1000).queue(function() {
      $(thisSlide).removeClass('animShrinkDown').dequeue();
      $('header').css({display: 'block'});
      $('footer').css({display: 'block'});
      $('.profile').css({display: 'block'});
    });

    // clears all animations on slides
    $('.slide').removeClass('animGrowX');

    // re-displays profile

  }); // end function onClick of center square








  

  // on click of arrows
  $('.ctrl__desktop--arrows').on('click', function() {
    const currentSlide = $(this).parents('div').eq(3);
    const previousSlide = $(currentSlide).prev('.slide');
    const nextSlide = $(currentSlide).next('.slide');

    const currentSlideColor = $(currentSlide).children('.slide__right').css('background-color');
    document.styleSheets[2].cssRules[167].style.backgroundColor = currentSlideColor;

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
      $(currentSlide).addClass('animShrinkXFromRight').fadeOut(1000).delay(250).queue(function () {
        $(currentSlide).siblings('#Z').addClass('animGrowXFromLeft').css({ display: 'flex' }).dequeue();
      });
    } else if ($(this).attr('class') === 'btn ctrl__desktop--arrows ctrl__desktop--left') {
      $('body').addClass('swipeAnimation swipeLtoR');
      $(currentSlide).addClass('animShrinkXFromRight').fadeOut(1000).delay(300).queue(function () {
        $(previousSlide).addClass('animGrowXFromLeft').css({ display: 'flex' }).dequeue();
      });
    }












    // hide current slide


    // reveal correct previous slide and run animation with correct color
    // if slide is the first slide, find the last letter and display last slide
    // if ($(this).attr('class') == 'btn ctrl__desktop--arrows ctrl__desktop--left' && $(currentSlide).attr('id') === 'A') {
    //   const directionZ = $(currentSlide).siblings('#Z').children('.slide__right').css('background-color');
    //   alterColor(directionZ);
    //   $(currentSlide).siblings('#Z').css({
    //     display: 'flex'
    //   }).addClass('fadeInAnimation');
    //   $('body').addClass('swipeAnimation swipeLtoR');
    // } 
    // // any other back arrow click, display the previous slide
    // else if ($(this).attr('class') === 'btn ctrl__desktop--arrows ctrl__desktop--left') {
    //   alterColor(prevSlideColor);
    //   $(previousSlide).css({
    //     display: 'flex'
    //   }).addClass('fadeInAnimation');
    //   $('body').addClass('swipeAnimation swipeLtoR');
    // } 
    // reveal correct next slide and run animation with correct color
    // if slide is the last slide, go back to the beginning and display first slide
    // else if ($(this).attr('class') === 'btn ctrl__desktop--arrows ctrl__desktop--right' && $(currentSlide).attr('id') === 'Z') {
    //   const directionA = $(currentSlide).siblings('#A').children('.slide__right').css('background-color');
    //   alterColor(directionA);
    //   $(currentSlide).siblings('#A').css({
    //     display: 'flex'
    //   }).addClass('fadeInAnimation');
    //   $('body').addClass('swipeAnimation swipeRtoL');
    // } 
    // // any other forward arrow click, display the next slide
    // else if ($(this).attr('class') === 'btn ctrl__desktop--arrows ctrl__desktop--right') {
    //   alterColor(nextSlideColor);
    //   $(nextSlide).css({
    //     display: 'flex'
    //   }).addClass('fadeInAnimation');
    //   $('body').addClass('swipeAnimation swipeRtoL');
    // };
  }); // end function onClick of arrows
}); // end doc ready


