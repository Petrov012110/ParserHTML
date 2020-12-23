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
});

