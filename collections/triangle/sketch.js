

listoftriangles=[]
r=0
width=0

function setup() {
	frameRate(10)
	createCanvas(600, 600);
	width=30
for (i=0 ; i<90; i++){
	listoftriangles.push({

		s:{x1:30,y1:75,x2:58,y2:20,x3:86,y3:75}
		
	
	})
	
	
}
function move(u){
if (u<600){
	u = u+1
}return u
}

}

function draw() {

	background (200)
translate();
	for (i=0 ; i <listoftriangles.length;i++){
		s =listoftriangles[i].s
		
		random (s)
		push(s.x,s.y);
		
		translate ()
	triangle(s.x1,s.y1,s.x2,s.y2,s.x3,s.y3);
	pop();
	
	}
	
}