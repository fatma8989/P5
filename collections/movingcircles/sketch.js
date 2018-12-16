listOfCircles = []
size = 0 
function setup() {
	createCanvas(windowWidth, windowHeight);
	size = 50
	for(i = 0 ; i < 40 ; i ++){
		listOfCircles.push({
			x:random (windowWidth),
			y:random (windowHeight),
			r: random(255),
			g: random(255),
			b: random(255)
		})
	}
	
}
function move(u) {
	if(u < windowWidth){
		u=u+1
	}
	return u


}
function draw() {
	background(200);
	for(i = 0 ; i < 40 ; i ++){
		x = listOfCircles[i].x
		y = listOfCircles[i].y
		r=  listOfCircles[i].r 
		
		g= listOfCircles[i].g
		b= listOfCircles[i].b
		fill(r,g,b);
		ellipse(x,y,size,size);

		//listOfCircles[i].x=move(x);
	}
    
}