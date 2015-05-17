/*global $:false */
(function () {
   'use strict';
   // this function is strict..

$(document).ready(function() {
  //Plays Street Fighter Music on Load
  //playStreet();
  var musicCheck = 1;
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
    if ( e.keyCode === 88) {
      //Plays Cool Music
      if (musicCheck == 1){
      playCool();
    }

      console.log('keydown');
      $('.ryu-ready').hide();
      $('.ryu-cool').show();
      musicCheck = 0;
    }
  })

  .keyup(function (e) {
    if (e.keyCode ===  88) {
      console.log('keyup');
      $('#cool-sound')[0].pause();
      $('#cool-sound')[0].load();
      $('.ryu-ready').show();
      $('.ryu-cool').hide();
      musicCheck = 1;
    }
  });



});


function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

function playCool () {
  $('#cool-sound')[0].volume = 0.5;
  $('#cool-sound')[0].load();
  $('#cool-sound')[0].play();
}

function playStreet () {
  $('#street-sound')[0].volume = 0.5;
  $('#street-sound')[0].load();
  $('#street-sound')[0].play();
}

}());
