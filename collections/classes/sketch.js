
listoftriangles = []

function setup() {
	createCanvas(windowWidth, windowHeight);
	



	for (i = 0; i < 20; i++) {
		x = random(windowWidth)
		y = random(windowHeight)
		size = random(20,100)
		rotation = random(-0.1,0.1)
		color = {
			r:random(255),
			g:random(255),
			b:random(255)
		}
		tmp = new Triangle(x,y,size,rotation,color)
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