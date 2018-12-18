

listOfcirclesandsequres = []

width=0

// {
// 	person:{
// 		name:"ASDF"
// 	}
// 	cars:{
// 		name:"ASDF"
// 	}
// }

function setup() {
	createCanvas(windowWidth, windowHeight);

	width =100
	for(i=0 ; i<7 ; i++){
	
		
		listOfcirclesandsequres.push({
			s: {x:i*width+100,y:400},
			c:{x:i*width+100,y:400}


		})

		

	}
	
	
}

function draw() {
	background (200);
	for(i=0 ; i<listOfcirclesandsequres.length ; i++){
		
		s=listOfcirclesandsequres[i].s
		c=listOfcirclesandsequres[i].c

		
		fill('red');
	rect(s.x,s.y,width,width);
	rectMode(CENTER)

	

	
	colorMode(HSB);
    fill(255, 204, 100);
	ellipse (c.x,c.y,width,width)
	
	}
}