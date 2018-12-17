
listOfsequres=[]
listOfcircles=[]
width=0



function setup() {
	createCanvas(windowWidth, windowHeight);
	width =100
	for(i=0 ; i<10 ; i++){
		listOfcircles.push({
			x: i*width+100,
			y: 400,

		})
		listOfsequres.push({
		x: i*width+100,
		y: 100

		})

	}



		
	
}

function draw() {
	background (200);
	for(i=0 ; i<10 ; i++){
		x=listOfsequres[i].x
		y=listOfsequres[i].y
	
	rect(x,y,width,width);
	rectMode(CENTER)


	x=listOfcircles[i].x
	y=listOfcircles[i].y
	ellipse (x,y,width,width)
	}
}