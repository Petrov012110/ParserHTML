$(function(){
    $('.brand').on('click', function(){
        $(this).parent().find('.brand-product').slideToggle();
        $(this).parent().find('.brand-list').toggleClass('active');
        $(this).parent().find('span').toggleClass('active');
    });
    $('.brand-product__li').on('click', function(){
        $(this).toggleClass('active__li');
    });
    $('.menu-button').on('click', function(){
        $('body').toggleClass('overlay-body');
        $(".sidebar-component").toggleClass("active");
        if ($(".sidebar-component").hasClass('active')) {
          $('<div class="overlay">&nbsp;</div>').prependTo($('body'));
      } else {
          $('.overlay').remove();
      }
    });
    
    $("#selectAll").on('click', function() {
        $(".che").prop("checked", $(this).prop("checked"));
      });
      
      $(".che").on('click',function() {
        if (!$(this).prop("checked")) {
          $("#selectAll").prop("checked", false);
        }
      });

      // function validateEmail(email) {
      //   const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      //   return re.test(email);
      // }
      
      // function validate() {
      //   // const email = $("#email").val();
      //   const $result = $("#result");
      //   const $btn = $("#validate");
      //   $result.text("");
      
      //   if (validateEmail(email)) {
      //     $result.text(email + " is valid");
      //     $result.css("color", "#42c28c");
      //     $("#result").addClass('changed');
      //     $btn.removeAttr('disabled');
      //   } else {
      //     $result.text(email + " is not valid");
      //     $result.css({"color": "#fc5454"});
      //     $("#result").addClass('changed');
      //     $btn.prop('disabled', 'true');
      //   }
      //   return false;
      // }      
      
      // $(".btn").on("click", validate);

      $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        autoplay: true,
        autoplaySpeed: 7000,
      });


      
});




