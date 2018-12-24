
listoftriangles = []

function setup() {
	createCanvas(windowWidth, windowHeight);
	



	for (i = 0; i < 20; i++) {
		tmp = new Triangle(random(windowWidth), random(windowHeight),
		 random(20,100), random(-0.1,0.1))
		listoftriangles.push(tmp)

		//listoftriangles.push(new Triangle(x, y, size))


	}


}

function draw() {
	background (200)
	for (i = 0; i < listoftriangles.length ; i++) {
		listoftriangles[i].draw()
		listoftriangles[i].update ()
	}
	


}