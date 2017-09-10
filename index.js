(function() {
  const secondHand = document.querySelector('.clock-second');
  const minuteHand = document.querySelector('.clock-minute');
  const hourHand = document.querySelector('.clock-hour');

  let currentMinute = null;
  let currentHour = null;

  setInterval(updateClock, 1000);

  function updateClock() {
    const date = new Date();
    const newSecond = date.getSeconds();
    const newMinute = date.getMinutes();
    const newHour = date.getHours();


    let currentDegrees = newSecond/60*360+90;

    if (currentDegrees === 0) {
      fixTransition(secondHand);
    } else {
      secondHand.style.transform = `rotate(${currentDegrees}deg)`;
    }

    if (newMinute !== currentMinute) {
      currentMinute = newMinute;
      currentDegrees = currentMinute/60*360+90;
      if (currentDegrees === 0) {
        fixTransition(minuteHand);
      }
      else {
        minuteHand.style.transform = `rotate(${currentDegrees}deg)`;
      }
    }

    if (newHour !== currentHour) {
      currentHour = newHour;
      currentDegrees = (currentHour + currentMinute/60 )/12*360+90;
      if (currentDegrees === 0 ) {
        fixTransition(hourHand);
      } else {
        hourHand.style.transform = `rotate(${currentDegrees}deg)`;
      }
    }
  }

  function fixTransition(elementToFix) {
    elementToFix.style.transform = `rotate(360deg)`;
    elementToFix.addEventListener('transitionend', function disableTransition() {
      elementToFix.style.transition = '';
      elementToFix.style.transform = `rotate(0deg)`;
      elementToFix.removeEventListener('transitionend', disableTransition);
      elementToFix.style.transition = 'all 50ms cubic-bezier(0.1, 2.7, 0.5, 1);';
    });
  }

})();