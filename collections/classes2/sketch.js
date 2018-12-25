t=null

 function setup() {
	createCanvas(windowWidth, windowHeight);
	x =40 
	y=120
	h= 80
	w=80
	t=new Rect (x,y,h,w)

	m = new Rect2(windowWidth/2,windowHeight/2,50,50)


function draw() {
	t.draw()
	m.draw()

}