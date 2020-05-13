var numSquares=6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".game");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#messageDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons= document.querySelectorAll(".mode");
var option = document.querySelector("#option");
let hard = document.querySelector(".hard");
let Easy = document.querySelector(".easy");
	
setUpSquares();

	

// function setupModeButtons(){
// 	for(var i = 0; i < modeButtons.length; i++){
// 		modeButtons[i].addEventListener("click", function(){
// 			modeButtons[0].classList.remove("selected");
// 			modeButtons[1].classList.remove("selected");
// 			this.classList.add("selected");
// 			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			
// 		});
// 	}
// }

function selected(){
	hard.classList.remove('selected');
	Easy.classList.remove('selected');
	resetButton.classList.remove('selected');
}

option.addEventListener("click", (event)=>{
	const {target} = event;
	if(target.classList.contains('easy')){
		selected();
		Easy.classList.add('selected');
numSquares =3;
mode();

//colors = generateRandomColors(numSquares);
	}
	if(target.classList.contains('hard')){	
		selected();
		hard.classList.add('selected');
numSquares =6;
mode();
	}
});

function mode(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	
}


resetButton.addEventListener("click", function() {
	//generate all new colors
	
	messageDisplay.textContent="";
	this.textContent="new colors";
	mode();
	//colors = generateRandomColors(numSquares);
	//pick a new random color from array
	//pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	
	// for(var i = 0; i < squares.length; i++) {
	// 	if(colors[i]){
	// 		squares[i].style.display = "block"
	// 		squares[i].style.background = colors[i];
	// 	} else {
	// 		squares[i].style.display = "none";
	// 	}
	// }
	h1.style.background = "steelblue";
	selected();
	resetButton.classList.add('selected');
});



function setUpSquares(){
for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
		
	});
	colorDisplay.textContent = pickedColor;
}}

function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(numSquares) {
	//make an array
	var arr = [];
	//add num random colors to arr
	for(var i = 0; i < numSquares; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}