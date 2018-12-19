listofcustomshapes = [

]
r=0
a=0

function setup() {

	createCanvas(windowWidth, windowHeight);
	frameRate(10)

	for (i = 0; i < 8; i++) {
		customshape={
			squre:{
				x:0,
				y:0
			},
			circle:{
				x:0,
				y:0
			},
			line:{
				x1:0,
				x2:0 ,
				y1:0,
				y2:0
			}
		}
		customshape.squre.x= i * 200+ 70
		customshape.squre.y=200
		
		customshape.circle.x=i * 200 + 70
		customshape.circle.y=200
		customshape.line.x1= customshape.squre.x
		customshape.line.x2=customshape.squre.x
		customshape.line.y1=150
		customshape.line.y2=customshape.line.y1+100

		listofcustomshapes.push(customshape)

		// listofcustomshapes.push({
		// 	squre:{

		// 	}
		// 	x: i * 50 + 10,
		// 	y: 200
		// })
	}



}

function draw() {
	background(200)

	for (i = 0; i < listofcustomshapes.length; i++) {

		fatma = listofcustomshapes[i]
		
		rectMode(CENTER)
		
		push();
		translate(fatma.circle.x,fatma.circle.y);
		rotate(r);
		rect (0,0,100,100)
		pop ();
		ellipse(fatma.circle.x,fatma.circle.y, 100, 100)
		push();

		// xt = (fatma.line.x1 - fatma.line.x2)/2
		// yt = (fatma.line.y1- fatma.line.y2)
		translate(fatma.circle.x,fatma.circle.y);
		rotate (a)
		line(0,0,50,50);
		pop ();
	}
	r+=0.1
	a=a-0.1

}