let goal = new Date("2019-01-01")
let timenow = new Date()
days = null 
hrs= null
mins= null
sec=null
// counter = 0
// timeIt = 0


// timeleft = 20


// function convertsecond(s){
// var m = minute();
// var h = hour();
// var s = second();
// 	sec = s%60;
// 	hr = min * 60
// 	return text('Current minute: \n' + m, 5, 50);
// 	text('Current hour:\n' + s, 5, 50);
	
// text('Current hour:\n' + h, 5, 50);
	
	
	//nf(hr,2) + ':' + nf (min,2 ) + ':' + nf(sec,2);
// }



function setup() {
	let countdown = select(".countdown")
	countdown.position(windowWidth/2-200,windowHeight/2-200)
	let goal = new Date("2019-01-01")
	let timenow = new Date()
	let result = goal-timenow
	 days = Math.floor((result)/(1000*60*60*24))
	 hrs = Math.floor ((result/ (1000*60*60))%24)
	 mins = Math.floor ((result/ (1000*60))%60)
	 sec = Math.floor ((result/ (1000))%60)
	 days = days > 0 ? days : 0
	 hrs = hrs > 0 ? hrs : 0
	 mins = mins > 0 ? mins : 0
	 sec = sec > 0 ? sec : 0


	// var timer = select('#timer')
	// timer.html(convertsecond(timeleft - counter))




}
function timeIt() {
	counter++
	timer.html(convertsecond(timeleft - counter))
	if (timeleft<=0){
		counter =0 
	}
}


 setInterval(setup, 1000)

function draw(){
t = select ("#days")
t.html(days)
t = select ("#hrs")
t.html(hrs)
t = select ("#mins")
t.html(mins)
t = select ("#sec")
t.html(sec)
}