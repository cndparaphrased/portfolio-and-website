(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

$(function () {

  // prevent scrolling on touch devices
  $(document.body).on('touchmove', function (e) {
    e.preventDefault();
    e.stopPropagation();
  });

  // on click of hamburger menu
  $('.mobileMenu').on('click', function () {
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
  $('.grid__cell .grid__link').on('click', function () {
    var currentCell = $($(this).attr('href'));
    var slideColor = $(currentCell).children('.slide__right').css('background-color');
    document.styleSheets[2].cssRules[167].style.backgroundColor = slideColor;

    $('body').addClass('swipeAnimation swipeLtoR');

    // remove classes on animation end
    $('body').on('animationend', function () {
      $('body').delay(100).queue(function () {
        $('body').removeClass().dequeue();
      });
    });
  });

  // on click of each letter in profile grid
  // $('.grid__cell .grid__link').on('click', function() {
  //   const currentCell = $($(this).attr('href'));
  //   const slideColor = $(currentCell).children('.slide__right').css('background-color');
  //   document.styleSheets[2].cssRules[116].style.backgroundColor = slideColor;

  // console.log('clicked');
  console.log(document.styleSheets[2].cssRules);
  console.log(document.styleSheets[2].cssRules[116].style.backgroundColor);

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

  // $(currentCell).css({
  //   display: 'flex'
  // });


  // add animations to the correct slide
  //   $('body').addClass('swipeAnimation swipeLtoR');


  // }); // end function onClick of each letter in profile


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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxFQUFFLFlBQVc7O0FBRVg7QUFDQSxJQUFFLFNBQVMsSUFBWCxFQUFpQixFQUFqQixDQUFvQixXQUFwQixFQUFpQyxVQUFTLENBQVQsRUFBWTtBQUMzQyxNQUFFLGNBQUY7QUFDQSxNQUFFLGVBQUY7QUFDRCxHQUhEOztBQUtBO0FBQ0EsSUFBRSxhQUFGLEVBQWlCLEVBQWpCLENBQW9CLE9BQXBCLEVBQTZCLFlBQVc7QUFDdEMsTUFBRSxPQUFGLEVBQVcsV0FBWCxDQUF1QixjQUF2QjtBQUNBLE1BQUUsT0FBRixFQUFXLFdBQVgsQ0FBdUIsY0FBdkI7QUFDQSxNQUFFLGFBQUYsRUFBaUIsVUFBakIsQ0FBNEIsR0FBNUI7QUFDQSxRQUFJLEVBQUUsTUFBRixFQUFVLEtBQVYsTUFBcUIsR0FBekIsRUFBOEI7QUFDNUIsUUFBRSxrQ0FBRixFQUFzQyxXQUF0QyxDQUFrRCw0QkFBbEQ7QUFDQSxRQUFFLGtDQUFGLEVBQXNDLFdBQXRDLENBQWtELHlCQUFsRDtBQUNBLFFBQUUsa0NBQUYsRUFBc0MsV0FBdEMsQ0FBa0QsNEJBQWxEO0FBQ0QsS0FKRCxNQUlPO0FBQ0wsUUFBRSxrQ0FBRixFQUFzQyxXQUF0QyxDQUFrRCx5QkFBbEQ7QUFDQSxRQUFFLGtDQUFGLEVBQXNDLFdBQXRDLENBQWtELHlCQUFsRDtBQUNBLFFBQUUsa0NBQUYsRUFBc0MsV0FBdEMsQ0FBa0QseUJBQWxEO0FBQ0Q7QUFDRixHQWJEOztBQWVBO0FBQ0EsSUFBRSx5QkFBRixFQUE2QixFQUE3QixDQUFnQyxPQUFoQyxFQUF5QyxZQUFXO0FBQ2xELFFBQU0sY0FBYyxFQUFFLEVBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxNQUFiLENBQUYsQ0FBcEI7QUFDQSxRQUFNLGFBQWEsRUFBRSxXQUFGLEVBQWUsUUFBZixDQUF3QixlQUF4QixFQUF5QyxHQUF6QyxDQUE2QyxrQkFBN0MsQ0FBbkI7QUFDQSxhQUFTLFdBQVQsQ0FBcUIsQ0FBckIsRUFBd0IsUUFBeEIsQ0FBaUMsR0FBakMsRUFBc0MsS0FBdEMsQ0FBNEMsZUFBNUMsR0FBOEQsVUFBOUQ7O0FBR0EsTUFBRSxNQUFGLEVBQVUsUUFBVixDQUFtQiwwQkFBbkI7O0FBRUE7QUFDQSxNQUFFLE1BQUYsRUFBVSxFQUFWLENBQWEsY0FBYixFQUE2QixZQUFZO0FBQ3ZDLFFBQUUsTUFBRixFQUFVLEtBQVYsQ0FBZ0IsR0FBaEIsRUFBcUIsS0FBckIsQ0FBMkIsWUFBVztBQUNwQyxVQUFFLE1BQUYsRUFBVSxXQUFWLEdBQXdCLE9BQXhCO0FBQ0QsT0FGRDtBQUdELEtBSkQ7QUFNRCxHQWZEOztBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVFO0FBQ0EsVUFBUSxHQUFSLENBQVksU0FBUyxXQUFULENBQXFCLENBQXJCLEVBQXdCLFFBQXBDO0FBQ0EsVUFBUSxHQUFSLENBQVksU0FBUyxXQUFULENBQXFCLENBQXJCLEVBQXdCLFFBQXhCLENBQWlDLEdBQWpDLEVBQXNDLEtBQXRDLENBQTRDLGVBQXhEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNGOzs7QUFRQTs7O0FBVUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxDQXZMRCxFLENBdUxJIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiJChmdW5jdGlvbigpIHtcblxuICAvLyBwcmV2ZW50IHNjcm9sbGluZyBvbiB0b3VjaCBkZXZpY2VzXG4gICQoZG9jdW1lbnQuYm9keSkub24oJ3RvdWNobW92ZScsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfSk7XG5cbiAgLy8gb24gY2xpY2sgb2YgaGFtYnVyZ2VyIG1lbnVcbiAgJCgnLm1vYmlsZU1lbnUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAkKCcuZ3JpZCcpLnRvZ2dsZUNsYXNzKCdncmlkLS1hY3RpdmUnKTtcbiAgICAkKCcubWVudScpLnRvZ2dsZUNsYXNzKCdtZW51LS1hY3RpdmUnKTtcbiAgICAkKCcubWVudV9faXRlbScpLmZhZGVUb2dnbGUoMzAwKTtcbiAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gNTAwKSB7XG4gICAgICAkKCcubW9iaWxlTWVudV9fYmFyczpudGgtb2YtdHlwZSgxKScpLnRvZ2dsZUNsYXNzKCd0eXBlMUFuaW1Jbml0IHR5cGUxQW5pbTUwMCcpO1xuICAgICAgJCgnLm1vYmlsZU1lbnVfX2JhcnM6bnRoLW9mLXR5cGUoMiknKS50b2dnbGVDbGFzcygndHlwZTJBbmltSW5pdCB0eXBlMkFuaW0nKTtcbiAgICAgICQoJy5tb2JpbGVNZW51X19iYXJzOm50aC1vZi10eXBlKDMpJykudG9nZ2xlQ2xhc3MoJ3R5cGUzQW5pbUluaXQgdHlwZTNBbmltNTAwJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy5tb2JpbGVNZW51X19iYXJzOm50aC1vZi10eXBlKDEpJykudG9nZ2xlQ2xhc3MoJ3R5cGUxQW5pbUluaXQgdHlwZTFBbmltJyk7XG4gICAgICAkKCcubW9iaWxlTWVudV9fYmFyczpudGgtb2YtdHlwZSgyKScpLnRvZ2dsZUNsYXNzKCd0eXBlMkFuaW1Jbml0IHR5cGUyQW5pbScpO1xuICAgICAgJCgnLm1vYmlsZU1lbnVfX2JhcnM6bnRoLW9mLXR5cGUoMyknKS50b2dnbGVDbGFzcygndHlwZTNBbmltSW5pdCB0eXBlM0FuaW0nKTtcbiAgICB9O1xuICB9KTtcblxuICAvLyBvbiBjbGljayBvZiBlYWNoIGxldHRlciBpbiBwcm9maWxlIGdyaWQgXG4gICQoJy5ncmlkX19jZWxsIC5ncmlkX19saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY3VycmVudENlbGwgPSAkKCQodGhpcykuYXR0cignaHJlZicpKTtcbiAgICBjb25zdCBzbGlkZUNvbG9yID0gJChjdXJyZW50Q2VsbCkuY2hpbGRyZW4oJy5zbGlkZV9fcmlnaHQnKS5jc3MoJ2JhY2tncm91bmQtY29sb3InKTtcbiAgICBkb2N1bWVudC5zdHlsZVNoZWV0c1syXS5jc3NSdWxlc1sxNjddLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHNsaWRlQ29sb3I7XG5cblxuICAgICQoJ2JvZHknKS5hZGRDbGFzcygnc3dpcGVBbmltYXRpb24gc3dpcGVMdG9SJyk7XG5cbiAgICAvLyByZW1vdmUgY2xhc3NlcyBvbiBhbmltYXRpb24gZW5kXG4gICAgJCgnYm9keScpLm9uKCdhbmltYXRpb25lbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkKCdib2R5JykuZGVsYXkoMTAwKS5xdWV1ZShmdW5jdGlvbigpIHtcbiAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCkuZGVxdWV1ZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgfSk7XG5cblxuXG5cbiAgLy8gb24gY2xpY2sgb2YgZWFjaCBsZXR0ZXIgaW4gcHJvZmlsZSBncmlkXG4gIC8vICQoJy5ncmlkX19jZWxsIC5ncmlkX19saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gIC8vICAgY29uc3QgY3VycmVudENlbGwgPSAkKCQodGhpcykuYXR0cignaHJlZicpKTtcbiAgLy8gICBjb25zdCBzbGlkZUNvbG9yID0gJChjdXJyZW50Q2VsbCkuY2hpbGRyZW4oJy5zbGlkZV9fcmlnaHQnKS5jc3MoJ2JhY2tncm91bmQtY29sb3InKTtcbiAgLy8gICBkb2N1bWVudC5zdHlsZVNoZWV0c1syXS5jc3NSdWxlc1sxMTZdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHNsaWRlQ29sb3I7XG5cbiAgICAvLyBjb25zb2xlLmxvZygnY2xpY2tlZCcpO1xuICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LnN0eWxlU2hlZXRzWzJdLmNzc1J1bGVzKTtcbiAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5zdHlsZVNoZWV0c1syXS5jc3NSdWxlc1sxMTZdLnN0eWxlLmJhY2tncm91bmRDb2xvcik7XG5cbiAgICAvLyAkKCcucHJvZmlsZScpLmFkZENsYXNzKCdhbmltU2hyaW5rWCcpLmRlbGF5KC41KS5xdWV1ZShmdW5jdGlvbigpIHtcbiAgICAvLyAgICQoJ2JvZHknKS5hZGRDbGFzcygnc3dpcGVBbmltYXRpb24gc3dpcGVMdG9SJyk7XG4gICAgLy8gfSk7XG5cbiAgICAvLyB0b2dnbGUgZGlzcGxheXNcbiAgICAvLyAkKCdoZWFkZXInKS5jc3Moe1xuICAgIC8vICAgb3BhY2l0eTogMCxcbiAgICAvLyAgIHZpc2liaWxpdHk6ICdoaWRkZW4nXG4gICAgLy8gfSk7XG4gICAgLy8gJCgnZm9vdGVyJykuY3NzKHtcbiAgICAvLyAgIG9wYWNpdHk6IDAsXG4gICAgLy8gICB2aXNpYmlsaXR5OiAnaGlkZGVuJ1xuICAgIC8vIH0pO1xuICAgIC8vICQoJy5ncmlkJykuY3NzKHtcbiAgICAvLyAgIG9wYWNpdHk6IDAsXG4gICAgLy8gICB2aXNpYmlsaXR5OiAnaGlkZGVuJ1xuICAgIC8vIH0pO1xuXG4gICAgLy8gJCgnaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2ZhZGVJbkluZGV4Jyk7XG4gICAgLy8gJCgnZm9vdGVyJykucmVtb3ZlQ2xhc3MoJ2ZhZGVJbkluZGV4Jyk7XG4gICAgLy8gJCgnLmdyaWQnKS5yZW1vdmVDbGFzcygnZmFkZUluSW5kZXgnKTtcblxuICAgIC8vICQoY3VycmVudENlbGwpLmNzcyh7XG4gICAgLy8gICBkaXNwbGF5OiAnZmxleCdcbiAgICAvLyB9KTtcbiAgICBcbiAgICBcbiAgICAvLyBhZGQgYW5pbWF0aW9ucyB0byB0aGUgY29ycmVjdCBzbGlkZVxuICAvLyAgICQoJ2JvZHknKS5hZGRDbGFzcygnc3dpcGVBbmltYXRpb24gc3dpcGVMdG9SJyk7XG5cblxuXG5cblxuXG5cbiAgLy8gfSk7IC8vIGVuZCBmdW5jdGlvbiBvbkNsaWNrIG9mIGVhY2ggbGV0dGVyIGluIHByb2ZpbGVcblxuXG5cblxuXG5cblxuXG5cbiAgLy8gb24gY2xpY2sgb2YgY2VudGVyIHNxdWFyZVxuICAvLyAkKCcuY3RybF9fZGVza3RvcC0tY2VudGVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gIC8vICAgY29uc3QgdGhpc1NsaWRlID0gJCh0aGlzKS5wYXJlbnRzKCdkaXYnKS5lcSgzKTtcblxuICAvLyAgICQodGhpc1NsaWRlKS5jc3Moe1xuICAvLyAgICAgZGlzcGxheTogJ25vbmUnXG4gIC8vICAgfSk7XG5cbiAgLy8gICAvLyBjbGVhcnMgYWxsIGFuaW1hdGlvbnMgb24gc2xpZGVzXG4gIC8vICAgJCgnLnNsaWRlJykucmVtb3ZlQ2xhc3MoJ2ZhZGVJbkFuaW1hdGlvbicpO1xuXG4gIC8vICAgLy8gcmUtZGlzcGxheXMgcHJvZmlsZVxuICAvLyAgICQoJ2hlYWRlcicpLmFkZENsYXNzKCdmYWRlSW5JbmRleCcpO1xuICAvLyAgICQoJ2Zvb3RlcicpLmFkZENsYXNzKCdmYWRlSW5JbmRleCcpO1xuICAvLyAgICQoJy5ncmlkJykuYWRkQ2xhc3MoJ2ZhZGVJbkluZGV4Jyk7XG4gIC8vICAgJCgnYm9keScpLmFkZENsYXNzKCdzd2lwZVVwQW5pbWF0aW9uIHN3aXBlVXAnKTtcbiAgLy8gfSk7IC8vIGVuZCBmdW5jdGlvbiBvbkNsaWNrIG9mIGNlbnRlciBzcXVhcmVcblxuXG5cblxuXG5cblxuXG4gIFxuXG4gIC8vIG9uIGNsaWNrIG9mIGFycm93c1xuICAvLyAkKCcuY3RybF9fZGVza3RvcC0tYXJyb3dzJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gIC8vICAgY29uc3QgY3VycmVudFNsaWRlID0gJCh0aGlzKS5wYXJlbnRzKCdkaXYnKS5lcSgzKTtcbiAgLy8gICBjb25zdCBwcmV2aW91c1NsaWRlID0gJChjdXJyZW50U2xpZGUpLnByZXYoJy5zbGlkZScpO1xuICAvLyAgIGNvbnN0IG5leHRTbGlkZSA9ICQoY3VycmVudFNsaWRlKS5uZXh0KCcuc2xpZGUnKTtcbiAgLy8gICBjb25zdCBwcmV2U2xpZGVDb2xvciA9ICQocHJldmlvdXNTbGlkZSkuY2hpbGRyZW4oJy5zbGlkZV9fcmlnaHQnKS5jc3MoJ2JhY2tncm91bmQtY29sb3InKTtcbiAgLy8gICBjb25zdCBuZXh0U2xpZGVDb2xvciA9ICQobmV4dFNsaWRlKS5jaGlsZHJlbignLnNsaWRlX19yaWdodCcpLmNzcygnYmFja2dyb3VuZC1jb2xvcicpO1xuXG4gIC8vICAgLy8gZnVuY3Rpb24gdG8gY2hhbmdlIHRoZSBjb2xvdXIgb2YgdGhlIHBzZXVkbyBzbGlkZSBhbmltYXRpb25cbiAgLy8gICBmdW5jdGlvbiBhbHRlckNvbG9yKGRpcmVjdGlvblNsaWRlQ29sb3IpIHtcbiAgLy8gICAgIGRvY3VtZW50LnN0eWxlU2hlZXRzWzJdLmNzc1J1bGVzWzExM10uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZGlyZWN0aW9uU2xpZGVDb2xvcjtcbiAgLy8gICB9XG5cbiAgLy8gICAvLyBoaWRlIGN1cnJlbnQgc2xpZGVcbiAgLy8gICAkKGN1cnJlbnRTbGlkZSkuY3NzKHtcbiAgLy8gICAgIGRpc3BsYXk6ICdub25lJ1xuICAvLyAgIH0pO1xuXG4gIC8vICAgLy8gcmV2ZWFsIGNvcnJlY3QgcHJldmlvdXMgc2xpZGUgYW5kIHJ1biBhbmltYXRpb24gd2l0aCBjb3JyZWN0IGNvbG9yXG4gIC8vICAgLy8gaWYgc2xpZGUgaXMgdGhlIGZpcnN0IHNsaWRlLCBmaW5kIHRoZSBsYXN0IGxldHRlciBhbmQgZGlzcGxheSBsYXN0IHNsaWRlXG4gIC8vICAgaWYgKCQodGhpcykuYXR0cignY2xhc3MnKSA9PSAnYnRuIGN0cmxfX2Rlc2t0b3AtLWFycm93cyBjdHJsX19kZXNrdG9wLS1sZWZ0JyAmJiAkKGN1cnJlbnRTbGlkZSkuYXR0cignaWQnKSA9PT0gJ0EnKSB7XG4gIC8vICAgICBjb25zdCBkaXJlY3Rpb25aID0gJChjdXJyZW50U2xpZGUpLnNpYmxpbmdzKCcjWicpLmNoaWxkcmVuKCcuc2xpZGVfX3JpZ2h0JykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJyk7XG4gIC8vICAgICBhbHRlckNvbG9yKGRpcmVjdGlvblopO1xuICAvLyAgICAgJChjdXJyZW50U2xpZGUpLnNpYmxpbmdzKCcjWicpLmNzcyh7XG4gIC8vICAgICAgIGRpc3BsYXk6ICdmbGV4J1xuICAvLyAgICAgfSkuYWRkQ2xhc3MoJ2ZhZGVJbkFuaW1hdGlvbicpO1xuICAvLyAgICAgJCgnYm9keScpLmFkZENsYXNzKCdzd2lwZUFuaW1hdGlvbiBzd2lwZUx0b1InKTtcbiAgLy8gICB9IFxuICAvLyAgIC8vIGFueSBvdGhlciBiYWNrIGFycm93IGNsaWNrLCBkaXNwbGF5IHRoZSBwcmV2aW91cyBzbGlkZVxuICAvLyAgIGVsc2UgaWYgKCQodGhpcykuYXR0cignY2xhc3MnKSA9PT0gJ2J0biBjdHJsX19kZXNrdG9wLS1hcnJvd3MgY3RybF9fZGVza3RvcC0tbGVmdCcpIHtcbiAgLy8gICAgIGFsdGVyQ29sb3IocHJldlNsaWRlQ29sb3IpO1xuICAvLyAgICAgJChwcmV2aW91c1NsaWRlKS5jc3Moe1xuICAvLyAgICAgICBkaXNwbGF5OiAnZmxleCdcbiAgLy8gICAgIH0pLmFkZENsYXNzKCdmYWRlSW5BbmltYXRpb24nKTtcbiAgLy8gICAgICQoJ2JvZHknKS5hZGRDbGFzcygnc3dpcGVBbmltYXRpb24gc3dpcGVMdG9SJyk7XG4gIC8vICAgfSBcbiAgLy8gICAvLyByZXZlYWwgY29ycmVjdCBuZXh0IHNsaWRlIGFuZCBydW4gYW5pbWF0aW9uIHdpdGggY29ycmVjdCBjb2xvclxuICAvLyAgIC8vIGlmIHNsaWRlIGlzIHRoZSBsYXN0IHNsaWRlLCBnbyBiYWNrIHRvIHRoZSBiZWdpbm5pbmcgYW5kIGRpc3BsYXkgZmlyc3Qgc2xpZGVcbiAgLy8gICBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ2NsYXNzJykgPT09ICdidG4gY3RybF9fZGVza3RvcC0tYXJyb3dzIGN0cmxfX2Rlc2t0b3AtLXJpZ2h0JyAmJiAkKGN1cnJlbnRTbGlkZSkuYXR0cignaWQnKSA9PT0gJ1onKSB7XG4gIC8vICAgICBjb25zdCBkaXJlY3Rpb25BID0gJChjdXJyZW50U2xpZGUpLnNpYmxpbmdzKCcjQScpLmNoaWxkcmVuKCcuc2xpZGVfX3JpZ2h0JykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJyk7XG4gIC8vICAgICBhbHRlckNvbG9yKGRpcmVjdGlvbkEpO1xuICAvLyAgICAgJChjdXJyZW50U2xpZGUpLnNpYmxpbmdzKCcjQScpLmNzcyh7XG4gIC8vICAgICAgIGRpc3BsYXk6ICdmbGV4J1xuICAvLyAgICAgfSkuYWRkQ2xhc3MoJ2ZhZGVJbkFuaW1hdGlvbicpO1xuICAvLyAgICAgJCgnYm9keScpLmFkZENsYXNzKCdzd2lwZUFuaW1hdGlvbiBzd2lwZVJ0b0wnKTtcbiAgLy8gICB9IFxuICAvLyAgIC8vIGFueSBvdGhlciBmb3J3YXJkIGFycm93IGNsaWNrLCBkaXNwbGF5IHRoZSBuZXh0IHNsaWRlXG4gIC8vICAgZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCdjbGFzcycpID09PSAnYnRuIGN0cmxfX2Rlc2t0b3AtLWFycm93cyBjdHJsX19kZXNrdG9wLS1yaWdodCcpIHtcbiAgLy8gICAgIGFsdGVyQ29sb3IobmV4dFNsaWRlQ29sb3IpO1xuICAvLyAgICAgJChuZXh0U2xpZGUpLmNzcyh7XG4gIC8vICAgICAgIGRpc3BsYXk6ICdmbGV4J1xuICAvLyAgICAgfSkuYWRkQ2xhc3MoJ2ZhZGVJbkFuaW1hdGlvbicpO1xuICAvLyAgICAgJCgnYm9keScpLmFkZENsYXNzKCdzd2lwZUFuaW1hdGlvbiBzd2lwZVJ0b0wnKTtcbiAgLy8gICB9O1xuICAvLyB9KTsgLy8gZW5kIGZ1bmN0aW9uIG9uQ2xpY2sgb2YgYXJyb3dzXG59KTsgLy8gZW5kIGRvYyByZWFkeVxuXG5cbiJdfQ==
