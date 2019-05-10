const secondHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  // get the date right now
  const now = new Date();
  // get the second we are on now
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hour = now.getHours();
  // get the degrees around the circle depending on the second we're at
  const secondsDegrees = (seconds / 60) * 360 + 90;
  const minutesDegrees = (minutes / 60) * 360 + 90;
  const hourDegrees = (hour / 12) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  const time = hour + ':' + minutes + ':' + seconds;
  console.log(time);
}

function runClock() {
  // run set date every 1000ms (1sec)
  setInterval(setDate, 1000);
}
