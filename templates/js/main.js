

$(".logout").hover(function() {
    $( this ).fadeOut( 100 );
    $( this ).fadeIn( 500 );
  });

$("body").ready(function() {
    $("#register").hide();
    $("#login").hide();
    $("#user_loged_in").hide();
});
