setInterval(() => {
	let hourContainer = document.getElementById('hour');
	let minuteContainer = document.getElementById('minute');
	let secondContainer = document.getElementById('second');

	let currentDate = new Date();

	let currentHour = currentDate.getHours();
	let currentMinute = currentDate.getMinutes();
	let currentSecond = currentDate.getSeconds();

	let hourRotation = 30 * currentHour + currentMinute / 2; //converting current time
	let minuteRotation = 6 * currentMinute;
	let secondRotation = 6 * currentSecond;

	hourContainer.style.transform = `rotate(${hourRotation}deg)`;
	minuteContainer.style.transform = `rotate(${minuteRotation}deg)`;
	secondContainer.style.transform = `rotate(${secondRotation}deg)`;
}, 1000);
