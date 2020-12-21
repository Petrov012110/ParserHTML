$(function(){
    $('.brand').on('click', function(){
        $(this).parent().find('.brand-product').slideToggle();
        $(this).parent().find('.brand-list').toggleClass('active');
    });

    $("#selectAll").on('click', function() {
        $("input[type=checkbox]").prop("checked", $(this).prop("checked"));
      });
      
      $("input[type=checkbox]").on('click',function() {
        if (!$(this).prop("checked")) {
          $("#selectAll").prop("checked", false);
        }
      });
});