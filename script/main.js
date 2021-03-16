var today = new Date();
var maanden = new Array('januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december');
var dagenWeek = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];
document.getElementById('datum').innerHTML = dagenWeek[today.getDay()] + ' ' + today.getDate() + ' ' + maanden[today.getMonth()];

function klok() {

	var today = new Date();
	var seconds = today.getSeconds();
	var minutes = today.getMinutes();
	var hour = today.getHours();


	if (hour >= 6 && hour <= 12) {
		document.getElementById('main').classList.remove('nacht');
		document.getElementById('main').classList.add('ochtend');
	} else if (hour > 12 && hour <=18){
		document.getElementById('main').classList.remove('ochtend');
		document.getElementById('main').classList.add('dag');
	} else if (hour > 18 && hour <=24){
		document.getElementById('main').classList.remove('dag');
		document.getElementById('main').classList.add('avond');
	} else{
		document.getElementById('main').classList.remove('avond');
		document.getElementById('main').classList.add('nacht');

	}
	

	if (seconds < 10) {
		seconds = '0' + seconds;
	}
	if (minutes < 10) {
		minutes = '0' + minutes;
	}
	if (hour < 10) {
		hour = '0' + hour;
	}
	document.getElementById('clock').innerHTML = today.getHours() + ':' + minutes + ':' 
	+ seconds;

}

klok();
setInterval(klok, 1000);





