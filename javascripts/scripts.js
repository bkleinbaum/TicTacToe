console.log('who do you think you are?');

//PURPOSE: play tic tac toe

//TEST: render a game board table using only jQuery

function table() {
var table = $('body').append('<table id="gameboard"><tbody>');
$('#gameboard').append("<tr><td id='one'></td><td id='two'></td><td id='three'></td></tr>");
$('#gameboard').append("<tr><td id='four'></td><td id='five'></td><td id='six'></td></tr>");
$('#gameboard').append("<tr><td id='even'></td><td id='eight'></td><td id='nine'></td></tr>)");
return table;
}

//test: generate divs for a square giving each new div an id of box + [i]
// number*number for (i=0; i<number)
//function selectSize(number){
//var gameboard = $('<div>').addClass('board');
//var boxes;
//}

//TEST: account for each td as one spot on the board
function allTds() {
var board;
board = ["", "", "", "", "", "", "", "", ""];
$('td').each(function(index){
  board[index] = $('this').text();
});
return board;
};

//TEST: check tds for three of the same kind within all the tds and log the results
function checkGame(first, second, third){
  if (first === 'X' && second === 'X' && third === 'X') { //if three X, user wins
    return 1;
  } else if (first === 'O' && second === 'O' && third === 'O') { //three O, computer wins
    return -1;
  } else {
    return 0; //no winner/tie/keep playing
  }
}

//TEST: check the td row/column for three of a kind win
function computer(board){
//  var board = $('#gameboard')
return checkGame(allTds[0])+checkGame(allTds[1])+checkGame(allTds[2]) //TOP ROW
}

//TEST: check for empty tds and select one randomly for computer turn

//TEST: generate result of game from data within the tds
function gamestatus(){
var target;
target = $("#results"); //DIV THAT HOLDS RESULTS
if (result > 0) {
  target.text("USER WINS");
} else if (result < 0) {
  target.css("COMPUTER WINS");
} else {
  target.text("TIE");
}
}

function test() {
  var X;
  X = $("this");
  if (X.text("") !== "" || computer(allTds) !== 0) {
    return;
  }
  X.text("X");
}

function applyX(){
  $('#gameboard').on('click', 'td', function(){
    $(this).text("X");
  });
};



//TEST:

$(document).ready(function(){


table();
$("#gameboard").click(test);

});
