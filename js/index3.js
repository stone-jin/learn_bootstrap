/**
 * Created by bing on 2015-11-08.
 */
$(document).ready(function(){

   $('#side-menu').metisMenu();

    $('#example').dataTable();
});

$('.test_btn').click(function(){
    $("body").toggleClass('mini-navbar');
    if($("body").hasClass("mini-navbar")){
        $(".left").animate({"width" : "50px"}, 300);
        $(".right").animate({"margin-left": "50px"}, 300);
    }else{
        $(".left").animate({"width" : "220px"}, 300);
        $(".right").animate({"margin-left": "220px"}, 300);
    }

});