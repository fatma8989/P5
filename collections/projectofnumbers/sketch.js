result = null
input = null

function setup() {

	createCanvas(windowWidth, windowHeight);
	input = createInput();
	input.position(70, 65);
	button = createButton('submit');
	button.position(input.x + input.width, 65);
	button.mousePressed(clicked);
	greeting = createElement('h2', 'enter a number');
	greeting.position(70, 20);
	result = createElement("h2", '')
	result.position(70, 90)
	textAlign(CENTER);
	textSize(50);
}

function clicked() {
	Inp = input.value()	
	if(isNaN (Inp) == false){
		result.html(Inp)
	}else {
		result.html("error")

	}	
}

function draw() {

}

