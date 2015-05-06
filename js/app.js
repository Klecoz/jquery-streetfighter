$(document).ready(function() {
  //mouseover .ryu div
  $('.ryu').mouseenter(function() {
    //hide .ryu-still GIF and show .ryu-ready GIF
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })

  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  });

});
