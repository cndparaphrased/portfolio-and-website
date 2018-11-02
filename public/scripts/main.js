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

    // activates swipe animation
    $('body').addClass('swipeAnimation swipeRtoL');

    // displays none everything but current cell
    $('header').addClass('animShrinkX').fadeOut();
    $('footer').addClass('animShrinkX').fadeOut();
    $('.profile').addClass('animShrinkX').fadeOut().delay(800).queue(function () {
      $(currentCell).addClass('animGrowX').css({ display: 'flex' }).dequeue();
    });

    // remove classes on animation end
    $('body').on('animationend', function () {
      $('body').delay(100).queue(function () {
        $('body').removeClass().dequeue();
        $('header').removeClass();
        $('footer').removeClass();
        $('.profile').removeClass('animShrinkX');
        $(currentCell).removeClass('animGrowX');
      });
    });
  }); // end function onClick of each letter in profile


  // on click of center square
  $('.ctrl__desktop--center').on('click', function () {
    var thisSlide = $(this).parents('div').eq(3);

    // activates animation
    $('body').addClass('swipeUpAnimation swipeUp');

    // re-displays grid, header, and footer
    $(thisSlide).addClass('animShrinkDown').fadeOut().delay(1000).queue(function () {
      $(thisSlide).removeClass('animShrinkDown').dequeue();
      $('header').css({ display: 'block' });
      $('footer').css({ display: 'block' });
      $('.profile').css({ display: 'block' });
    });

    // clears all animations on slides
    $('.slide').removeClass('animGrowX');

    // re-displays profile
  }); // end function onClick of center square


  // on click of arrows
  $('.ctrl__desktop--arrows').on('click', function () {
    var currentSlide = $(this).parents('div').eq(3);
    var previousSlide = $(currentSlide).prev('.slide');
    var nextSlide = $(currentSlide).next('.slide');

    var currentSlideColor = $(currentSlide).children('.slide__right').css('background-color');
    document.styleSheets[2].cssRules[167].style.backgroundColor = currentSlideColor;

    if ($(this).attr('class') === 'btn ctrl__desktop--arrows ctrl__desktop--right' && $(currentSlide).attr('id') === 'Z') {
      $('body').addClass('swipeAnimation swipeRtoL');
      $(currentSlide).fadeOut(900).delay(250).queue(function () {
        $(currentSlide).siblings('#A').addClass('animGrowX').css({ display: 'flex' }).dequeue();
      });
    } else if ($(this).attr('class') === 'btn ctrl__desktop--arrows ctrl__desktop--right') {
      $('body').addClass('swipeAnimation swipeRtoL');
      $(currentSlide).fadeOut(900).delay(250).queue(function () {
        $(nextSlide).addClass('animGrowX').css({ display: 'flex' }).dequeue();
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxFQUFFLFlBQVc7O0FBRVg7QUFDQSxJQUFFLFNBQVMsSUFBWCxFQUFpQixFQUFqQixDQUFvQixXQUFwQixFQUFpQyxVQUFTLENBQVQsRUFBWTtBQUMzQyxNQUFFLGNBQUY7QUFDQSxNQUFFLGVBQUY7QUFDRCxHQUhEOztBQUtBO0FBQ0EsSUFBRSxhQUFGLEVBQWlCLEVBQWpCLENBQW9CLE9BQXBCLEVBQTZCLFlBQVc7QUFDdEMsTUFBRSxPQUFGLEVBQVcsV0FBWCxDQUF1QixjQUF2QjtBQUNBLE1BQUUsT0FBRixFQUFXLFdBQVgsQ0FBdUIsY0FBdkI7QUFDQSxNQUFFLGFBQUYsRUFBaUIsVUFBakIsQ0FBNEIsR0FBNUI7QUFDQSxRQUFJLEVBQUUsTUFBRixFQUFVLEtBQVYsTUFBcUIsR0FBekIsRUFBOEI7QUFDNUIsUUFBRSxrQ0FBRixFQUFzQyxXQUF0QyxDQUFrRCw0QkFBbEQ7QUFDQSxRQUFFLGtDQUFGLEVBQXNDLFdBQXRDLENBQWtELHlCQUFsRDtBQUNBLFFBQUUsa0NBQUYsRUFBc0MsV0FBdEMsQ0FBa0QsNEJBQWxEO0FBQ0QsS0FKRCxNQUlPO0FBQ0wsUUFBRSxrQ0FBRixFQUFzQyxXQUF0QyxDQUFrRCx5QkFBbEQ7QUFDQSxRQUFFLGtDQUFGLEVBQXNDLFdBQXRDLENBQWtELHlCQUFsRDtBQUNBLFFBQUUsa0NBQUYsRUFBc0MsV0FBdEMsQ0FBa0QseUJBQWxEO0FBQ0Q7QUFDRixHQWJEOztBQWVBO0FBQ0EsSUFBRSx5QkFBRixFQUE2QixFQUE3QixDQUFnQyxPQUFoQyxFQUF5QyxZQUFXO0FBQ2xELFFBQU0sY0FBYyxFQUFFLEVBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxNQUFiLENBQUYsQ0FBcEI7QUFDQSxRQUFNLGFBQWEsRUFBRSxXQUFGLEVBQWUsUUFBZixDQUF3QixlQUF4QixFQUF5QyxHQUF6QyxDQUE2QyxrQkFBN0MsQ0FBbkI7QUFDQSxhQUFTLFdBQVQsQ0FBcUIsQ0FBckIsRUFBd0IsUUFBeEIsQ0FBaUMsR0FBakMsRUFBc0MsS0FBdEMsQ0FBNEMsZUFBNUMsR0FBOEQsVUFBOUQ7O0FBRUE7QUFDQSxNQUFFLE1BQUYsRUFBVSxRQUFWLENBQW1CLDBCQUFuQjs7QUFFQTtBQUNBLE1BQUUsUUFBRixFQUFZLFFBQVosQ0FBcUIsYUFBckIsRUFBb0MsT0FBcEM7QUFDQSxNQUFFLFFBQUYsRUFBWSxRQUFaLENBQXFCLGFBQXJCLEVBQW9DLE9BQXBDO0FBQ0EsTUFBRSxVQUFGLEVBQWMsUUFBZCxDQUF1QixhQUF2QixFQUFzQyxPQUF0QyxHQUFnRCxLQUFoRCxDQUFzRCxHQUF0RCxFQUEyRCxLQUEzRCxDQUFpRSxZQUFXO0FBQzFFLFFBQUUsV0FBRixFQUFlLFFBQWYsQ0FBd0IsV0FBeEIsRUFBcUMsR0FBckMsQ0FBeUMsRUFBQyxTQUFTLE1BQVYsRUFBekMsRUFBNEQsT0FBNUQ7QUFDRCxLQUZEOztBQUlBO0FBQ0EsTUFBRSxNQUFGLEVBQVUsRUFBVixDQUFhLGNBQWIsRUFBNkIsWUFBWTtBQUN2QyxRQUFFLE1BQUYsRUFBVSxLQUFWLENBQWdCLEdBQWhCLEVBQXFCLEtBQXJCLENBQTJCLFlBQVc7QUFDcEMsVUFBRSxNQUFGLEVBQVUsV0FBVixHQUF3QixPQUF4QjtBQUNBLFVBQUUsUUFBRixFQUFZLFdBQVo7QUFDQSxVQUFFLFFBQUYsRUFBWSxXQUFaO0FBQ0EsVUFBRSxVQUFGLEVBQWMsV0FBZCxDQUEwQixhQUExQjtBQUNBLFVBQUUsV0FBRixFQUFlLFdBQWYsQ0FBMkIsV0FBM0I7QUFDRCxPQU5EO0FBT0QsS0FSRDtBQVNELEdBekJELEVBekJXLENBa0RQOzs7QUFHSjtBQUNBLElBQUUsd0JBQUYsRUFBNEIsRUFBNUIsQ0FBK0IsT0FBL0IsRUFBd0MsWUFBVztBQUNqRCxRQUFNLFlBQVksRUFBRSxJQUFGLEVBQVEsT0FBUixDQUFnQixLQUFoQixFQUF1QixFQUF2QixDQUEwQixDQUExQixDQUFsQjs7QUFFQTtBQUNBLE1BQUUsTUFBRixFQUFVLFFBQVYsQ0FBbUIsMEJBQW5COztBQUVBO0FBQ0EsTUFBRSxTQUFGLEVBQWEsUUFBYixDQUFzQixnQkFBdEIsRUFBd0MsT0FBeEMsR0FBa0QsS0FBbEQsQ0FBd0QsSUFBeEQsRUFBOEQsS0FBOUQsQ0FBb0UsWUFBVztBQUM3RSxRQUFFLFNBQUYsRUFBYSxXQUFiLENBQXlCLGdCQUF6QixFQUEyQyxPQUEzQztBQUNBLFFBQUUsUUFBRixFQUFZLEdBQVosQ0FBZ0IsRUFBQyxTQUFTLE9BQVYsRUFBaEI7QUFDQSxRQUFFLFFBQUYsRUFBWSxHQUFaLENBQWdCLEVBQUMsU0FBUyxPQUFWLEVBQWhCO0FBQ0EsUUFBRSxVQUFGLEVBQWMsR0FBZCxDQUFrQixFQUFDLFNBQVMsT0FBVixFQUFsQjtBQUNELEtBTEQ7O0FBT0E7QUFDQSxNQUFFLFFBQUYsRUFBWSxXQUFaLENBQXdCLFdBQXhCOztBQUVBO0FBRUQsR0FuQkQsRUF0RFcsQ0F5RVA7OztBQVdKO0FBQ0EsSUFBRSx3QkFBRixFQUE0QixFQUE1QixDQUErQixPQUEvQixFQUF3QyxZQUFXO0FBQ2pELFFBQU0sZUFBZSxFQUFFLElBQUYsRUFBUSxPQUFSLENBQWdCLEtBQWhCLEVBQXVCLEVBQXZCLENBQTBCLENBQTFCLENBQXJCO0FBQ0EsUUFBTSxnQkFBZ0IsRUFBRSxZQUFGLEVBQWdCLElBQWhCLENBQXFCLFFBQXJCLENBQXRCO0FBQ0EsUUFBTSxZQUFZLEVBQUUsWUFBRixFQUFnQixJQUFoQixDQUFxQixRQUFyQixDQUFsQjs7QUFFQSxRQUFNLG9CQUFvQixFQUFFLFlBQUYsRUFBZ0IsUUFBaEIsQ0FBeUIsZUFBekIsRUFBMEMsR0FBMUMsQ0FBOEMsa0JBQTlDLENBQTFCO0FBQ0EsYUFBUyxXQUFULENBQXFCLENBQXJCLEVBQXdCLFFBQXhCLENBQWlDLEdBQWpDLEVBQXNDLEtBQXRDLENBQTRDLGVBQTVDLEdBQThELGlCQUE5RDs7QUFFQSxRQUFJLEVBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxPQUFiLE1BQTBCLGdEQUExQixJQUE4RSxFQUFFLFlBQUYsRUFBZ0IsSUFBaEIsQ0FBcUIsSUFBckIsTUFBK0IsR0FBakgsRUFBc0g7QUFDcEgsUUFBRSxNQUFGLEVBQVUsUUFBVixDQUFtQiwwQkFBbkI7QUFDQSxRQUFFLFlBQUYsRUFBZ0IsT0FBaEIsQ0FBd0IsR0FBeEIsRUFBNkIsS0FBN0IsQ0FBbUMsR0FBbkMsRUFBd0MsS0FBeEMsQ0FBOEMsWUFBWTtBQUN4RCxVQUFFLFlBQUYsRUFBZ0IsUUFBaEIsQ0FBeUIsSUFBekIsRUFBK0IsUUFBL0IsQ0FBd0MsV0FBeEMsRUFBcUQsR0FBckQsQ0FBeUQsRUFBRSxTQUFTLE1BQVgsRUFBekQsRUFBNkUsT0FBN0U7QUFDRCxPQUZEO0FBR0QsS0FMRCxNQU1LLElBQUksRUFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLE9BQWIsTUFBMEIsZ0RBQTlCLEVBQWdGO0FBQ25GLFFBQUUsTUFBRixFQUFVLFFBQVYsQ0FBbUIsMEJBQW5CO0FBQ0EsUUFBRSxZQUFGLEVBQWdCLE9BQWhCLENBQXdCLEdBQXhCLEVBQTZCLEtBQTdCLENBQW1DLEdBQW5DLEVBQXdDLEtBQXhDLENBQThDLFlBQVc7QUFDdkQsVUFBRSxTQUFGLEVBQWEsUUFBYixDQUFzQixXQUF0QixFQUFtQyxHQUFuQyxDQUF1QyxFQUFDLFNBQVMsTUFBVixFQUF2QyxFQUEwRCxPQUExRDtBQUNELE9BRkQ7QUFHRCxLQUxJLE1BS0UsSUFBSSxFQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsT0FBYixLQUF5QiwrQ0FBekIsSUFBNEUsRUFBRSxZQUFGLEVBQWdCLElBQWhCLENBQXFCLElBQXJCLE1BQStCLEdBQS9HLEVBQW9IO0FBQ3pILFFBQUUsTUFBRixFQUFVLFFBQVYsQ0FBbUIsMEJBQW5CO0FBQ0EsUUFBRSxZQUFGLEVBQWdCLFFBQWhCLENBQXlCLHNCQUF6QixFQUFpRCxPQUFqRCxDQUF5RCxJQUF6RCxFQUErRCxLQUEvRCxDQUFxRSxHQUFyRSxFQUEwRSxLQUExRSxDQUFnRixZQUFZO0FBQzFGLFVBQUUsWUFBRixFQUFnQixRQUFoQixDQUF5QixJQUF6QixFQUErQixRQUEvQixDQUF3QyxtQkFBeEMsRUFBNkQsR0FBN0QsQ0FBaUUsRUFBRSxTQUFTLE1BQVgsRUFBakUsRUFBc0YsT0FBdEY7QUFDRCxPQUZEO0FBR0QsS0FMTSxNQUtBLElBQUksRUFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLE9BQWIsTUFBMEIsK0NBQTlCLEVBQStFO0FBQ3BGLFFBQUUsTUFBRixFQUFVLFFBQVYsQ0FBbUIsMEJBQW5CO0FBQ0EsUUFBRSxZQUFGLEVBQWdCLFFBQWhCLENBQXlCLHNCQUF6QixFQUFpRCxPQUFqRCxDQUF5RCxJQUF6RCxFQUErRCxLQUEvRCxDQUFxRSxHQUFyRSxFQUEwRSxLQUExRSxDQUFnRixZQUFZO0FBQzFGLFVBQUUsYUFBRixFQUFpQixRQUFqQixDQUEwQixtQkFBMUIsRUFBK0MsR0FBL0MsQ0FBbUQsRUFBRSxTQUFTLE1BQVgsRUFBbkQsRUFBd0UsT0FBeEU7QUFDRCxPQUZEO0FBR0Q7O0FBYUQ7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNELEdBakZELEVBckZXLENBc0tQO0FBQ0wsQ0F2S0QsRSxDQXVLSSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIiQoZnVuY3Rpb24oKSB7XG5cbiAgLy8gcHJldmVudCBzY3JvbGxpbmcgb24gdG91Y2ggZGV2aWNlc1xuICAkKGRvY3VtZW50LmJvZHkpLm9uKCd0b3VjaG1vdmUnLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH0pO1xuXG4gIC8vIG9uIGNsaWNrIG9mIGhhbWJ1cmdlciBtZW51XG4gICQoJy5tb2JpbGVNZW51Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgJCgnLmdyaWQnKS50b2dnbGVDbGFzcygnZ3JpZC0tYWN0aXZlJyk7XG4gICAgJCgnLm1lbnUnKS50b2dnbGVDbGFzcygnbWVudS0tYWN0aXZlJyk7XG4gICAgJCgnLm1lbnVfX2l0ZW0nKS5mYWRlVG9nZ2xlKDMwMCk7XG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IDUwMCkge1xuICAgICAgJCgnLm1vYmlsZU1lbnVfX2JhcnM6bnRoLW9mLXR5cGUoMSknKS50b2dnbGVDbGFzcygndHlwZTFBbmltSW5pdCB0eXBlMUFuaW01MDAnKTtcbiAgICAgICQoJy5tb2JpbGVNZW51X19iYXJzOm50aC1vZi10eXBlKDIpJykudG9nZ2xlQ2xhc3MoJ3R5cGUyQW5pbUluaXQgdHlwZTJBbmltJyk7XG4gICAgICAkKCcubW9iaWxlTWVudV9fYmFyczpudGgtb2YtdHlwZSgzKScpLnRvZ2dsZUNsYXNzKCd0eXBlM0FuaW1Jbml0IHR5cGUzQW5pbTUwMCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKCcubW9iaWxlTWVudV9fYmFyczpudGgtb2YtdHlwZSgxKScpLnRvZ2dsZUNsYXNzKCd0eXBlMUFuaW1Jbml0IHR5cGUxQW5pbScpO1xuICAgICAgJCgnLm1vYmlsZU1lbnVfX2JhcnM6bnRoLW9mLXR5cGUoMiknKS50b2dnbGVDbGFzcygndHlwZTJBbmltSW5pdCB0eXBlMkFuaW0nKTtcbiAgICAgICQoJy5tb2JpbGVNZW51X19iYXJzOm50aC1vZi10eXBlKDMpJykudG9nZ2xlQ2xhc3MoJ3R5cGUzQW5pbUluaXQgdHlwZTNBbmltJyk7XG4gICAgfTtcbiAgfSk7XG5cbiAgLy8gb24gY2xpY2sgb2YgZWFjaCBsZXR0ZXIgaW4gcHJvZmlsZSBncmlkIFxuICAkKCcuZ3JpZF9fY2VsbCAuZ3JpZF9fbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGN1cnJlbnRDZWxsID0gJCgkKHRoaXMpLmF0dHIoJ2hyZWYnKSk7XG4gICAgY29uc3Qgc2xpZGVDb2xvciA9ICQoY3VycmVudENlbGwpLmNoaWxkcmVuKCcuc2xpZGVfX3JpZ2h0JykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJyk7XG4gICAgZG9jdW1lbnQuc3R5bGVTaGVldHNbMl0uY3NzUnVsZXNbMTY3XS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBzbGlkZUNvbG9yO1xuXG4gICAgLy8gYWN0aXZhdGVzIHN3aXBlIGFuaW1hdGlvblxuICAgICQoJ2JvZHknKS5hZGRDbGFzcygnc3dpcGVBbmltYXRpb24gc3dpcGVSdG9MJyk7XG5cbiAgICAvLyBkaXNwbGF5cyBub25lIGV2ZXJ5dGhpbmcgYnV0IGN1cnJlbnQgY2VsbFxuICAgICQoJ2hlYWRlcicpLmFkZENsYXNzKCdhbmltU2hyaW5rWCcpLmZhZGVPdXQoKTtcbiAgICAkKCdmb290ZXInKS5hZGRDbGFzcygnYW5pbVNocmlua1gnKS5mYWRlT3V0KCk7XG4gICAgJCgnLnByb2ZpbGUnKS5hZGRDbGFzcygnYW5pbVNocmlua1gnKS5mYWRlT3V0KCkuZGVsYXkoODAwKS5xdWV1ZShmdW5jdGlvbigpIHtcbiAgICAgICQoY3VycmVudENlbGwpLmFkZENsYXNzKCdhbmltR3Jvd1gnKS5jc3Moe2Rpc3BsYXk6ICdmbGV4J30pLmRlcXVldWUoKTtcbiAgICB9KTtcbiAgICBcbiAgICAvLyByZW1vdmUgY2xhc3NlcyBvbiBhbmltYXRpb24gZW5kXG4gICAgJCgnYm9keScpLm9uKCdhbmltYXRpb25lbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkKCdib2R5JykuZGVsYXkoMTAwKS5xdWV1ZShmdW5jdGlvbigpIHtcbiAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCkuZGVxdWV1ZSgpO1xuICAgICAgICAkKCdoZWFkZXInKS5yZW1vdmVDbGFzcygpO1xuICAgICAgICAkKCdmb290ZXInKS5yZW1vdmVDbGFzcygpO1xuICAgICAgICAkKCcucHJvZmlsZScpLnJlbW92ZUNsYXNzKCdhbmltU2hyaW5rWCcpO1xuICAgICAgICAkKGN1cnJlbnRDZWxsKS5yZW1vdmVDbGFzcygnYW5pbUdyb3dYJyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7IC8vIGVuZCBmdW5jdGlvbiBvbkNsaWNrIG9mIGVhY2ggbGV0dGVyIGluIHByb2ZpbGVcblxuXG4gIC8vIG9uIGNsaWNrIG9mIGNlbnRlciBzcXVhcmVcbiAgJCgnLmN0cmxfX2Rlc2t0b3AtLWNlbnRlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHRoaXNTbGlkZSA9ICQodGhpcykucGFyZW50cygnZGl2JykuZXEoMyk7XG4gICAgXG4gICAgLy8gYWN0aXZhdGVzIGFuaW1hdGlvblxuICAgICQoJ2JvZHknKS5hZGRDbGFzcygnc3dpcGVVcEFuaW1hdGlvbiBzd2lwZVVwJyk7XG5cbiAgICAvLyByZS1kaXNwbGF5cyBncmlkLCBoZWFkZXIsIGFuZCBmb290ZXJcbiAgICAkKHRoaXNTbGlkZSkuYWRkQ2xhc3MoJ2FuaW1TaHJpbmtEb3duJykuZmFkZU91dCgpLmRlbGF5KDEwMDApLnF1ZXVlKGZ1bmN0aW9uKCkge1xuICAgICAgJCh0aGlzU2xpZGUpLnJlbW92ZUNsYXNzKCdhbmltU2hyaW5rRG93bicpLmRlcXVldWUoKTtcbiAgICAgICQoJ2hlYWRlcicpLmNzcyh7ZGlzcGxheTogJ2Jsb2NrJ30pO1xuICAgICAgJCgnZm9vdGVyJykuY3NzKHtkaXNwbGF5OiAnYmxvY2snfSk7XG4gICAgICAkKCcucHJvZmlsZScpLmNzcyh7ZGlzcGxheTogJ2Jsb2NrJ30pO1xuICAgIH0pO1xuXG4gICAgLy8gY2xlYXJzIGFsbCBhbmltYXRpb25zIG9uIHNsaWRlc1xuICAgICQoJy5zbGlkZScpLnJlbW92ZUNsYXNzKCdhbmltR3Jvd1gnKTtcblxuICAgIC8vIHJlLWRpc3BsYXlzIHByb2ZpbGVcblxuICB9KTsgLy8gZW5kIGZ1bmN0aW9uIG9uQ2xpY2sgb2YgY2VudGVyIHNxdWFyZVxuXG5cblxuXG5cblxuXG5cbiAgXG5cbiAgLy8gb24gY2xpY2sgb2YgYXJyb3dzXG4gICQoJy5jdHJsX19kZXNrdG9wLS1hcnJvd3MnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBjdXJyZW50U2xpZGUgPSAkKHRoaXMpLnBhcmVudHMoJ2RpdicpLmVxKDMpO1xuICAgIGNvbnN0IHByZXZpb3VzU2xpZGUgPSAkKGN1cnJlbnRTbGlkZSkucHJldignLnNsaWRlJyk7XG4gICAgY29uc3QgbmV4dFNsaWRlID0gJChjdXJyZW50U2xpZGUpLm5leHQoJy5zbGlkZScpO1xuXG4gICAgY29uc3QgY3VycmVudFNsaWRlQ29sb3IgPSAkKGN1cnJlbnRTbGlkZSkuY2hpbGRyZW4oJy5zbGlkZV9fcmlnaHQnKS5jc3MoJ2JhY2tncm91bmQtY29sb3InKTtcbiAgICBkb2N1bWVudC5zdHlsZVNoZWV0c1syXS5jc3NSdWxlc1sxNjddLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGN1cnJlbnRTbGlkZUNvbG9yO1xuXG4gICAgaWYgKCQodGhpcykuYXR0cignY2xhc3MnKSA9PT0gJ2J0biBjdHJsX19kZXNrdG9wLS1hcnJvd3MgY3RybF9fZGVza3RvcC0tcmlnaHQnICYmICQoY3VycmVudFNsaWRlKS5hdHRyKCdpZCcpID09PSAnWicpIHtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnc3dpcGVBbmltYXRpb24gc3dpcGVSdG9MJyk7XG4gICAgICAkKGN1cnJlbnRTbGlkZSkuZmFkZU91dCg5MDApLmRlbGF5KDI1MCkucXVldWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAkKGN1cnJlbnRTbGlkZSkuc2libGluZ3MoJyNBJykuYWRkQ2xhc3MoJ2FuaW1Hcm93WCcpLmNzcyh7IGRpc3BsYXk6ICdmbGV4J30pLmRlcXVldWUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ2NsYXNzJykgPT09ICdidG4gY3RybF9fZGVza3RvcC0tYXJyb3dzIGN0cmxfX2Rlc2t0b3AtLXJpZ2h0Jykge1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdzd2lwZUFuaW1hdGlvbiBzd2lwZVJ0b0wnKTtcbiAgICAgICQoY3VycmVudFNsaWRlKS5mYWRlT3V0KDkwMCkuZGVsYXkoMjUwKS5xdWV1ZShmdW5jdGlvbigpIHtcbiAgICAgICAgJChuZXh0U2xpZGUpLmFkZENsYXNzKCdhbmltR3Jvd1gnKS5jc3Moe2Rpc3BsYXk6ICdmbGV4J30pLmRlcXVldWUoKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCdjbGFzcycpID09ICdidG4gY3RybF9fZGVza3RvcC0tYXJyb3dzIGN0cmxfX2Rlc2t0b3AtLWxlZnQnICYmICQoY3VycmVudFNsaWRlKS5hdHRyKCdpZCcpID09PSAnQScpIHtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnc3dpcGVBbmltYXRpb24gc3dpcGVMdG9SJyk7XG4gICAgICAkKGN1cnJlbnRTbGlkZSkuYWRkQ2xhc3MoJ2FuaW1TaHJpbmtYRnJvbVJpZ2h0JykuZmFkZU91dCgxMDAwKS5kZWxheSgyNTApLnF1ZXVlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChjdXJyZW50U2xpZGUpLnNpYmxpbmdzKCcjWicpLmFkZENsYXNzKCdhbmltR3Jvd1hGcm9tTGVmdCcpLmNzcyh7IGRpc3BsYXk6ICdmbGV4JyB9KS5kZXF1ZXVlKCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKCQodGhpcykuYXR0cignY2xhc3MnKSA9PT0gJ2J0biBjdHJsX19kZXNrdG9wLS1hcnJvd3MgY3RybF9fZGVza3RvcC0tbGVmdCcpIHtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnc3dpcGVBbmltYXRpb24gc3dpcGVMdG9SJyk7XG4gICAgICAkKGN1cnJlbnRTbGlkZSkuYWRkQ2xhc3MoJ2FuaW1TaHJpbmtYRnJvbVJpZ2h0JykuZmFkZU91dCgxMDAwKS5kZWxheSgzMDApLnF1ZXVlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChwcmV2aW91c1NsaWRlKS5hZGRDbGFzcygnYW5pbUdyb3dYRnJvbUxlZnQnKS5jc3MoeyBkaXNwbGF5OiAnZmxleCcgfSkuZGVxdWV1ZSgpO1xuICAgICAgfSk7XG4gICAgfVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICAgIC8vIGhpZGUgY3VycmVudCBzbGlkZVxuXG5cbiAgICAvLyByZXZlYWwgY29ycmVjdCBwcmV2aW91cyBzbGlkZSBhbmQgcnVuIGFuaW1hdGlvbiB3aXRoIGNvcnJlY3QgY29sb3JcbiAgICAvLyBpZiBzbGlkZSBpcyB0aGUgZmlyc3Qgc2xpZGUsIGZpbmQgdGhlIGxhc3QgbGV0dGVyIGFuZCBkaXNwbGF5IGxhc3Qgc2xpZGVcbiAgICAvLyBpZiAoJCh0aGlzKS5hdHRyKCdjbGFzcycpID09ICdidG4gY3RybF9fZGVza3RvcC0tYXJyb3dzIGN0cmxfX2Rlc2t0b3AtLWxlZnQnICYmICQoY3VycmVudFNsaWRlKS5hdHRyKCdpZCcpID09PSAnQScpIHtcbiAgICAvLyAgIGNvbnN0IGRpcmVjdGlvblogPSAkKGN1cnJlbnRTbGlkZSkuc2libGluZ3MoJyNaJykuY2hpbGRyZW4oJy5zbGlkZV9fcmlnaHQnKS5jc3MoJ2JhY2tncm91bmQtY29sb3InKTtcbiAgICAvLyAgIGFsdGVyQ29sb3IoZGlyZWN0aW9uWik7XG4gICAgLy8gICAkKGN1cnJlbnRTbGlkZSkuc2libGluZ3MoJyNaJykuY3NzKHtcbiAgICAvLyAgICAgZGlzcGxheTogJ2ZsZXgnXG4gICAgLy8gICB9KS5hZGRDbGFzcygnZmFkZUluQW5pbWF0aW9uJyk7XG4gICAgLy8gICAkKCdib2R5JykuYWRkQ2xhc3MoJ3N3aXBlQW5pbWF0aW9uIHN3aXBlTHRvUicpO1xuICAgIC8vIH0gXG4gICAgLy8gLy8gYW55IG90aGVyIGJhY2sgYXJyb3cgY2xpY2ssIGRpc3BsYXkgdGhlIHByZXZpb3VzIHNsaWRlXG4gICAgLy8gZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCdjbGFzcycpID09PSAnYnRuIGN0cmxfX2Rlc2t0b3AtLWFycm93cyBjdHJsX19kZXNrdG9wLS1sZWZ0Jykge1xuICAgIC8vICAgYWx0ZXJDb2xvcihwcmV2U2xpZGVDb2xvcik7XG4gICAgLy8gICAkKHByZXZpb3VzU2xpZGUpLmNzcyh7XG4gICAgLy8gICAgIGRpc3BsYXk6ICdmbGV4J1xuICAgIC8vICAgfSkuYWRkQ2xhc3MoJ2ZhZGVJbkFuaW1hdGlvbicpO1xuICAgIC8vICAgJCgnYm9keScpLmFkZENsYXNzKCdzd2lwZUFuaW1hdGlvbiBzd2lwZUx0b1InKTtcbiAgICAvLyB9IFxuICAgIC8vIHJldmVhbCBjb3JyZWN0IG5leHQgc2xpZGUgYW5kIHJ1biBhbmltYXRpb24gd2l0aCBjb3JyZWN0IGNvbG9yXG4gICAgLy8gaWYgc2xpZGUgaXMgdGhlIGxhc3Qgc2xpZGUsIGdvIGJhY2sgdG8gdGhlIGJlZ2lubmluZyBhbmQgZGlzcGxheSBmaXJzdCBzbGlkZVxuICAgIC8vIGVsc2UgaWYgKCQodGhpcykuYXR0cignY2xhc3MnKSA9PT0gJ2J0biBjdHJsX19kZXNrdG9wLS1hcnJvd3MgY3RybF9fZGVza3RvcC0tcmlnaHQnICYmICQoY3VycmVudFNsaWRlKS5hdHRyKCdpZCcpID09PSAnWicpIHtcbiAgICAvLyAgIGNvbnN0IGRpcmVjdGlvbkEgPSAkKGN1cnJlbnRTbGlkZSkuc2libGluZ3MoJyNBJykuY2hpbGRyZW4oJy5zbGlkZV9fcmlnaHQnKS5jc3MoJ2JhY2tncm91bmQtY29sb3InKTtcbiAgICAvLyAgIGFsdGVyQ29sb3IoZGlyZWN0aW9uQSk7XG4gICAgLy8gICAkKGN1cnJlbnRTbGlkZSkuc2libGluZ3MoJyNBJykuY3NzKHtcbiAgICAvLyAgICAgZGlzcGxheTogJ2ZsZXgnXG4gICAgLy8gICB9KS5hZGRDbGFzcygnZmFkZUluQW5pbWF0aW9uJyk7XG4gICAgLy8gICAkKCdib2R5JykuYWRkQ2xhc3MoJ3N3aXBlQW5pbWF0aW9uIHN3aXBlUnRvTCcpO1xuICAgIC8vIH0gXG4gICAgLy8gLy8gYW55IG90aGVyIGZvcndhcmQgYXJyb3cgY2xpY2ssIGRpc3BsYXkgdGhlIG5leHQgc2xpZGVcbiAgICAvLyBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ2NsYXNzJykgPT09ICdidG4gY3RybF9fZGVza3RvcC0tYXJyb3dzIGN0cmxfX2Rlc2t0b3AtLXJpZ2h0Jykge1xuICAgIC8vICAgYWx0ZXJDb2xvcihuZXh0U2xpZGVDb2xvcik7XG4gICAgLy8gICAkKG5leHRTbGlkZSkuY3NzKHtcbiAgICAvLyAgICAgZGlzcGxheTogJ2ZsZXgnXG4gICAgLy8gICB9KS5hZGRDbGFzcygnZmFkZUluQW5pbWF0aW9uJyk7XG4gICAgLy8gICAkKCdib2R5JykuYWRkQ2xhc3MoJ3N3aXBlQW5pbWF0aW9uIHN3aXBlUnRvTCcpO1xuICAgIC8vIH07XG4gIH0pOyAvLyBlbmQgZnVuY3Rpb24gb25DbGljayBvZiBhcnJvd3Ncbn0pOyAvLyBlbmQgZG9jIHJlYWR5XG5cblxuIl19
