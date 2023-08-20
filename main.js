//Create a reference for canvas 

//Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";
canvas = document. getElementById("myCanvas");
ctx = canvas. getContext ("2d");

greencar_width = 75;
greencar_height = 100;

greencar_x = 5;
greencar_y= 225;

//Set initial position for a car image.

function add() {
	background_imgTag = new Image() ;
background_imgTag.onload = uploadBackground;
background_imgTag.src = background_image;
greencar_imgTag = new Image();
greencar_imgTag.onload = uploadgreencar;
greencar_imgTag.sc = greencar_image;
}

window. addEventListener ("keydown", my_keydown);

function mykeydown(e)

keyPressed = e. keyCode;
console. log (keyPressed);
if(keyPressed == '38')
{ 
	up();
console. log("up");
}

function uploadBackground() {
	ctx.drawImage (background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	etx.drawImage(greencar_imgTag,greencar_x,greencary,freencar_width,greencar_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >=0)
{
greencar_y , greencar_y - 10;
console. log("When up arrow is pressed, x = " + greencar_x + " | y = " +greencar_y);
uploadBackground();
uploadgreencar();
}
}
function down()
{
	//Define function to move the car downward
}

function left()
{
	//Define function to move the car left side
}

function right()
{
	//Define function to move the car right side
}
