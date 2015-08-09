var Game = function(e) { //my game is initiliazing itself on a click
	this.element = e; //this is that!!
}

var xSpot = "X"; //xSpot is where the X will live
var oSpot = "O"; //oSpot is where the O will live
var marker = xSpot; //marker represents each click/choice of the FIRSTUSER
var plays = 0; //switch back and forth between players in order to check the moves
var yesOrNo = false;

var switchPlayer = function() { //this is how we switch players, FIRSTUSER is set to X by default
	plays ++; //in order to check our results, we have to go back and forth
	if(marker == xSpot) { //after every X move
		marker = oSpot; //change the marker so O can make a move
	} else { //if O has made a move //switch the status back
		marker = xSpot;
		//randomChoice();
	}
	$('.turns').text(marker + 's turn!');
};

function randomChoice(){
var empty = $('.cell:contains("")');
var randIndex = Math.floor(Math.random()*empty.length);
var jurassicAI = empty.eq(randIndex);
if (jurassicAI.contents().length == 0) {
jurassicAI.addClass("O");
jurassicAI.data('player', 'O');
jurassicAI.html('<img src="img/O.png">');
} else {
	randomChoice()
} else {
	alert("boooo")	
}
}
randomChoice();

function div() { //generating our game board
	var sizeOfBoard = 9 //3 by 3
	var startAt = 0; //start at 0
	for (i=0;i<sizeOfBoard;i++) { //for every
		$('#board').append($('<div>').attr('id', [i])); //gives each div an id
		$('#' + [i]).addClass('cell'); //gives each id a class
	};
	return div;
};

Game.prototype.oneGo = function() { //if they choose single or AI
	if (yesOrNo === false) { //if they choose single, which is default
	this.element.addClass(marker); //for every click, add a marker INTO the class of the div with X or O
	this.element.data('player', marker); //for every click, add 'player' and X or O
	this.element.html( "<img src='img/" +marker+ ".png'>") //depending on whether it is X or O, assign the appropriate image
	//this.element.html(marker); //changed the content of the div to hold the HTML of the marker variable (X or O)
	gameState(); //compare all cells with class/data of X or O for wins
	//randomLetter();
	switchPlayer(); //if there are no wins, switch players
	//resultsArea();
} if (yesOrNo === true) { //to play the AI
	this.element.addClass(xSpot); //it adds its X or O to the class
	this.element.data('player', xSpot); //adds its X or O to the data
	this.element.html( "<img src='img/" +xSpot+ ".png'>"); //adds its image into the div
	randomChoice(); //the AI searches all the empty divs and chooses a random one
	gameState(); //checks for a win
	switchPlayer(); //switches back to the user
}
stop; //then stop
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
			//resetGame(); //then reset the game!
		} //if that didnt happen,
		if (plays === 8) { //if we hit the max number of boxes and there hasnt been a winner
			alert("draw"); //it is a draw
			//resetGame(); //so reset the game
			break;
		};
	}
	$('#div').html(''); //when there is a winner or a draw clear all the Xs and Os from the board
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
	$('body').append('<div id="board">'); //this creates our game container
	div(); //runs our create board function
	$('.cell').each( function() { //this is listening for clicks on every div cell on my board
		var cell = new Game($(this)); //whenever cell is clicked on, start a new game
		cell.listen(); //listen to cells for clicks
	});
	$('.cell').on('mouseenter', function() {
    //p = new Audio('raptor.mp3'); //TURN BACK ON RAPTOR SOUND!
    p.play();
  });
});
