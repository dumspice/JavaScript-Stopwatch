window.onload = function () {
  var second = 0;
  var milisecond = 0;
  var appendSecond = document.querySelector(".second");
  var appendMilisecond = document.querySelector(".milisecond");

  var startButton = document.querySelector(".start");
  var stopButton = document.querySelector(".stop");
  var resetButton = document.querySelector(".reset");

  var interval;

  startButton.onclick = () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
    console.log(interval);
  };

  stopButton.onclick = () => {
    clearInterval(interval);
  };

  resetButton.onclick = () => {
    second = "00";
    milisecond = "00";
    appendSecond.innerHTML = second;
    appendMilisecond.innerHTML = milisecond;
  };

  function startTimer() {
    milisecond++;

    if (milisecond <= 9) {
      appendMilisecond.innerHTML = "0" + milisecond;
    }

    if (milisecond > 9) {
      appendMilisecond.innerHTML = milisecond;
    }

    if (milisecond > 99) {
      second++;
      appendSecond.innerHTML = "0" + second;
      milisecond = 0;
      appendMilisecond.innerHTML = "0" + 0;
    }

    if (second > 9) {
      appendSecond.innerHTML = second;
    }
  }
};
