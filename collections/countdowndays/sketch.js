counter = 0
timeIt = 0


timeleft = 20


function convertsecond(s){
var m = minute();
var h = hour();
var s = second();
	sec = s%60;
	hr = min * 60
	return text('Current minute: \n' + m, 5, 50);
	text('Current hour:\n' + s, 5, 50);
	
text('Current hour:\n' + h, 5, 50);
	
	
	//nf(hr,2) + ':' + nf (min,2 ) + ':' + nf(sec,2);
}



function setup() {


	var timer = select('#timer')
	timer.html(convertsecond(timeleft - counter))


	function timeIt() {
		counter++
		timer.html(convertsecond(timeleft - counter))
		if (timeleft<=0){
			counter =0 
		}
	}


	setInterval(timeIt, 1000)

}