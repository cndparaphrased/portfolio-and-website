$(function() {

  $(document.body).on('touchmove', function(e) {
    e.preventDefault();
    e.stopPropagation();
  });

  // on click of hamburger menu
  $('.mobileMenu').on('click', function() {
    $('.grid').toggleClass('grid--active grid--inactive');
    $('.menu').toggleClass('menu--active');
    $('.menu__item').fadeToggle(300);
    $('.mobileMenu__bars:nth-of-type(1)').toggleClass('type1AnimInit type1Anim');
    $('.mobileMenu__bars:nth-of-type(2)').toggleClass('type2AnimInit type2Anim');
    $('.mobileMenu__bars:nth-of-type(3)').toggleClass('type3AnimInit type3Anim');
  });


  // on click of each letter in profile grid
  $('.grid__cell .grid__link').on('click', function() {
    const currentCell = $($(this).attr('href'));
    const slideColor = $(currentCell).children('.slide__right').css('background-color');
    document.styleSheets[2].cssRules[165].style.backgroundColor = slideColor;

    // console.log(document.styleSheets[2].cssRules);

    // $('.profile').addClass('animShrinkX').delay(.5).queue(function() {
    //   $('body').addClass('swipeAnimation swipeLtoR');
    // });

    // toggle displays
    // $('header').css({
    //   opacity: 0,
    //   visibility: 'hidden'
    // });
    // $('footer').css({
    //   opacity: 0,
    //   visibility: 'hidden'
    // });
    // $('.grid').css({
    //   opacity: 0,
    //   visibility: 'hidden'
    // });

    // $('header').removeClass('fadeInIndex');
    // $('footer').removeClass('fadeInIndex');
    // $('.grid').removeClass('fadeInIndex');

    $(currentCell).css({
      display: 'flex'
    });
    
    
    // add animations to the correct slide
    $('body').addClass('swipeAnimation swipeLtoR').delay(100).queue(function() {
      $(currentCell).addClass('animGrowX').dequeue();

    });

    // remove classes on animation end
    $('body').on('animationend', function () {
      $('body').delay(100).queue(function() {
        $('body').removeClass().dequeue();
      });
    });





  }); // end function onClick of each letter in profile









  // on click of center square
  // $('.ctrl__desktop--center').on('click', function() {
  //   const thisSlide = $(this).parents('div').eq(3);

  //   $(thisSlide).css({
  //     display: 'none'
  //   });

  //   // clears all animations on slides
  //   $('.slide').removeClass('fadeInAnimation');

  //   // re-displays profile
  //   $('header').addClass('fadeInIndex');
  //   $('footer').addClass('fadeInIndex');
  //   $('.grid').addClass('fadeInIndex');
  //   $('body').addClass('swipeUpAnimation swipeUp');
  // }); // end function onClick of center square








  

  // on click of arrows
  // $('.ctrl__desktop--arrows').on('click', function() {
  //   const currentSlide = $(this).parents('div').eq(3);
  //   const previousSlide = $(currentSlide).prev('.slide');
  //   const nextSlide = $(currentSlide).next('.slide');
  //   const prevSlideColor = $(previousSlide).children('.slide__right').css('background-color');
  //   const nextSlideColor = $(nextSlide).children('.slide__right').css('background-color');

  //   // function to change the colour of the pseudo slide animation
  //   function alterColor(directionSlideColor) {
  //     document.styleSheets[2].cssRules[113].style.backgroundColor = directionSlideColor;
  //   }

  //   // hide current slide
  //   $(currentSlide).css({
  //     display: 'none'
  //   });

  //   // reveal correct previous slide and run animation with correct color
  //   // if slide is the first slide, find the last letter and display last slide
  //   if ($(this).attr('class') == 'btn ctrl__desktop--arrows ctrl__desktop--left' && $(currentSlide).attr('id') === 'A') {
  //     const directionZ = $(currentSlide).siblings('#Z').children('.slide__right').css('background-color');
  //     alterColor(directionZ);
  //     $(currentSlide).siblings('#Z').css({
  //       display: 'flex'
  //     }).addClass('fadeInAnimation');
  //     $('body').addClass('swipeAnimation swipeLtoR');
  //   } 
  //   // any other back arrow click, display the previous slide
  //   else if ($(this).attr('class') === 'btn ctrl__desktop--arrows ctrl__desktop--left') {
  //     alterColor(prevSlideColor);
  //     $(previousSlide).css({
  //       display: 'flex'
  //     }).addClass('fadeInAnimation');
  //     $('body').addClass('swipeAnimation swipeLtoR');
  //   } 
  //   // reveal correct next slide and run animation with correct color
  //   // if slide is the last slide, go back to the beginning and display first slide
  //   else if ($(this).attr('class') === 'btn ctrl__desktop--arrows ctrl__desktop--right' && $(currentSlide).attr('id') === 'Z') {
  //     const directionA = $(currentSlide).siblings('#A').children('.slide__right').css('background-color');
  //     alterColor(directionA);
  //     $(currentSlide).siblings('#A').css({
  //       display: 'flex'
  //     }).addClass('fadeInAnimation');
  //     $('body').addClass('swipeAnimation swipeRtoL');
  //   } 
  //   // any other forward arrow click, display the next slide
  //   else if ($(this).attr('class') === 'btn ctrl__desktop--arrows ctrl__desktop--right') {
  //     alterColor(nextSlideColor);
  //     $(nextSlide).css({
  //       display: 'flex'
  //     }).addClass('fadeInAnimation');
  //     $('body').addClass('swipeAnimation swipeRtoL');
  //   };
  // }); // end function onClick of arrows
}); // end doc ready


