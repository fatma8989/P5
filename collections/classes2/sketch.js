listofrect = []

function setup() {
	createCanvas(windowWidth, windowHeight);

	for (i = 0; i < 10; i++) {
		listofrect.push(

			new Rect(random(windowWidth), random(windowHeight), 80, 80)
		)
	}

}

function draw() {
	background(200)

	// for (i=0 ; i<listofrect.length ; i++){

	// 	listofrect[i].draw()
	// }
	for(let i of listofrect){  //same the old for loop  i = object. 

		i.draw()
	}

// for(let i in listofrect) >> i = index 
}

function mouseDragged() {
	// for (i=0 ; i<listofrect.length ; i++){
	// 	listofrect[i].mousedrag(mouseX,mouseY)

	// }
	for(let i of listofrect){
		i.mousedrag(mouseX,mouseY)
	}

	
}