(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

$(function () {
  // = = = = = = = = = = = = = = = = = = = =
  // PROFILE EVENTS
  // = = = = = = = = = = = = = = = = = = = =
  // prevent scrolling on touch devices
  $(document.body).on('touchmove', function (e) {
    e.preventDefault();
    e.stopPropagation();
  }); // end function to prevent scrolling

  // on click of hamburger menu
  $('.mobileMenu').on('click', function () {
    $('.grid').toggleClass('grid--active');
    $('.portfolio__container').toggleClass('portfolio__container portfolio__container--active');
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
  $('.grid__cell .grid__link').on('click', function () {
    var currentCell = $($(this).attr('href'));
    var slideColor = $(currentCell).children('.slide__right').css('background-color');
    document.styleSheets[2].cssRules[194].style.backgroundColor = slideColor;

    // console.log(document.styleSheets);

    // activates swipe animation
    $('body').addClass('swipeAnimation swipeRtoL');

    // displays:none everything but current cell
    $('header').addClass('animShrinkX').fadeOut();
    $('footer').addClass('animShrinkX').fadeOut();
    $('.profile').addClass('animShrinkX').fadeOut().delay(800).queue(function () {
      $(currentCell).addClass('animGrowX').css({ display: 'flex' }).dequeue();
    });

    // remove classes on animation end
    $('body').on('animationend', function () {
      $('body').delay(100).queue(function () {
        $('body').removeClass('swipeAnimation swipeRtoL swipeLtoR').dequeue();
        $('header').removeClass();
        $('footer').removeClass();
        $('.profile').removeClass('animShrinkX');
        $(currentCell).removeClass('animGrowX');
      });
    });
  }); // end function onClick of each letter in profile


  // on click of center square
  $('.ctrl__desktop--center').on('click', function (e) {
    var thisSlide = $(this).parents('div').eq(3);

    e.preventDefault();

    $(thisSlide).addClass('animShrinkUp');

    // activates animation
    $('body').addClass('swipeUpAnimation swipeUp').on('animationend', function () {
      $('body').delay(450).queue(function () {
        $('body').removeClass();
      });
    });

    setTimeout(function () {
      window.location.href = "index.html";
    }, 1870);
  }); // end function onClick of center square


  // on click of arrows
  $('.ctrl__desktop--arrows').on('click', function () {
    var currentSlide = $(this).parents('div').eq(3);
    var previousSlide = $(currentSlide).prev('.slide');
    var nextSlide = $(currentSlide).next('.slide');

    var currentSlideColor = $(currentSlide).children('.slide__right').css('background-color');
    document.styleSheets[2].cssRules[194].style.backgroundColor = currentSlideColor;

    $('.slide').removeClass().addClass('slide');

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


  // = = = = = = = = = = = = = = = = = = = =
  // PORTFOLIO EVENTS
  // = = = = = = = = = = = = = = = = = = = =
  // $('.menu__link').on('click', function(e) {
  //   e.preventDefault();

  //   const _href = $(this).attr('href');

  //   history.pushState(null, null, _href);

  //   loadContent(_href);
  // });

  // function loadContent(href) {
  //   $('main').find('.mainContent').fadeOut(200, function() {
  //     $('main').hide().load(href + ' .mainContent', function() {
  //       $('main').fadeIn(200);
  //     });
  //   });
  // };

  // $(window).bind('popstate', function() {
  //   const _href = location.pathname.replace(/^.*[\\\/]/, '');
  //   loadContent(_href);
  // });


  $('.portfolio__container').flickity({
    wrapAround: true,
    arrowShape: {
      x0: 10,
      x1: 60, y1: 50,
      x2: 65, y2: 50,
      x3: 15
    }
  });
}); // end doc ready

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxFQUFFLFlBQVc7QUFDYjtBQUNBO0FBQ0E7QUFDRTtBQUNBLElBQUUsU0FBUyxJQUFYLEVBQWlCLEVBQWpCLENBQW9CLFdBQXBCLEVBQWlDLFVBQVMsQ0FBVCxFQUFZO0FBQzNDLE1BQUUsY0FBRjtBQUNBLE1BQUUsZUFBRjtBQUNELEdBSEQsRUFMVyxDQVFQOztBQUVKO0FBQ0EsSUFBRSxhQUFGLEVBQWlCLEVBQWpCLENBQW9CLE9BQXBCLEVBQTZCLFlBQVc7QUFDdEMsTUFBRSxPQUFGLEVBQVcsV0FBWCxDQUF1QixjQUF2QjtBQUNBLE1BQUUsdUJBQUYsRUFBMkIsV0FBM0IsQ0FBdUMsbURBQXZDO0FBQ0EsTUFBRSxPQUFGLEVBQVcsV0FBWCxDQUF1QixjQUF2QjtBQUNBLE1BQUUsYUFBRixFQUFpQixVQUFqQixDQUE0QixHQUE1QjtBQUNBLFFBQUksRUFBRSxNQUFGLEVBQVUsS0FBVixNQUFxQixHQUF6QixFQUE4QjtBQUM1QixRQUFFLGtDQUFGLEVBQXNDLFdBQXRDLENBQWtELDRCQUFsRDtBQUNBLFFBQUUsa0NBQUYsRUFBc0MsV0FBdEMsQ0FBa0QseUJBQWxEO0FBQ0EsUUFBRSxrQ0FBRixFQUFzQyxXQUF0QyxDQUFrRCw0QkFBbEQ7QUFDRCxLQUpELE1BSU87QUFDTCxRQUFFLGtDQUFGLEVBQXNDLFdBQXRDLENBQWtELHlCQUFsRDtBQUNBLFFBQUUsa0NBQUYsRUFBc0MsV0FBdEMsQ0FBa0QseUJBQWxEO0FBQ0EsUUFBRSxrQ0FBRixFQUFzQyxXQUF0QyxDQUFrRCx5QkFBbEQ7QUFDRDtBQUNGLEdBZEQsRUFYVyxDQXlCUDs7QUFFSjtBQUNBLElBQUUseUJBQUYsRUFBNkIsRUFBN0IsQ0FBZ0MsT0FBaEMsRUFBeUMsWUFBVztBQUNsRCxRQUFNLGNBQWMsRUFBRSxFQUFFLElB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Q0FBeUQsSUFBekQsRUFBK0QsS0FBL0QsQ0FBcUUsR0FBckUsRUFBMEUsS0FBMUUsQ0FBZ0YsWUFBWTtBQUMxRixVQUFFLFlBQUYsRUFBZ0IsUUFBaEIsQ0FBeUIsSUFBekIsRUFBK0IsUUFBL0IsQ0FBd0MsbUJBQXhDLEVBQTZELEdBQTdELENBQWlFLEVBQUUsU0FBUyxNQUFYLEVBQWpFLEVBQXNGLE9BQXRGO0FBQ0QsT0FGRDtBQUdELEtBTE0sTUFLQSxJQUFJLEVBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxPQUFiLE1BQTBCLCtDQUE5QixFQUErRTtBQUNwRixRQUFFLE1BQUYsRUFBVSxRQUFWLENBQW1CLDBCQUFuQjtBQUNBLFFBQUUsWUFBRixFQUFnQixRQUFoQixDQUF5QixzQkFBekIsRUFBaUQsT0FBakQsQ0FBeUQsSUFBekQsRUFBK0QsS0FBL0QsQ0FBcUUsR0FBckUsRUFBMEUsS0FBMUUsQ0FBZ0YsWUFBWTtBQUMxRixVQUFFLGFBQUYsRUFBaUIsUUFBakIsQ0FBMEIsbUJBQTFCLEVBQStDLEdBQS9DLENBQW1ELEVBQUUsU0FBUyxNQUFYLEVBQW5ELEVBQXdFLE9BQXhFO0FBQ0QsT0FGRDtBQUdEO0FBQ0YsR0FoQ0QsRUFqRlcsQ0FpSFA7OztBQUdOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBS0EsSUFBRSx1QkFBRixFQUEyQixRQUEzQixDQUFvQztBQUNsQyxnQkFBWSxJQURzQjtBQUVsQyxnQkFBWTtBQUNWLFVBQUksRUFETTtBQUVWLFVBQUksRUFGTSxFQUVGLElBQUksRUFGRjtBQUdWLFVBQUksRUFITSxFQUdGLElBQUksRUFIRjtBQUlWLFVBQUk7QUFKTTtBQUZzQixHQUFwQztBQWNDLENBL0pELEUsQ0ErSkkiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIkKGZ1bmN0aW9uKCkge1xuLy8gPSA9ID0gPSA9ID0gPSA9ID0gPSA9ID0gPSA9ID0gPSA9ID0gPSA9XG4vLyBQUk9GSUxFIEVWRU5UU1xuLy8gPSA9ID0gPSA9ID0gPSA9ID0gPSA9ID0gPSA9ID0gPSA9ID0gPSA9XG4gIC8vIHByZXZlbnQgc2Nyb2xsaW5nIG9uIHRvdWNoIGRldmljZXNcbiAgJChkb2N1bWVudC5ib2R5KS5vbigndG91Y2htb3ZlJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9KTsgLy8gZW5kIGZ1bmN0aW9uIHRvIHByZXZlbnQgc2Nyb2xsaW5nXG5cbiAgLy8gb24gY2xpY2sgb2YgaGFtYnVyZ2VyIG1lbnVcbiAgJCgnLm1vYmlsZU1lbnUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAkKCcuZ3JpZCcpLnRvZ2dsZUNsYXNzKCdncmlkLS1hY3RpdmUnKTtcbiAgICAkKCcucG9ydGZvbGlvX19jb250YWluZXInKS50b2dnbGVDbGFzcygncG9ydGZvbGlvX19jb250YWluZXIgcG9ydGZvbGlvX19jb250YWluZXItLWFjdGl2ZScpO1xuICAgICQoJy5tZW51JykudG9nZ2xlQ2xhc3MoJ21lbnUtLWFjdGl2ZScpO1xuICAgICQoJy5tZW51X19pdGVtJykuZmFkZVRvZ2dsZSgzMDApO1xuICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8PSA1MDApIHtcbiAgICAgICQoJy5tb2JpbGVNZW51X19iYXJzOm50aC1vZi10eXBlKDEpJykudG9nZ2xlQ2xhc3MoJ3R5cGUxQW5pbUluaXQgdHlwZTFBbmltNTAwJyk7XG4gICAgICAkKCcubW9iaWxlTWVudV9fYmFyczpudGgtb2YtdHlwZSgyKScpLnRvZ2dsZUNsYXNzKCd0eXBlMkFuaW1Jbml0IHR5cGUyQW5pbScpO1xuICAgICAgJCgnLm1vYmlsZU1lbnVfX2JhcnM6bnRoLW9mLXR5cGUoMyknKS50b2dnbGVDbGFzcygndHlwZTNBbmltSW5pdCB0eXBlM0FuaW01MDAnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLm1vYmlsZU1lbnVfX2JhcnM6bnRoLW9mLXR5cGUoMSknKS50b2dnbGVDbGFzcygndHlwZTFBbmltSW5pdCB0eXBlMUFuaW0nKTtcbiAgICAgICQoJy5tb2JpbGVNZW51X19iYXJzOm50aC1vZi10eXBlKDIpJykudG9nZ2xlQ2xhc3MoJ3R5cGUyQW5pbUluaXQgdHlwZTJBbmltJyk7XG4gICAgICAkKCcubW9iaWxlTWVudV9fYmFyczpudGgtb2YtdHlwZSgzKScpLnRvZ2dsZUNsYXNzKCd0eXBlM0FuaW1Jbml0IHR5cGUzQW5pbScpO1xuICAgIH07XG4gIH0pOyAvLyBlbmQgZnVuY3Rpb24gb25DbGljayBvZiBoYW1idXJnZXIgbWVudVxuXG4gIC8vIG9uIGNsaWNrIG9mIGVhY2ggbGV0dGVyIGluIHByb2ZpbGUgZ3JpZCBcbiAgJCgnLmdyaWRfX2NlbGwgLmdyaWRfX2xpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBjdXJyZW50Q2VsbCA9ICQoJCh0aGlzKS5hdHRyKCdocmVmJykpO1xuICAgIGNvbnN0IHNsaWRlQ29sb3IgPSAkKGN1cnJlbnRDZWxsKS5jaGlsZHJlbignLnNsaWRlX19yaWdodCcpLmNzcygnYmFja2dyb3VuZC1jb2xvcicpO1xuICAgIGRvY3VtZW50LnN0eWxlU2hlZXRzWzJdLmNzc1J1bGVzWzE5NF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gc2xpZGVDb2xvcjtcblxuICAgIC8vIGNvbnNvbGUubG9nKGRvY3VtZW50LnN0eWxlU2hlZXRzKTtcblxuICAgIC8vIGFjdGl2YXRlcyBzd2lwZSBhbmltYXRpb25cbiAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ3N3aXBlQW5pbWF0aW9uIHN3aXBlUnRvTCcpO1xuXG4gICAgLy8gZGlzcGxheXM6bm9uZSBldmVyeXRoaW5nIGJ1dCBjdXJyZW50IGNlbGxcbiAgICAkKCdoZWFkZXInKS5hZGRDbGFzcygnYW5pbVNocmlua1gnKS5mYWRlT3V0KCk7XG4gICAgJCgnZm9vdGVyJykuYWRkQ2xhc3MoJ2FuaW1TaHJpbmtYJykuZmFkZU91dCgpO1xuICAgICQoJy5wcm9maWxlJykuYWRkQ2xhc3MoJ2FuaW1TaHJpbmtYJykuZmFkZU91dCgpLmRlbGF5KDgwMCkucXVldWUoZnVuY3Rpb24oKSB7XG4gICAgICAkKGN1cnJlbnRDZWxsKS5hZGRDbGFzcygnYW5pbUdyb3dYJykuY3NzKHtkaXNwbGF5OiAnZmxleCd9KS5kZXF1ZXVlKCk7XG4gICAgfSk7XG4gICAgXG4gICAgLy8gcmVtb3ZlIGNsYXNzZXMgb24gYW5pbWF0aW9uIGVuZFxuICAgICQoJ2JvZHknKS5vbignYW5pbWF0aW9uZW5kJywgZnVuY3Rpb24oKSB7XG4gICAgICAkKCdib2R5JykuZGVsYXkoMTAwKS5xdWV1ZShmdW5jdGlvbigpIHtcbiAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdzd2lwZUFuaW1hdGlvbiBzd2lwZVJ0b0wgc3dpcGVMdG9SJykuZGVxdWV1ZSgpO1xuICAgICAgICAkKCdoZWFkZXInKS5yZW1vdmVDbGFzcygpO1xuICAgICAgICAkKCdmb290ZXInKS5yZW1vdmVDbGFzcygpO1xuICAgICAgICAkKCcucHJvZmlsZScpLnJlbW92ZUNsYXNzKCdhbmltU2hyaW5rWCcpO1xuICAgICAgICAkKGN1cnJlbnRDZWxsKS5yZW1vdmVDbGFzcygnYW5pbUdyb3dYJyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7IC8vIGVuZCBmdW5jdGlvbiBvbkNsaWNrIG9mIGVhY2ggbGV0dGVyIGluIHByb2ZpbGVcblxuXG4gIC8vIG9uIGNsaWNrIG9mIGNlbnRlciBzcXVhcmVcbiAgJCgnLmN0cmxfX2Rlc2t0b3AtLWNlbnRlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBjb25zdCB0aGlzU2xpZGUgPSAkKHRoaXMpLnBhcmVudHMoJ2RpdicpLmVxKDMpO1xuICAgIFxuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICQodGhpc1NsaWRlKS5hZGRDbGFzcygnYW5pbVNocmlua1VwJyk7XG4gICAgXG4gICAgLy8gYWN0aXZhdGVzIGFuaW1hdGlvblxuICAgICQoJ2JvZHknKS5hZGRDbGFzcygnc3dpcGVVcEFuaW1hdGlvbiBzd2lwZVVwJykub24oJ2FuaW1hdGlvbmVuZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgJCgnYm9keScpLmRlbGF5KDQ1MCkucXVldWUoZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImluZGV4Lmh0bWxcIjtcbiAgICB9LCAxODcwKTtcblxuICB9KTsgLy8gZW5kIGZ1bmN0aW9uIG9uQ2xpY2sgb2YgY2VudGVyIHNxdWFyZVxuICBcblxuICAvLyBvbiBjbGljayBvZiBhcnJvd3NcbiAgJCgnLmN0cmxfX2Rlc2t0b3AtLWFycm93cycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGN1cnJlbnRTbGlkZSA9ICQodGhpcykucGFyZW50cygnZGl2JykuZXEoMyk7XG4gICAgY29uc3QgcHJldmlvdXNTbGlkZSA9ICQoY3VycmVudFNsaWRlKS5wcmV2KCcuc2xpZGUnKTtcbiAgICBjb25zdCBuZXh0U2xpZGUgPSAkKGN1cnJlbnRTbGlkZSkubmV4dCgnLnNsaWRlJyk7XG5cbiAgICBjb25zdCBjdXJyZW50U2xpZGVDb2xvciA9ICQoY3VycmVudFNsaWRlKS5jaGlsZHJlbignLnNsaWRlX19yaWdodCcpLmNzcygnYmFja2dyb3VuZC1jb2xvcicpO1xuICAgIGRvY3VtZW50LnN0eWxlU2hlZXRzWzJdLmNzc1J1bGVzWzE5NF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY3VycmVudFNsaWRlQ29sb3I7XG5cbiAgICAkKCcuc2xpZGUnKS5yZW1vdmVDbGFzcygpLmFkZENsYXNzKCdzbGlkZScpO1xuXG4gICAgaWYgKCQodGhpcykuYXR0cignY2xhc3MnKSA9PT0gJ2J0biBjdHJsX19kZXNrdG9wLS1hcnJvd3MgY3RybF9fZGVza3RvcC0tcmlnaHQnICYmICQoY3VycmVudFNsaWRlKS5hdHRyKCdpZCcpID09PSAnWicpIHtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnc3dpcGVBbmltYXRpb24gc3dpcGVSdG9MJyk7XG4gICAgICAkKGN1cnJlbnRTbGlkZSkuZmFkZU91dCg5MDApLmRlbGF5KDI1MCkucXVldWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAkKGN1cnJlbnRTbGlkZSkuc2libGluZ3MoJyNBJykuYWRkQ2xhc3MoJ2FuaW1Hcm93WCcpLmNzcyh7IGRpc3BsYXk6ICdmbGV4J30pLmRlcXVldWUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ2NsYXNzJykgPT09ICdidG4gY3RybF9fZGVza3RvcC0tYXJyb3dzIGN0cmxfX2Rlc2t0b3AtLXJpZ2h0Jykge1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdzd2lwZUFuaW1hdGlvbiBzd2lwZVJ0b0wnKTtcbiAgICAgICQoY3VycmVudFNsaWRlKS5mYWRlT3V0KDkwMCkuZGVsYXkoMjUwKS5xdWV1ZShmdW5jdGlvbigpIHtcbiAgICAgICAgJChuZXh0U2xpZGUpLmFkZENsYXNzKCdhbmltR3Jvd1gnKS5jc3Moe2Rpc3BsYXk6ICdmbGV4J30pLmRlcXVldWUoKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCdjbGFzcycpID09ICdidG4gY3RybF9fZGVza3RvcC0tYXJyb3dzIGN0cmxfX2Rlc2t0b3AtLWxlZnQnICYmICQoY3VycmVudFNsaWRlKS5hdHRyKCdpZCcpID09PSAnQScpIHtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnc3dpcGVBbmltYXRpb24gc3dpcGVMdG9SJyk7XG4gICAgICAkKGN1cnJlbnRTbGlkZSkuYWRkQ2xhc3MoJ2FuaW1TaHJpbmtYRnJvbVJpZ2h0JykuZmFkZU91dCgxMDAwKS5kZWxheSgzMDApLnF1ZXVlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChjdXJyZW50U2xpZGUpLnNpYmxpbmdzKCcjWicpLmFkZENsYXNzKCdhbmltR3Jvd1hGcm9tTGVmdCcpLmNzcyh7IGRpc3BsYXk6ICdmbGV4JyB9KS5kZXF1ZXVlKCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKCQodGhpcykuYXR0cignY2xhc3MnKSA9PT0gJ2J0biBjdHJsX19kZXNrdG9wLS1hcnJvd3MgY3RybF9fZGVza3RvcC0tbGVmdCcpIHtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnc3dpcGVBbmltYXRpb24gc3dpcGVMdG9SJyk7XG4gICAgICAkKGN1cnJlbnRTbGlkZSkuYWRkQ2xhc3MoJ2FuaW1TaHJpbmtYRnJvbVJpZ2h0JykuZmFkZU91dCgxMDAwKS5kZWxheSgzMDApLnF1ZXVlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChwcmV2aW91c1NsaWRlKS5hZGRDbGFzcygnYW5pbUdyb3dYRnJvbUxlZnQnKS5jc3MoeyBkaXNwbGF5OiAnZmxleCcgfSkuZGVxdWV1ZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTsgLy8gZW5kIGZ1bmN0aW9uIG9uQ2xpY2sgb2YgYXJyb3dzXG5cblxuLy8gPSA9ID0gPSA9ID0gPSA9ID0gPSA9ID0gPSA9ID0gPSA9ID0gPSA9XG4vLyBQT1JURk9MSU8gRVZFTlRTXG4vLyA9ID0gPSA9ID0gPSA9ID0gPSA9ID0gPSA9ID0gPSA9ID0gPSA9ID1cbi8vICQoJy5tZW51X19saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuLy8gICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbi8vICAgY29uc3QgX2hyZWYgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcblxuLy8gICBoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCBfaHJlZik7XG5cbi8vICAgbG9hZENvbnRlbnQoX2hyZWYpO1xuLy8gfSk7XG5cbi8vIGZ1bmN0aW9uIGxvYWRDb250ZW50KGhyZWYpIHtcbi8vICAgJCgnbWFpbicpLmZpbmQoJy5tYWluQ29udGVudCcpLmZhZGVPdXQoMjAwLCBmdW5jdGlvbigpIHtcbi8vICAgICAkKCdtYWluJykuaGlkZSgpLmxvYWQoaHJlZiArICcgLm1haW5Db250ZW50JywgZnVuY3Rpb24oKSB7XG4vLyAgICAgICAkKCdtYWluJykuZmFkZUluKDIwMCk7XG4vLyAgICAgfSk7XG4vLyAgIH0pO1xuLy8gfTtcblxuLy8gJCh3aW5kb3cpLmJpbmQoJ3BvcHN0YXRlJywgZnVuY3Rpb24oKSB7XG4vLyAgIGNvbnN0IF9ocmVmID0gbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuLy8gICBsb2FkQ29udGVudChfaHJlZik7XG4vLyB9KTtcblxuXG5cblxuJCgnLnBvcnRmb2xpb19fY29udGFpbmVyJykuZmxpY2tpdHkoe1xuICB3cmFwQXJvdW5kOiB0cnVlLFxuICBhcnJvd1NoYXBlOiB7XG4gICAgeDA6IDEwLFxuICAgIHgxOiA2MCwgeTE6IDUwLFxuICAgIHgyOiA2NSwgeTI6IDUwLFxuICAgIHgzOiAxNVxuICB9XG59KTtcblxuXG5cblxuXG59KTsgLy8gZW5kIGRvYyByZWFkeVxuIl19
