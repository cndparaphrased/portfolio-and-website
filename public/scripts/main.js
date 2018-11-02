(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

$(function () {

  // prevent scrolling on touch devices
  $(document.body).on('touchmove', function (e) {
    e.preventDefault();
    e.stopPropagation();
  }); // end function to prevent scrolling

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
  }); // end function onClick of hamburger menu

  // on click of each letter in profile grid 
  $('.grid__cell .grid__link').on('click', function () {
    var currentCell = $($(this).attr('href'));
    var slideColor = $(currentCell).children('.slide__right').css('background-color');
    document.styleSheets[2].cssRules[167].style.backgroundColor = slideColor;

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
    document.styleSheets[2].cssRules[167].style.backgroundColor = currentSlideColor;

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
}); // end doc ready

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxFQUFFLFlBQVc7O0FBRVg7QUFDQSxJQUFFLFNBQVMsSUFBWCxFQUFpQixFQUFqQixDQUFvQixXQUFwQixFQUFpQyxVQUFTLENBQVQsRUFBWTtBQUMzQyxNQUFFLGNBQUY7QUFDQSxNQUFFLGVBQUY7QUFDRCxHQUhELEVBSFcsQ0FNUDs7QUFFSjtBQUNBLElBQUUsYUFBRixFQUFpQixFQUFqQixDQUFvQixPQUFwQixFQUE2QixZQUFXO0FBQ3RDLE1BQUUsT0FBRixFQUFXLFdBQVgsQ0FBdUIsY0FBdkI7QUFDQSxNQUFFLE9BQUYsRUFBVyxXQUFYLENBQXVCLGNBQXZCO0FBQ0EsTUFBRSxhQUFGLEVBQWlCLFVBQWpCLENBQTRCLEdBQTVCO0FBQ0EsUUFBSSxFQUFFLE1BQUYsRUFBVSxLQUFWLE1BQXFCLEdBQXpCLEVBQThCO0FBQzVCLFFBQUUsa0NBQUYsRUFBc0MsV0FBdEMsQ0FBa0QsNEJBQWxEO0FBQ0EsUUFBRSxrQ0FBRixFQUFzQyxXQUF0QyxDQUFrRCx5QkFBbEQ7QUFDQSxRQUFFLGtDQUFGLEVBQXNDLFdBQXRDLENBQWtELDRCQUFsRDtBQUNELEtBSkQsTUFJTztBQUNMLFFBQUUsa0NBQUYsRUFBc0MsV0FBdEMsQ0FBa0QseUJBQWxEO0FBQ0EsUUFBRSxrQ0FBRixFQUFzQyxXQUF0QyxDQUFrRCx5QkFBbEQ7QUFDQSxRQUFFLGtDQUFGLEVBQXNDLFdBQXRDLENBQWtELHlCQUFsRDtBQUNEO0FBQ0YsR0FiRCxFQVRXLENBc0JQOztBQUVKO0FBQ0EsSUFBRSx5QkFBRixFQUE2QixFQUE3QixDQUFnQyxPQUFoQyxFQUF5QyxZQUFXO0FBQ2xELFFBQU0sY0FBYyxFQUFFLEVBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxNQUFiLENBQUYsQ0FBcEI7QUFDQSxRQUFNLGFBQWEsRUFBRSxX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QzFGLFVBQUUsWUFBRixFQUFnQixRQUFoQixDQUF5QixJQUF6QixFQUErQixRQUEvQixDQUF3QyxtQkFBeEMsRUFBNkQsR0FBN0QsQ0FBaUUsRUFBRSxTQUFTLE1BQVgsRUFBakUsRUFBc0YsT0FBdEY7QUFDRCxPQUZEO0FBR0QsS0FMTSxNQUtBLElBQUksRUFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLE9BQWIsTUFBMEIsK0NBQTlCLEVBQStFO0FBQ3BGLFFBQUUsTUFBRixFQUFVLFFBQVYsQ0FBbUIsMEJBQW5CO0FBQ0EsUUFBRSxZQUFGLEVBQWdCLFFBQWhCLENBQXlCLHNCQUF6QixFQUFpRCxPQUFqRCxDQUF5RCxJQUF6RCxFQUErRCxLQUEvRCxDQUFxRSxHQUFyRSxFQUEwRSxLQUExRSxDQUFnRixZQUFZO0FBQzFGLFVBQUUsYUFBRixFQUFpQixRQUFqQixDQUEwQixtQkFBMUIsRUFBK0MsR0FBL0MsQ0FBbUQsRUFBRSxTQUFTLE1BQVgsRUFBbkQsRUFBd0UsT0FBeEU7QUFDRCxPQUZEO0FBR0Q7QUFDRixHQWhDRCxFQXBGVyxDQW9IUDtBQUNMLENBckhELEUsQ0FxSEkiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIkKGZ1bmN0aW9uKCkge1xuXG4gIC8vIHByZXZlbnQgc2Nyb2xsaW5nIG9uIHRvdWNoIGRldmljZXNcbiAgJChkb2N1bWVudC5ib2R5KS5vbigndG91Y2htb3ZlJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9KTsgLy8gZW5kIGZ1bmN0aW9uIHRvIHByZXZlbnQgc2Nyb2xsaW5nXG5cbiAgLy8gb24gY2xpY2sgb2YgaGFtYnVyZ2VyIG1lbnVcbiAgJCgnLm1vYmlsZU1lbnUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAkKCcuZ3JpZCcpLnRvZ2dsZUNsYXNzKCdncmlkLS1hY3RpdmUnKTtcbiAgICAkKCcubWVudScpLnRvZ2dsZUNsYXNzKCdtZW51LS1hY3RpdmUnKTtcbiAgICAkKCcubWVudV9faXRlbScpLmZhZGVUb2dnbGUoMzAwKTtcbiAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gNTAwKSB7XG4gICAgICAkKCcubW9iaWxlTWVudV9fYmFyczpudGgtb2YtdHlwZSgxKScpLnRvZ2dsZUNsYXNzKCd0eXBlMUFuaW1Jbml0IHR5cGUxQW5pbTUwMCcpO1xuICAgICAgJCgnLm1vYmlsZU1lbnVfX2JhcnM6bnRoLW9mLXR5cGUoMiknKS50b2dnbGVDbGFzcygndHlwZTJBbmltSW5pdCB0eXBlMkFuaW0nKTtcbiAgICAgICQoJy5tb2JpbGVNZW51X19iYXJzOm50aC1vZi10eXBlKDMpJykudG9nZ2xlQ2xhc3MoJ3R5cGUzQW5pbUluaXQgdHlwZTNBbmltNTAwJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy5tb2JpbGVNZW51X19iYXJzOm50aC1vZi10eXBlKDEpJykudG9nZ2xlQ2xhc3MoJ3R5cGUxQW5pbUluaXQgdHlwZTFBbmltJyk7XG4gICAgICAkKCcubW9iaWxlTWVudV9fYmFyczpudGgtb2YtdHlwZSgyKScpLnRvZ2dsZUNsYXNzKCd0eXBlMkFuaW1Jbml0IHR5cGUyQW5pbScpO1xuICAgICAgJCgnLm1vYmlsZU1lbnVfX2JhcnM6bnRoLW9mLXR5cGUoMyknKS50b2dnbGVDbGFzcygndHlwZTNBbmltSW5pdCB0eXBlM0FuaW0nKTtcbiAgICB9O1xuICB9KTsgLy8gZW5kIGZ1bmN0aW9uIG9uQ2xpY2sgb2YgaGFtYnVyZ2VyIG1lbnVcblxuICAvLyBvbiBjbGljayBvZiBlYWNoIGxldHRlciBpbiBwcm9maWxlIGdyaWQgXG4gICQoJy5ncmlkX19jZWxsIC5ncmlkX19saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY3VycmVudENlbGwgPSAkKCQodGhpcykuYXR0cignaHJlZicpKTtcbiAgICBjb25zdCBzbGlkZUNvbG9yID0gJChjdXJyZW50Q2VsbCkuY2hpbGRyZW4oJy5zbGlkZV9fcmlnaHQnKS5jc3MoJ2JhY2tncm91bmQtY29sb3InKTtcbiAgICBkb2N1bWVudC5zdHlsZVNoZWV0c1syXS5jc3NSdWxlc1sxNjddLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHNsaWRlQ29sb3I7XG5cbiAgICAvLyBhY3RpdmF0ZXMgc3dpcGUgYW5pbWF0aW9uXG4gICAgJCgnYm9keScpLmFkZENsYXNzKCdzd2lwZUFuaW1hdGlvbiBzd2lwZVJ0b0wnKTtcblxuICAgIC8vIGRpc3BsYXlzOm5vbmUgZXZlcnl0aGluZyBidXQgY3VycmVudCBjZWxsXG4gICAgJCgnaGVhZGVyJykuYWRkQ2xhc3MoJ2FuaW1TaHJpbmtYJykuZmFkZU91dCgpO1xuICAgICQoJ2Zvb3RlcicpLmFkZENsYXNzKCdhbmltU2hyaW5rWCcpLmZhZGVPdXQoKTtcbiAgICAkKCcucHJvZmlsZScpLmFkZENsYXNzKCdhbmltU2hyaW5rWCcpLmZhZGVPdXQoKS5kZWxheSg4MDApLnF1ZXVlKGZ1bmN0aW9uKCkge1xuICAgICAgJChjdXJyZW50Q2VsbCkuYWRkQ2xhc3MoJ2FuaW1Hcm93WCcpLmNzcyh7ZGlzcGxheTogJ2ZsZXgnfSkuZGVxdWV1ZSgpO1xuICAgIH0pO1xuICAgIFxuICAgIC8vIHJlbW92ZSBjbGFzc2VzIG9uIGFuaW1hdGlvbiBlbmRcbiAgICAkKCdib2R5Jykub24oJ2FuaW1hdGlvbmVuZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgJCgnYm9keScpLmRlbGF5KDEwMCkucXVldWUoZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnc3dpcGVBbmltYXRpb24gc3dpcGVSdG9MIHN3aXBlTHRvUicpLmRlcXVldWUoKTtcbiAgICAgICAgJCgnaGVhZGVyJykucmVtb3ZlQ2xhc3MoKTtcbiAgICAgICAgJCgnZm9vdGVyJykucmVtb3ZlQ2xhc3MoKTtcbiAgICAgICAgJCgnLnByb2ZpbGUnKS5yZW1vdmVDbGFzcygnYW5pbVNocmlua1gnKTtcbiAgICAgICAgJChjdXJyZW50Q2VsbCkucmVtb3ZlQ2xhc3MoJ2FuaW1Hcm93WCcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pOyAvLyBlbmQgZnVuY3Rpb24gb25DbGljayBvZiBlYWNoIGxldHRlciBpbiBwcm9maWxlXG5cblxuICAvLyBvbiBjbGljayBvZiBjZW50ZXIgc3F1YXJlXG4gICQoJy5jdHJsX19kZXNrdG9wLS1jZW50ZXInKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgY29uc3QgdGhpc1NsaWRlID0gJCh0aGlzKS5wYXJlbnRzKCdkaXYnKS5lcSgzKTtcbiAgICBcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAkKHRoaXNTbGlkZSkuYWRkQ2xhc3MoJ2FuaW1TaHJpbmtVcCcpO1xuICAgIFxuICAgIC8vIGFjdGl2YXRlcyBhbmltYXRpb25cbiAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ3N3aXBlVXBBbmltYXRpb24gc3dpcGVVcCcpLm9uKCdhbmltYXRpb25lbmQnLCBmdW5jdGlvbigpIHtcbiAgICAgICQoJ2JvZHknKS5kZWxheSg0NTApLnF1ZXVlKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJpbmRleC5odG1sXCI7XG4gICAgfSwgMTg3MCk7XG5cbiAgfSk7IC8vIGVuZCBmdW5jdGlvbiBvbkNsaWNrIG9mIGNlbnRlciBzcXVhcmVcblxuXG5cblxuXG5cblxuXG4gIFxuXG4gIC8vIG9uIGNsaWNrIG9mIGFycm93c1xuICAkKCcuY3RybF9fZGVza3RvcC0tYXJyb3dzJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY3VycmVudFNsaWRlID0gJCh0aGlzKS5wYXJlbnRzKCdkaXYnKS5lcSgzKTtcbiAgICBjb25zdCBwcmV2aW91c1NsaWRlID0gJChjdXJyZW50U2xpZGUpLnByZXYoJy5zbGlkZScpO1xuICAgIGNvbnN0IG5leHRTbGlkZSA9ICQoY3VycmVudFNsaWRlKS5uZXh0KCcuc2xpZGUnKTtcblxuICAgIGNvbnN0IGN1cnJlbnRTbGlkZUNvbG9yID0gJChjdXJyZW50U2xpZGUpLmNoaWxkcmVuKCcuc2xpZGVfX3JpZ2h0JykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJyk7XG4gICAgZG9jdW1lbnQuc3R5bGVTaGVldHNbMl0uY3NzUnVsZXNbMTY3XS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjdXJyZW50U2xpZGVDb2xvcjtcblxuICAgICQoJy5zbGlkZScpLnJlbW92ZUNsYXNzKCkuYWRkQ2xhc3MoJ3NsaWRlJyk7XG5cbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdjbGFzcycpID09PSAnYnRuIGN0cmxfX2Rlc2t0b3AtLWFycm93cyBjdHJsX19kZXNrdG9wLS1yaWdodCcgJiYgJChjdXJyZW50U2xpZGUpLmF0dHIoJ2lkJykgPT09ICdaJykge1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdzd2lwZUFuaW1hdGlvbiBzd2lwZVJ0b0wnKTtcbiAgICAgICQoY3VycmVudFNsaWRlKS5mYWRlT3V0KDkwMCkuZGVsYXkoMjUwKS5xdWV1ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoY3VycmVudFNsaWRlKS5zaWJsaW5ncygnI0EnKS5hZGRDbGFzcygnYW5pbUdyb3dYJykuY3NzKHsgZGlzcGxheTogJ2ZsZXgnfSkuZGVxdWV1ZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKCQodGhpcykuYXR0cignY2xhc3MnKSA9PT0gJ2J0biBjdHJsX19kZXNrdG9wLS1hcnJvd3MgY3RybF9fZGVza3RvcC0tcmlnaHQnKSB7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ3N3aXBlQW5pbWF0aW9uIHN3aXBlUnRvTCcpO1xuICAgICAgJChjdXJyZW50U2xpZGUpLmZhZGVPdXQoOTAwKS5kZWxheSgyNTApLnF1ZXVlKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKG5leHRTbGlkZSkuYWRkQ2xhc3MoJ2FuaW1Hcm93WCcpLmNzcyh7ZGlzcGxheTogJ2ZsZXgnfSkuZGVxdWV1ZSgpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ2NsYXNzJykgPT0gJ2J0biBjdHJsX19kZXNrdG9wLS1hcnJvd3MgY3RybF9fZGVza3RvcC0tbGVmdCcgJiYgJChjdXJyZW50U2xpZGUpLmF0dHIoJ2lkJykgPT09ICdBJykge1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdzd2lwZUFuaW1hdGlvbiBzd2lwZUx0b1InKTtcbiAgICAgICQoY3VycmVudFNsaWRlKS5hZGRDbGFzcygnYW5pbVNocmlua1hGcm9tUmlnaHQnKS5mYWRlT3V0KDEwMDApLmRlbGF5KDMwMCkucXVldWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAkKGN1cnJlbnRTbGlkZSkuc2libGluZ3MoJyNaJykuYWRkQ2xhc3MoJ2FuaW1Hcm93WEZyb21MZWZ0JykuY3NzKHsgZGlzcGxheTogJ2ZsZXgnIH0pLmRlcXVldWUoKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCdjbGFzcycpID09PSAnYnRuIGN0cmxfX2Rlc2t0b3AtLWFycm93cyBjdHJsX19kZXNrdG9wLS1sZWZ0Jykge1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdzd2lwZUFuaW1hdGlvbiBzd2lwZUx0b1InKTtcbiAgICAgICQoY3VycmVudFNsaWRlKS5hZGRDbGFzcygnYW5pbVNocmlua1hGcm9tUmlnaHQnKS5mYWRlT3V0KDEwMDApLmRlbGF5KDMwMCkucXVldWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHByZXZpb3VzU2xpZGUpLmFkZENsYXNzKCdhbmltR3Jvd1hGcm9tTGVmdCcpLmNzcyh7IGRpc3BsYXk6ICdmbGV4JyB9KS5kZXF1ZXVlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pOyAvLyBlbmQgZnVuY3Rpb24gb25DbGljayBvZiBhcnJvd3Ncbn0pOyAvLyBlbmQgZG9jIHJlYWR5XG5cblxuIl19
