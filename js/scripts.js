/*!
    * Start Bootstrap - Freelancer v6.0.3 (https://startbootstrap.com/themes/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-freelancer/blob/master/LICENSE)
    */
    (function($) {
    "use strict"; // Start of use strict

    const episodeTotal = 22;

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });

    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });

    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    function loadEpisodeArt(episodeCount) {
      const carouselParent = $(".carousel-inner");

      for (var i = 1; i <= episodeCount; i++) {
        var episodeTemplate = '<div class="carousel-item active" data-interval="4000">' + 
          '<img src="assets/img/episodes/TToS-Episode-' + pad(i, 4) + '.png" class="d-block w-100" alt="">' + 
        '</div>';
        carouselParent.append(episodeTemplate);
      }

      return;
    }

    function pad(num, size) {
      var s = "000000000" + num;
      return s.substr(s.length-size);
    }

    var srcStartImage = $(".comicRow img").attr('src');
    var srcArray = srcStartImage.split("-");
    var srcComicNumber = Number(srcArray[srcArray.length - 1].split(".")[0]);
    srcComicNumber--;

    $("#loadMore").click(function(e) { // click event for load more
      e.preventDefault();
      var counter = 3;

      while (counter > 0) {
        if (srcComicNumber == 0) {
          counter = 0;
          $("#loadMore").hide();
        } else {
          var comicTemplate = '<div class="row comicRow">' +
            '<div class="col comicColumn mb-5">' +
              '<div class="portfolio-main portfolio-item mx-auto">' +
                '<img class="img-fluid" src="assets/img/portfolio/TToS-Comic-' + pad(srcComicNumber, 4) + '.png" alt="" />' +
              '</div>' +
            '</div>' +
          '</div>';
          $(".comicGallery").append(comicTemplate).show('normal');
          counter--;
          srcComicNumber--;
        }
      }

      if (srcComicNumber == 0) {
        counter = 0;
        $("#loadMore").hide();
      }
    });

    loadEpisodeArt(episodeTotal);
  })(jQuery); // End of use strict
