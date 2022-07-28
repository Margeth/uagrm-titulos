var daynight = document.querySelector('.content');
var intervalID = window.setInterval(myCallback, 3000);

function myCallback() {
    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    console.log(currentTime)
    	if (hours < 12){
        console.log('De dia, que calor');
        console.log(hours);
        daynight.classList.remove('noche');
        daynight.classList.add('dia');
    	}
    	if(hours >= 12){
       	console.log('Nochee ');
        console.log(hours);
        daynight.classList.remove('dia');
        daynight.classList.add('noche');
    	}
}
