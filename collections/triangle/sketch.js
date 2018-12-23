listoftriangles = []
size = 0
r = 0

function setup() {
	frameRate(10)
	createCanvas(windowWidth, windowHeight);
	size = 50
	for (i = 0; i < 90; i++) {
		lx = random(windowWidth)
		ly = random(windowHeight)
		dx = random(-1, 2)
		dy= random(-1,2)
		dx = Math.floor(dx)
		dy = Math.floor(dy)

		if (dx==0){
			dx= 1
		}
		if (dy==0){
			dy= 1
		}
		listoftriangles.push({

			p1: {
				x: lx,
				y: ly
			},
			p2: {
				x: lx + size,
				y: ly
			},
			p3: {
				x: lx + size / 2,
				y: ly - size / 2
			},
			dirction: {
				x: dx,
				y:dy

			}


		})
		// p1.x = random(windowWidth)
		// p1.y= random (windowHeight)
		// p2.x= p1.x+10
		// p2.y= p1.y
		// p3.x=p1.x+5
		// p3.y=p1.y+5

	}



}

function move(triangle) {
	tcenterx =s.p1.x + size / 2
	tcentery =s.p1.y + size / 4
	if(tcenterx <20 || tcenterx> windowWidth-20){
		triangle.dirction.x*=-1
	}
	if(tcentery<20 || tcentery> windowHeight-20){
		triangle.dirction.y*=-1
	}

	triangle.p1.x += triangle.dirction.x*5
	triangle.p2.x += triangle.dirction.x*5
	triangle.p3.x += triangle.dirction.x*5

	triangle.p1.y += triangle.dirction.y*5
	triangle.p2.y +=  triangle.dirction.y*5
	triangle.p3.y += triangle.dirction.y*5

	return triangle
}

function draw() {

	background(200)
	
	
	

	for (i = 0; i < listoftriangles.length; i++) {
		s = listoftriangles[i]

		push();
		translate(s.p1.x + size / 2, s.p1.y - size / 4)
		rotate(r)
		translate(-(s.p1.x + size / 2), -(s.p1.y - size / 4))
		triangle(s.p1.x, s.p1.y, s.p2.x, s.p2.y, s.p3.x, s.p3.y);
		 pop();

		s = move(s)

	}
	r = r + 0.01
}