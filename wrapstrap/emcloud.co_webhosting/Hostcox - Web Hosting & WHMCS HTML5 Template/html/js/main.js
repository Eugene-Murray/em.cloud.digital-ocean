$(document).ready(function () {
    "use strict";

  // Preloader js
  $('body').scrollspy({ target: '.edu-navbar' });
   $(window).on('load', function(e){
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({'overflow':'visible'});
  })
    // Contact Form
	
	$('#contactform').submit(function(){
		var action = $(this).attr('action');
		$("#message").slideUp(750,function() {
		$('#message').hide();
 		$('#submit')
			.after('')
			.attr('disabled','disabled');
		$.post(action, {
			name: $('#name').val(),
			email: $('#email').val(),
			subject: $('#subject').val(),
			comments: $('#comments').val()
		},
			function(data){
				document.getElementById('message').innerHTML = data;
				$('#message').slideDown('slow');
				$('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
				$('#submit').removeAttr('disabled');
				if(data.match('success') != null) $('#contactform').slideUp('slow');
			}
		);
		});
		return false;
	});
	
  /*-------------------------*/
  /*          Slider         */
  /*-------------------------*/
   initSliderUI();
  function initSliderUI() {
      var initIterator = 0;
      if ($(".slider-ui").length) {
          $(".slider-ui").each(function() {
              var self = $(this),
                  sliderUI = self.find('.slider-line'),
                  sliderInp = self.find('.slider-inp'),
                  sliderUniqueId = 'sliderUI' + initIterator,
                  inputUniqueId = 'inputUI' + initIterator,
                  start = parseInt(sliderInp.attr('data-start')),
                  count_step = parseInt(sliderInp.attr('data-count-step'));
              sliderUI.attr('id', sliderUniqueId);
              sliderInp.attr('id', inputUniqueId);
              initIterator++;
              count_step = count_step ? count_step : 300;
              var keypressSlider = document.getElementById(sliderUniqueId),
                  input = document.getElementById(inputUniqueId);
              noUiSlider.create(keypressSlider, {
                  start: start ? start : 0,
                  step: 1,
                  connect: "lower",
                  tooltips: true,
                  format: {
                      to: function(value) {
                          return "Plan" + value;
                          //return parseInt(value);
                      },
                      from: function(value) {
                          return value;
                      }
                  },
                  range: {
                      'min': 1,
                      'max': count_step
                  },
                  pips: {
                      mode: 'values',
                      values: [],
                      density: 5
                  }
              });
              // Calculate Docker Product second and third  diagram
              function getValue2(values, handle, unencoded, tap) {
                  var circle = $(this.target).closest('.sidebar').find('.circle');
                  circle.attr('data-percent', parseInt(unencoded) / count_step * 100);
              }
              keypressSlider.noUiSlider.on('change', getValue2);
              keypressSlider.noUiSlider.on('update', function(values, handle) {
                  refreshInfo(values[handle]);
                  input.value = values[handle];
              });
              input.addEventListener('change', function() {
                  keypressSlider.noUiSlider.set([null, this.value]);
              });
              // Listen to keydown events on the input field.
              input.addEventListener('keydown', function(e) {
                  // Convert the string to a number.
                  var value = Number(keypressSlider.noUiSlider.get()),
                  sliderStep = keypressSlider.noUiSlider.steps()
                  // Select the stepping for the first handle.
                  sliderStep = sliderStep[0];
                  // 13 is enter,
                  // 38 is key up,
                  // 40 is key down.
                  switch (e.which) {
                      case 13:
                          keypressSlider.noUiSlider.set(this.value);
                          break;
                      case 38:
                          keypressSlider.noUiSlider.set(value + sliderStep[1]);
                          break;
                      case 40:
                          keypressSlider.noUiSlider.set(value - sliderStep[0]);
                          break;
                  }
              });
              function getServicesInfo() {
                var info = {
                  "Plan1": {
                    "name": "Service A",
                    "disk": "100GB",
                    "ram": "1GB",
                    "cpu": "1 Core",
                    "bandwith": "100GB",
                    "setup": "8â‚¬",
                    "ip": "IP Address 2",
                    "price": "90.05"
                  },
                  "Plan2": {
                    "name": "Service B",
                    "disk": "200GB",
                    "ram": "4GB",
                    "cpu": "2 Core",
                    "setup": "15â‚¬",
                    "ip": "IP Address 4",
                    "bandwith": "500GB",
                    "price": "150.15"
                  },
                  "Plan3": {
                    "name": "Service C",
                    "disk": "300GB",
                    "ram": "8GB",
                    "cpu": "4 Core",
                    "setup": "Free",
                    "ip": "IP Address 8",
                    "bandwith": "2TB",
                    "price": "290.00"
                  },
                  "Plan4": {
                    "name": "Service D",
                    "disk": "400GB",
                    "ram": "12GB",
                    "cpu": "4 Core",
                    "setup": "Free",
                    "ip": "IP Address 8",
                    "bandwith": "Unlimited",
                    "price": "385.22"
                  },
                  "Plan5": {
                    "name": "Service E",
                    "disk": "500GB",
                    "ram": "16GB",
                    "cpu": "8 Core",
                    "setup": "Free",
                    "ip": "IP Address 12",
                    "bandwith": "Unlimited",
                    "price": "510.99"
                  }
                };
                return info;
              }
              function refreshInfo(key){
                var info = getServicesInfo();
                $("#disk-val").html(info[key].disk);
                $("#cpu-val").html(info[key].cpu);
                $("#ram-val").html(info[key].ram);
                $("#setup-val").html(info[key].setup);
                $("#ip-val").html(info[key].ip);
                $("#bw-val").html(info[key].bandwith);
                $("#price-val").html(info[key].price);
              }
          });
      }
  }
    // ************ Mean Menu
    jQuery('header .main-menu').meanmenu({
        meanScreenWidth: "991"
    });
    
    // ************ Scroll to top 
    jQuery('.to-top').on('click', function(event) {
        jQuery('html,body').animate({
            scrollTop: 0
        }, 1000);
    });
    jQuery(window).scroll(function() {
        if (jQuery(window).scrollTop() > 100) {
            jQuery('.to-top').fadeIn(1000);
        } else {
            jQuery('.to-top').fadeOut(1000);
        };
    });

    // ************  Testimonial Slider 
    $("#testimonial-slider").owlCarousel({
        navigationText :["<i class='flaticon-angle-pointing-to-left'></i>", "<i class='flaticon-angle-arrow-pointing-to-right'></i>"],
        items : 3,
        loop:true,
        itemsDesktop : [1199, 2],
        itemsDesktopSmall : [980, 1],
        itemsTablet: [768, 1],
        itemsMobile : [479, 1],
        slideSpeed: 1500,
        paginationSpeed: 1500,
        navigation : true,
        pagination : false,
        afterAction: function(el){
           //remove class active
           this
           .$owlItems
           .removeClass('active')

           //add class active
           this
           .$owlItems //owl internal $ object containing items
           .eq(this.currentItem + 1)
           .addClass('active')    
        }         
    }); 
    // ************  Testimonial Slider 
    $("#testimonial_slider_2").owlCarousel({
        navigationText :["<i class='flaticon-angle-pointing-to-left'></i>", "<i class='flaticon-angle-arrow-pointing-to-right'></i>"],
        items : 2,
        itemsDesktop : [1199, 2],
        itemsDesktopSmall : [980, 2],
        itemsTablet: [768, 1],
        itemsMobile : [479, 1],
        slideSpeed: 1500,
        paginationSpeed: 1500,
        navigation : true,
        pagination : false      
    });     

    // ************  Testimonial Slider
    $("#testimonial_slider_1").owlCarousel({
        navigationText :["<i class='flaticon-angle-pointing-to-left'></i>", "<i class='flaticon-angle-arrow-pointing-to-right'></i>"],
        items : 1,
        itemsDesktop : [1199, 1],
        itemsDesktopSmall : [980, 1],
        itemsTablet: [768, 1],
        itemsMobile : [479, 1],
        slideSpeed: 1500,
        paginationSpeed: 1500,
        navigation : true,
        pagination : false      
    }); 

    // ************  Testimonial Slider
    $(".blog-slider").owlCarousel({
        navigationText :["<i class='flaticon-angle-pointing-to-left'></i>", "<i class='flaticon-angle-arrow-pointing-to-right'></i>"],
        items : 1,
        itemsDesktop : [1199, 1],
        itemsDesktopSmall : [980, 1],
        itemsTablet: [768, 1],
        itemsMobile : [479, 1],
        slideSpeed: 1500,
        paginationSpeed: 1500,
        navigation : true,
        pagination : false
    }); 


    // ************  Video Popup   
    $('.video-iframe').magnificPopup({
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>',
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: 'http://www.youtube.com/embed/%id%?autoplay=1'
                }
            },
            srcAction: 'iframe_src'
        }
    }); 

    // ************  Smoth scroll
    $(".myBtn").on('click', function(event) {
      if (this.hash !== "") {
       // Prevent default anchor click behavior
       event.preventDefault();

       // Store hash
       var hash = this.hash;

       $('html, body').animate({
       scrollTop: $(hash).offset().top
       }, 1500, function(){
       window.location.hash = hash;
       });
      } // End if
    });
    
    // ************ Scroll to top 
    jQuery('.to-top').on('click', function(event) {
        jQuery('html,body').animate({
            scrollTop: 0
        }, 1000);
    });
    jQuery(window).scroll(function() {
        if (jQuery(window).scrollTop() > 100) {
            jQuery('.to-top').fadeIn(1000);
        } else {
            jQuery('.to-top').fadeOut(1000);
        };
    });

});




