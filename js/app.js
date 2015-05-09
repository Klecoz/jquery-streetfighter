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
  })

  .mousedown(function() {
    console.log('mousedown');
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').show();
    //play hadouken sound
    //show and animate hadouken to end of screen
  })

  .mouseup(function() {
    console.log('mouseup');
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
    //Ryu goes back to ready position
  });

});
