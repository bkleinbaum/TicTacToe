var Game = function(e) { //my game is initiliazing itself
	this.element = e; //this is that!!
}

var xSpot = "X"; //xSpot is where the X will live
var oSpot = "O"; //oSpot is where the O will live
var marker = xSpot; //marker represents each click/choice of the FIRSTUSER
var computer = false;
var plays = 0; //switch back and forth between players in order to check the moves

var switchPlayer = function() { //this is how we switch players, FIRSTUSER is set to X by default
	plays ++; //in order to check our results, we have to go back and forth
	if(marker == xSpot) { //after every X move
		marker = oSpot; //change the marker so O can make a move
	} else { //if O has made a move
		marker = xSpot; //switch the status back
	}
};

function div() { //our game board
var div = $('body').append('<div id="board">');
$('#board').append("<div id='0' class='cell'></div><div id='1' class='cell'></div><div id='2' class='cell'></div>");
$('#board').append("<div id='3' class='cell'></div><div id='4' class='cell'></div><div id='5' class='cell'></div>");
$('#board').append("<div id='6' class='cell'></div><div id='7' class='cell'></div><div id='8' class='cell'></div>");
return div;
};

Game.prototype.oneGo = function() { //this is how we take a turn and assign our X or O:
	this.element.addClass(marker); //for every click, add a marker INTO the class of the div with X or O
	this.element.data('player', marker); //for every click, add 'player' and X or O
	this.element.html( "<img src='img/" +marker+ ".png'>") //depending on whether it is X or O, assign the appropriate image
	//this.element.html(marker); //changed the content of the div to hold the HTML of the marker variable (X or O)
	gameState(); //compare all cells with an X or O in the class
	switchPlayer(); //if there are no wins, switch players
};

var gameState = function() { //check the current board for potential wins
	var wins = [ //options are for a 3 by 3 board
	[0,1,2], [3,4,5], [6,7,8],
	[0,3,6], [1,4,7], [2,5,8],
	[0,4,8], [2,4,6]
	]
	for (var i = 0; i < wins.length; i++) { //for every X or O on the board, compare them for wins: figure out what the data of player is - player X or player O
		if( $('#' + wins[i][0]).data('player') === marker && //compare first cell of all winning combos with player data X/O
		$('#' + wins[i][1]).data('player') === marker && //compare second ...
		$('#' + wins[i][2]).data('player') === marker ) { //basically check against all potential wins ...
			alert(marker + " wins"); //if there are three of the same player X/O in a row, content of marker (oSpot or Xspot) wins!
			resetGame(); //then reset the game!
		} //if that didnt happen,
		if (plays === 8) { //if we hit the max number of boxes and there hasnt been a winner
			alert("draw"); //it is a draw
			resetGame(); //so reset the game
			break;
		};
	} $('#div').html(''); //when there is a winner or a draw clear all the Xs and Os from the board
};

var resetGame = function() {
	location.reload(); //every time we need to reset the gsme, this is what resets it - it just reloads itself back in the same location
};

Game.prototype.listen = function() { //this is our clicking part
	var that = this; //when this is that
	this.element.on('click', function(){ //on everything clicked within our scope, click!
		that.oneGo(); //start our first turn! go!
		$(this).off('click'); //turn off!!!!!!
	});
};

$(document).ready(function() {
  div(); //this creates our table
	$('.cell').each( function() { //this is listening for clicks on every div cell on my board
		var cell = new Game($(this)); //whenever cell is clicked on, start a new game
		cell.listen(); //listen to cells for clicks
	});
	$('.cell').on('mouseenter', function() {
    p = new Audio('raptor.mp3');
    p.play();
  });
});
