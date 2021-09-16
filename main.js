	// Line 2 makes a variable to manipulate the canvas.
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");

	//Makes variables to define Height, Width, X coordinate, and Y coordinate.
	var carHeight = 90;
	var carWidth = 100;

	var car_x = 10;
	var car_y = 10;
	
	//These 2 lines define two variables to hold the sources.


	var backgroundImage = "parkingLot.jpg";
	var greenCarImage = "car2.png";
	var backgroundImageTag = "";
	var greenCarImageTag = "";

	//This uploads the background.
	backgroundImageTag = new Image();
	backgroundImageTag.src = backgroundImage;
	window.onload = function() {
		  ctx.drawImage(backgroundImageTag, 0, 0, canvas.width, canvas.height);
	}

	//This determines which ASCII value the key is.
	var keyPressed = 0;
	window.addEventListener('keydown', determineASCII);
	

	function add() {
		//This is to load the background
		ctx.drawImage(backgroundImageTag, 0, 0, canvas.width, canvas.height);	
		
	    //This is to upload the Green Car.
		greenCarImageTag = new Image();
		greenCarImageTag.src = greenCarImage;
		ctx.drawImage(greenCarImageTag, car_x, car_y, carWidth, carHeight);
	}

	//E is a pre-written variable that Javascript created. However, always remember to pass it in your functions!
	function determineASCII(e) {
	    var keyPressed = e.keyCode;
		if(keyPressed == '38') {
			console.log("You pressed the up-arrow key.");
			up();
		}

		if(keyPressed == '40') {
			console.log("You pressed the down-arrow key.");
			down();
		}

		if(keyPressed == '37') {
			console.log("You pressed the left-arrow key.");
			left();
		}

		if(keyPressed == '39') {
			console.log("You pressed the right-arrow key.");
			right();
		}
	}

	//This is where we define the functions - Up, Down, Left, And Right.
	function up() {
		if (car_y >= 0) {
			car_y = car_y - 10;
			console.log("x = " + car_x + "y = " + car_y);
			add();
		}
	}

	function down() {
		if (car_y <= 500) {
			car_y = car_y + 10;
			console.log("x = " + car_x + "y = " + car_y);
			add();
		}
	}

	function left() {
		if (car_x >= 0) {
			car_x = car_x - 10;
			console.log("x = " + car_x + "y = " + car_y);
			add();
		}
	}

	function right() {
		if (car_x <= 700) {
			car_x = car_x + 10;
			console.log("x = " + car_x + "y = " + car_y);
			add();
		}
	}

	
	