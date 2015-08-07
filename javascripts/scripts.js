var Game = function(e) {
	this.element = e;
}

var xSpot = "X";
var oSpot = "O";
var marker = xSpot;
var plays = 0;

var switchPlayer = function() {
	plays ++;
	if(marker == xSpot) {
		marker = oSpot;
	} else {
		marker = xSpot;
	}
};

function div() {
var div = $('body').append('<div id="board"><tbody>');
$('#board').append("<div id='0' class='cell'></div><div id='1' class='cell'></div><div id='2' class='cell'></div>");
$('#board').append("<div id='3' class='cell'></div><div id='4' class='cell'></div><div id='5' class='cell'></div>");
$('#board').append("<div id='6' class='cell'></div><div id='7' class='cell'></div><div id='8' class='cell'></div>");
return div;
}

Game.prototype.oneGo = function() {
	this.element.addClass(marker);
	this.element.text(marker);
	gameState();
	switchPlayer();
};

var gameState = function() {
	var wins = [
	[0,1,2], [3,4,5], [6,7,8],
	[0,3,6], [1,4,7], [2,5,8],
	[0,4,8], [2,4,6]
	]
	for (var i = 0; i < wins.length; i++) {
		if( $('#' + wins[i][0]).text() === marker &&
		$('#' + wins[i][1]).text() === marker &&
		$('#' + wins[i][2]).text() === marker ) {
			alert(marker + " wins");
			resetGame();
		}
		if (plays === 8) {
			alert("draw");
			resetGame();
			break;
		};
	} $('#masterdiv div').html(''); //when there is a winner or a draw clear all the Xs and Os from the board
};

var resetGame = function() {
	location.reload();
};

Game.prototype.listen = function() {
	var that = this;
	this.element.on('click', function(){
		that.oneGo();
		$(this).off('click');
	});
};

$(document).ready(function() {
  div();
	$('.cell').each( function() {
		var cell = new Game($(this));
		cell.listen();
	})
});
