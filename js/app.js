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
    console.log(event);
    playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show().animate(
      {'left': '1020px'} ,
      500,
      function() {
        $(this).hide();
        $(this).css('left', '610px');
      }
      );
    //play hadouken sound
    //show and animate hadouken to end of screen
  })

  .mouseup(function() {
    console.log('mouseup');
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
    //Ryu goes back to ready position
  });

  $(document).keydown(function (e) {
    if ( e.keycode == 88) {
      console.log('keydown');
      $('.ryu-ready').hide();
      $('.ryu-cool').show();
    }
  })

  .keyup(function (e) {
    if (e.keycode ==  88) {
      console.log('keyup');
      $('.ryu-ready').show();
      $('.ryu-cool').hide();
    }
  });



});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
