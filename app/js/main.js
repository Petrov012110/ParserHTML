$(function(){
    $('.brand').on('click', function(){
        $(this).parent().find('.brand-product').slideToggle();
        $(this).parent().find('.brand-list').toggleClass('active');
        $(this).parent().find('span').toggleClass('active');
    });
    $('.brand-product__li').on('click', function(){
        $(this).toggleClass('active__li');
    });

    $("#selectAll").on('click', function() {
        $(".che").prop("checked", $(this).prop("checked"));
      });
      
      $(".che").on('click',function() {
        if (!$(this).prop("checked")) {
          $("#selectAll").prop("checked", false);
        }
      });


      function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
      
      function validate() {
        const $result = $("#result");
        const email = $("#email").val();
        $result.text("");
      
        if (validateEmail(email)) {
          $result.text(email + " is valid :)");
          $result.css("color", "#42c28c");
        } else {
          $result.text(email + " is not valid :(");
          $result.css("color", "#fc5454");
        }
        return false;
      }
      
      $("#validate").on("click", validate);
});

