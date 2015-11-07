$(document).ready(function(){

    // MetsiMenu
    $('#side-menu').metisMenu();

});

$(".right_button").click(function(){
    $('#side-menu').hide();
    setInterval(function(){
        $('#side-menu').fadeIn(500);
    }, 100);
});