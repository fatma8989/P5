listofpoints = []


function setup() {
	createCanvas(windowWidth, windowHeight);

	for (i = 0; i < 1000; i = i + 0.01) {

		// p = {
		// 	x: i,
		// 	y: 0

		// }

		// p = update(p)
		
		p = update2(i)
		listofpoints.push(p)

	}
	console.log(listofpoints.length)

}
function update2(x){
y = sin(x)
y = map (y,-1,1,-100,100)
x=x*10+10
y = y + 300
return {
	x: x,
	y:y
}
}

function update(u) {
	u.y = sin(u.x)
	u.y = map(u.y, -1, 1, -100, 100)
	u.x = u.x * 10 + 10
	u.y = u.y + 300
	return u

}

function draw() {
	background(200);
	for (i = 0; i < listofpoints.length; i++) {
		asdf = listofpoints[i]


		point(asdf.x, asdf.y);
	}


}