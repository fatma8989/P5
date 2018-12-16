listofcircle=[];

function setup() {
	createCanvas(windowWidth, windowHeight);

	for(i=0 ; i <4; i++){

		if (i ==0){
			listofcircle.push({
				x:50 ,
				y:50
						
	
			})			
		}else if(i==1){
			listofcircle.push({
				x:windowWidth-100 ,
				y:0+50
						
	
			})	

		}else if (i==2){
			listofcircle.push({
				x:windowWidth-100,
				y:windowHeight-100
						
	
			})	
		

		}else if (i==3){
			listofcircle.push({
				x:50,
				y:windowHeight-100
						
	
			})	

		}
		// listofcircle.push({
		// 	x:70 ,
		// 	y:80		

		// })


	}


}


function draw() {
	
	background(200)
	for(i=0 ; i<4; i++){
		x=listofcircle[i].x
		y=listofcircle[i].y
		
		r=random(255);
		g=random(255);
		b=random(255);
		fill (r,g,b);
	
	ellipse(x,y,50,50);
	}

}