console.log('who do you think you are?');

//TEST: render a game board using only jQuery

function table() {
var divs = $('body').append('<div id="container">');
var toprow = $('#container').append($('<div>').attr('class', 'topleft'),$('<div>').attr('class', 'topcenter'),$('<div>').attr('class', 'topright'));
var middlerow = $('#container').append($('<div>').attr('class', 'middleleft'),$('<div>').attr('class', 'middlecenter'),$('<div>').attr('class', 'middleright'));
var bottomrow = $('#container').append($('<div>').attr('class', 'bottomleft'),$('<div>').attr('class', 'bottomcenter'),$('<div>').attr('class', 'bottomright'));
}


$(document).ready(function(){

table();

});
