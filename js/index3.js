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
        $("body > .left").animate({"width" : "50px"}, 500);
        $("body > .right").animate({"margin-left": "50px"}, 500);
    }else{
        $("body > .left").animate({"width" : "220px"}, 500);
        $("body > .right").animate({"margin-left": "220px"}, 500);
    }

});

var close_up = 0;

$(".close_up").click(function(){
    if(close_up == 0) {
        $(".page-content-2").animate({"min-height": "50px"}, 200);
        $(".close_up_menu").animate({"height": "0", "margin-top": "0"}, 200, function(){
            $(".close_up_menu").css({"display": "none"});
        });
        close_up = 1;
    }
    else{
        $(".close_up_menu").height(0);
        $(".close_up_menu").css({"display": "block"});
        $(".page-content-2").animate({"min-height": "610px"}, 200);
        $(".close_up_menu").animate({"height": "550px", "margin-top": "20px"}, 200, function(){

        });
        close_up = 0;
    }
});