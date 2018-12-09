(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

$(function () {
  // = = = = = = = = = = = = = = = = = = = =
  // PROFILE EVENTS
  // = = = = = = = = = = = = = = = = = = = =
  // prevent scrolling on touch devices
  // $(document.body).on('touchmove', function(e) {
  //   e.preventDefault();
  //   e.stopPropagation();
  // }); // end function to prevent scrolling

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
    draggable: '>1',
    arrowShape: {
      x0: 10,
      x1: 60, y1: 50,
      x2: 65, y2: 50,
      x3: 15
    }
  });
}); // end doc ready

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxFQUFFLFlBQVc7QUFDYjtBQUNBO0FBQ0E7QUFDRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBRSxhQUFGLEVBQWlCLEVBQWpCLENBQW9CLE9BQXBCLEVBQTZCLFlBQVc7QUFDdEMsTUFBRSxPQUFGLEVBQVcsV0FBWCxDQUF1QixjQUF2QjtBQUNBLE1BQUUsdUJBQUYsRUFBMkIsV0FBM0IsQ0FBdUMsbURBQXZDO0FBQ0EsTUFBRSxPQUFGLEVBQVcsV0FBWCxDQUF1QixjQUF2QjtBQUNBLE1BQUUsYUFBRixFQUFpQixVQUFqQixDQUE0QixHQUE1QjtBQUNBLFFBQUksRUFBRSxNQUFGLEVBQVUsS0FBVixNQUFxQixHQUF6QixFQUE4QjtBQUM1QixRQUFFLGtDQUFGLEVBQXNDLFdBQXRDLENBQWtELDRCQUFsRDtBQUNBLFFBQUUsa0NBQUYsRUFBc0MsV0FBdEMsQ0FBa0QseUJBQWxEO0FBQ0EsUUFBRSxrQ0FBRixFQUFzQyxXQUF0QyxDQUFrRCw0QkFBbEQ7QUFDRCxLQUpELE1BSU87QUFDTCxRQUFFLGtDQUFGLEVBQXNDLFdBQXRDLENBQWtELHlCQUFsRDtBQUNBLFFBQUUsa0NBQUYsRUFBc0MsV0FBdEMsQ0FBa0QseUJBQWxEO0FBQ0EsUUFBRSxrQ0FBRixFQUFzQyxXQUF0QyxDQUFrRCx5QkFBbEQ7QUFDRDtBQUNGLEdBZEQsRUFYVyxDQXlCUDs7QUFFSjtBQUNBLElBQUUseUJBQUYsRUFBNkIsRUFBN0IsQ0FBZ0MsT0FBaEMsRUFBeUMsWUFBVztBQUNsRCxRQUFNLGNBQWMsRUFBRSxFQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsTUFBYixDQUFGLENBQXBCO0FBQ0EsUUFBTSxhQUFhLEVBQUUsV0FBRixFQUFlLFFBQWYsQ0FBd0IsZUFBeEIsRUFBeUMsR0FBekMsQ0FB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ekIsRUFBK0IsUUFBL0IsQ0FBd0MsbUJBQXhDLEVBQTZELEdBQTdELENBQWlFLEVBQUUsU0FBUyxNQUFYLEVBQWpFLEVBQXNGLE9BQXRGO0FBQ0QsT0FGRDtBQUdELEtBTE0sTUFLQSxJQUFJLEVBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxPQUFiLE1BQTBCLCtDQUE5QixFQUErRTtBQUNwRixRQUFFLE1BQUYsRUFBVSxRQUFWLENBQW1CLDBCQUFuQjtBQUNBLFFBQUUsWUFBRixFQUFnQixRQUFoQixDQUF5QixzQkFBekIsRUFBaUQsT0FBakQsQ0FBeUQsSUFBekQsRUFBK0QsS0FBL0QsQ0FBcUUsR0FBckUsRUFBMEUsS0FBMUUsQ0FBZ0YsWUFBWTtBQUMxRixVQUFFLGFBQUYsRUFBaUIsUUFBakIsQ0FBMEIsbUJBQTFCLEVBQStDLEdBQS9DLENBQW1ELEVBQUUsU0FBUyxNQUFYLEVBQW5ELEVBQXdFLE9BQXhFO0FBQ0QsT0FGRDtBQUdEO0FBQ0YsR0FoQ0QsRUFqRlcsQ0FpSFA7OztBQUdOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBS0EsSUFBRSx1QkFBRixFQUEyQixRQUEzQixDQUFvQztBQUNsQyxnQkFBWSxJQURzQjtBQUVsQyxlQUFXLElBRnVCO0FBR2xDLGdCQUFZO0FBQ1YsVUFBSSxFQURNO0FBRVYsVUFBSSxFQUZNLEVBRUYsSUFBSSxFQUZGO0FBR1YsVUFBSSxFQUhNLEVBR0YsSUFBSSxFQUhGO0FBSVYsVUFBSTtBQUpNO0FBSHNCLEdBQXBDO0FBZUMsQ0FoS0QsRSxDQWdLSSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIiQoZnVuY3Rpb24oKSB7XG4vLyA9ID0gPSA9ID0gPSA9ID0gPSA9ID0gPSA9ID0gPSA9ID0gPSA9ID1cbi8vIFBST0ZJTEUgRVZFTlRTXG4vLyA9ID0gPSA9ID0gPSA9ID0gPSA9ID0gPSA9ID0gPSA9ID0gPSA9ID1cbiAgLy8gcHJldmVudCBzY3JvbGxpbmcgb24gdG91Y2ggZGV2aWNlc1xuICAvLyAkKGRvY3VtZW50LmJvZHkpLm9uKCd0b3VjaG1vdmUnLCBmdW5jdGlvbihlKSB7XG4gIC8vICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAvLyAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIC8vIH0pOyAvLyBlbmQgZnVuY3Rpb24gdG8gcHJldmVudCBzY3JvbGxpbmdcblxuICAvLyBvbiBjbGljayBvZiBoYW1idXJnZXIgbWVudVxuICAkKCcubW9iaWxlTWVudScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICQoJy5ncmlkJykudG9nZ2xlQ2xhc3MoJ2dyaWQtLWFjdGl2ZScpO1xuICAgICQoJy5wb3J0Zm9saW9fX2NvbnRhaW5lcicpLnRvZ2dsZUNsYXNzKCdwb3J0Zm9saW9fX2NvbnRhaW5lciBwb3J0Zm9saW9fX2NvbnRhaW5lci0tYWN0aXZlJyk7XG4gICAgJCgnLm1lbnUnKS50b2dnbGVDbGFzcygnbWVudS0tYWN0aXZlJyk7XG4gICAgJCgnLm1lbnVfX2l0ZW0nKS5mYWRlVG9nZ2xlKDMwMCk7XG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IDUwMCkge1xuICAgICAgJCgnLm1vYmlsZU1lbnVfX2JhcnM6bnRoLW9mLXR5cGUoMSknKS50b2dnbGVDbGFzcygndHlwZTFBbmltSW5pdCB0eXBlMUFuaW01MDAnKTtcbiAgICAgICQoJy5tb2JpbGVNZW51X19iYXJzOm50aC1vZi10eXBlKDIpJykudG9nZ2xlQ2xhc3MoJ3R5cGUyQW5pbUluaXQgdHlwZTJBbmltJyk7XG4gICAgICAkKCcubW9iaWxlTWVudV9fYmFyczpudGgtb2YtdHlwZSgzKScpLnRvZ2dsZUNsYXNzKCd0eXBlM0FuaW1Jbml0IHR5cGUzQW5pbTUwMCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKCcubW9iaWxlTWVudV9fYmFyczpudGgtb2YtdHlwZSgxKScpLnRvZ2dsZUNsYXNzKCd0eXBlMUFuaW1Jbml0IHR5cGUxQW5pbScpO1xuICAgICAgJCgnLm1vYmlsZU1lbnVfX2JhcnM6bnRoLW9mLXR5cGUoMiknKS50b2dnbGVDbGFzcygndHlwZTJBbmltSW5pdCB0eXBlMkFuaW0nKTtcbiAgICAgICQoJy5tb2JpbGVNZW51X19iYXJzOm50aC1vZi10eXBlKDMpJykudG9nZ2xlQ2xhc3MoJ3R5cGUzQW5pbUluaXQgdHlwZTNBbmltJyk7XG4gICAgfTtcbiAgfSk7IC8vIGVuZCBmdW5jdGlvbiBvbkNsaWNrIG9mIGhhbWJ1cmdlciBtZW51XG5cbiAgLy8gb24gY2xpY2sgb2YgZWFjaCBsZXR0ZXIgaW4gcHJvZmlsZSBncmlkIFxuICAkKCcuZ3JpZF9fY2VsbCAuZ3JpZF9fbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGN1cnJlbnRDZWxsID0gJCgkKHRoaXMpLmF0dHIoJ2hyZWYnKSk7XG4gICAgY29uc3Qgc2xpZGVDb2xvciA9ICQoY3VycmVudENlbGwpLmNoaWxkcmVuKCcuc2xpZGVfX3JpZ2h0JykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJyk7XG4gICAgZG9jdW1lbnQuc3R5bGVTaGVldHNbMl0uY3NzUnVsZXNbMTk0XS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBzbGlkZUNvbG9yO1xuXG4gICAgLy8gY29uc29sZS5sb2coZG9jdW1lbnQuc3R5bGVTaGVldHMpO1xuXG4gICAgLy8gYWN0aXZhdGVzIHN3aXBlIGFuaW1hdGlvblxuICAgICQoJ2JvZHknKS5hZGRDbGFzcygnc3dpcGVBbmltYXRpb24gc3dpcGVSdG9MJyk7XG5cbiAgICAvLyBkaXNwbGF5czpub25lIGV2ZXJ5dGhpbmcgYnV0IGN1cnJlbnQgY2VsbFxuICAgICQoJ2hlYWRlcicpLmFkZENsYXNzKCdhbmltU2hyaW5rWCcpLmZhZGVPdXQoKTtcbiAgICAkKCdmb290ZXInKS5hZGRDbGFzcygnYW5pbVNocmlua1gnKS5mYWRlT3V0KCk7XG4gICAgJCgnLnByb2ZpbGUnKS5hZGRDbGFzcygnYW5pbVNocmlua1gnKS5mYWRlT3V0KCkuZGVsYXkoODAwKS5xdWV1ZShmdW5jdGlvbigpIHtcbiAgICAgICQoY3VycmVudENlbGwpLmFkZENsYXNzKCdhbmltR3Jvd1gnKS5jc3Moe2Rpc3BsYXk6ICdmbGV4J30pLmRlcXVldWUoKTtcbiAgICB9KTtcbiAgICBcbiAgICAvLyByZW1vdmUgY2xhc3NlcyBvbiBhbmltYXRpb24gZW5kXG4gICAgJCgnYm9keScpLm9uKCdhbmltYXRpb25lbmQnLCBmdW5jdGlvbigpIHtcbiAgICAgICQoJ2JvZHknKS5kZWxheSgxMDApLnF1ZXVlKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3N3aXBlQW5pbWF0aW9uIHN3aXBlUnRvTCBzd2lwZUx0b1InKS5kZXF1ZXVlKCk7XG4gICAgICAgICQoJ2hlYWRlcicpLnJlbW92ZUNsYXNzKCk7XG4gICAgICAgICQoJ2Zvb3RlcicpLnJlbW92ZUNsYXNzKCk7XG4gICAgICAgICQoJy5wcm9maWxlJykucmVtb3ZlQ2xhc3MoJ2FuaW1TaHJpbmtYJyk7XG4gICAgICAgICQoY3VycmVudENlbGwpLnJlbW92ZUNsYXNzKCdhbmltR3Jvd1gnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTsgLy8gZW5kIGZ1bmN0aW9uIG9uQ2xpY2sgb2YgZWFjaCBsZXR0ZXIgaW4gcHJvZmlsZVxuXG5cbiAgLy8gb24gY2xpY2sgb2YgY2VudGVyIHNxdWFyZVxuICAkKCcuY3RybF9fZGVza3RvcC0tY2VudGVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGNvbnN0IHRoaXNTbGlkZSA9ICQodGhpcykucGFyZW50cygnZGl2JykuZXEoMyk7XG4gICAgXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgJCh0aGlzU2xpZGUpLmFkZENsYXNzKCdhbmltU2hyaW5rVXAnKTtcbiAgICBcbiAgICAvLyBhY3RpdmF0ZXMgYW5pbWF0aW9uXG4gICAgJCgnYm9keScpLmFkZENsYXNzKCdzd2lwZVVwQW5pbWF0aW9uIHN3aXBlVXAnKS5vbignYW5pbWF0aW9uZW5kJywgZnVuY3Rpb24oKSB7XG4gICAgICAkKCdib2R5JykuZGVsYXkoNDUwKS5xdWV1ZShmdW5jdGlvbigpIHtcbiAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiaW5kZXguaHRtbFwiO1xuICAgIH0sIDE4NzApO1xuXG4gIH0pOyAvLyBlbmQgZnVuY3Rpb24gb25DbGljayBvZiBjZW50ZXIgc3F1YXJlXG4gIFxuXG4gIC8vIG9uIGNsaWNrIG9mIGFycm93c1xuICAkKCcuY3RybF9fZGVza3RvcC0tYXJyb3dzJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY3VycmVudFNsaWRlID0gJCh0aGlzKS5wYXJlbnRzKCdkaXYnKS5lcSgzKTtcbiAgICBjb25zdCBwcmV2aW91c1NsaWRlID0gJChjdXJyZW50U2xpZGUpLnByZXYoJy5zbGlkZScpO1xuICAgIGNvbnN0IG5leHRTbGlkZSA9ICQoY3VycmVudFNsaWRlKS5uZXh0KCcuc2xpZGUnKTtcblxuICAgIGNvbnN0IGN1cnJlbnRTbGlkZUNvbG9yID0gJChjdXJyZW50U2xpZGUpLmNoaWxkcmVuKCcuc2xpZGVfX3JpZ2h0JykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJyk7XG4gICAgZG9jdW1lbnQuc3R5bGVTaGVldHNbMl0uY3NzUnVsZXNbMTk0XS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjdXJyZW50U2xpZGVDb2xvcjtcblxuICAgICQoJy5zbGlkZScpLnJlbW92ZUNsYXNzKCkuYWRkQ2xhc3MoJ3NsaWRlJyk7XG5cbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdjbGFzcycpID09PSAnYnRuIGN0cmxfX2Rlc2t0b3AtLWFycm93cyBjdHJsX19kZXNrdG9wLS1yaWdodCcgJiYgJChjdXJyZW50U2xpZGUpLmF0dHIoJ2lkJykgPT09ICdaJykge1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdzd2lwZUFuaW1hdGlvbiBzd2lwZVJ0b0wnKTtcbiAgICAgICQoY3VycmVudFNsaWRlKS5mYWRlT3V0KDkwMCkuZGVsYXkoMjUwKS5xdWV1ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoY3VycmVudFNsaWRlKS5zaWJsaW5ncygnI0EnKS5hZGRDbGFzcygnYW5pbUdyb3dYJykuY3NzKHsgZGlzcGxheTogJ2ZsZXgnfSkuZGVxdWV1ZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKCQodGhpcykuYXR0cignY2xhc3MnKSA9PT0gJ2J0biBjdHJsX19kZXNrdG9wLS1hcnJvd3MgY3RybF9fZGVza3RvcC0tcmlnaHQnKSB7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ3N3aXBlQW5pbWF0aW9uIHN3aXBlUnRvTCcpO1xuICAgICAgJChjdXJyZW50U2xpZGUpLmZhZGVPdXQoOTAwKS5kZWxheSgyNTApLnF1ZXVlKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKG5leHRTbGlkZSkuYWRkQ2xhc3MoJ2FuaW1Hcm93WCcpLmNzcyh7ZGlzcGxheTogJ2ZsZXgnfSkuZGVxdWV1ZSgpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ2NsYXNzJykgPT0gJ2J0biBjdHJsX19kZXNrdG9wLS1hcnJvd3MgY3RybF9fZGVza3RvcC0tbGVmdCcgJiYgJChjdXJyZW50U2xpZGUpLmF0dHIoJ2lkJykgPT09ICdBJykge1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdzd2lwZUFuaW1hdGlvbiBzd2lwZUx0b1InKTtcbiAgICAgICQoY3VycmVudFNsaWRlKS5hZGRDbGFzcygnYW5pbVNocmlua1hGcm9tUmlnaHQnKS5mYWRlT3V0KDEwMDApLmRlbGF5KDMwMCkucXVldWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAkKGN1cnJlbnRTbGlkZSkuc2libGluZ3MoJyNaJykuYWRkQ2xhc3MoJ2FuaW1Hcm93WEZyb21MZWZ0JykuY3NzKHsgZGlzcGxheTogJ2ZsZXgnIH0pLmRlcXVldWUoKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCdjbGFzcycpID09PSAnYnRuIGN0cmxfX2Rlc2t0b3AtLWFycm93cyBjdHJsX19kZXNrdG9wLS1sZWZ0Jykge1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdzd2lwZUFuaW1hdGlvbiBzd2lwZUx0b1InKTtcbiAgICAgICQoY3VycmVudFNsaWRlKS5hZGRDbGFzcygnYW5pbVNocmlua1hGcm9tUmlnaHQnKS5mYWRlT3V0KDEwMDApLmRlbGF5KDMwMCkucXVldWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHByZXZpb3VzU2xpZGUpLmFkZENsYXNzKCdhbmltR3Jvd1hGcm9tTGVmdCcpLmNzcyh7IGRpc3BsYXk6ICdmbGV4JyB9KS5kZXF1ZXVlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pOyAvLyBlbmQgZnVuY3Rpb24gb25DbGljayBvZiBhcnJvd3NcblxuXG4vLyA9ID0gPSA9ID0gPSA9ID0gPSA9ID0gPSA9ID0gPSA9ID0gPSA9ID1cbi8vIFBPUlRGT0xJTyBFVkVOVFNcbi8vID0gPSA9ID0gPSA9ID0gPSA9ID0gPSA9ID0gPSA9ID0gPSA9ID0gPVxuLy8gJCgnLm1lbnVfX2xpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4vLyAgIGUucHJldmVudERlZmF1bHQoKTtcblxuLy8gICBjb25zdCBfaHJlZiA9ICQodGhpcykuYXR0cignaHJlZicpO1xuXG4vLyAgIGhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIF9ocmVmKTtcblxuLy8gICBsb2FkQ29udGVudChfaHJlZik7XG4vLyB9KTtcblxuLy8gZnVuY3Rpb24gbG9hZENvbnRlbnQoaHJlZikge1xuLy8gICAkKCdtYWluJykuZmluZCgnLm1haW5Db250ZW50JykuZmFkZU91dCgyMDAsIGZ1bmN0aW9uKCkge1xuLy8gICAgICQoJ21haW4nKS5oaWRlKCkubG9hZChocmVmICsgJyAubWFpbkNvbnRlbnQnLCBmdW5jdGlvbigpIHtcbi8vICAgICAgICQoJ21haW4nKS5mYWRlSW4oMjAwKTtcbi8vICAgICB9KTtcbi8vICAgfSk7XG4vLyB9O1xuXG4vLyAkKHdpbmRvdykuYmluZCgncG9wc3RhdGUnLCBmdW5jdGlvbigpIHtcbi8vICAgY29uc3QgX2hyZWYgPSBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4vLyAgIGxvYWRDb250ZW50KF9ocmVmKTtcbi8vIH0pO1xuXG5cblxuXG4kKCcucG9ydGZvbGlvX19jb250YWluZXInKS5mbGlja2l0eSh7XG4gIHdyYXBBcm91bmQ6IHRydWUsXG4gIGRyYWdnYWJsZTogJz4xJyxcbiAgYXJyb3dTaGFwZToge1xuICAgIHgwOiAxMCxcbiAgICB4MTogNjAsIHkxOiA1MCxcbiAgICB4MjogNjUsIHkyOiA1MCxcbiAgICB4MzogMTVcbiAgfVxufSk7XG5cblxuXG5cblxufSk7IC8vIGVuZCBkb2MgcmVhZHlcbiJdfQ==
