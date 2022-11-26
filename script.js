


//HTML Elements
let hrDoc = document.getElementById('hr')
let minDoc = document.getElementById('min')
let secDoc = document.getElementById('sec')
let msDoc = document.getElementById('count')

let startDiv = document.getElementById('start')
let stopDiv = document.getElementById('stop')
let resetDiv = document.getElementById('reset')


//Global Variables
let isPaused = false
let time = 0
let seconds = 0
let minutes = 0
let hour = 0
let target = 99
let target2 = 59
let msTimeSpeed;


//Start Button Timer
startDiv.addEventListener('click', function() {
  //Time speed for MS to determine pace of rest of time
  msTimeSpeed = setInterval(counter, 10)
  //MS function
  function counter() {
    if (time <= target && !isPaused) {
      time++
      msDoc.innerText = time
      secondsCounter()
    }

  }
  //Seconds Function
  function secondsCounter() {

    if (time == target && seconds < target2 && !isPaused) {
      time = 0
      seconds++
      secDoc.innerText = seconds
      minCounter()


    }

  }
  //Minutes Function
  function minCounter() {
    if (seconds == target2 && minutes < target2 && !isPaused) {
      seconds = 0
      minutes++
      minDoc.innerText = minutes
      hrCounter()

    }
  }

  //Hr Function
  function hrCounter() {
    if (minutes == target2 && hour <= 24 && !isPaused) {
      minutes = 0
      hour++
      hrDoc.innerText = hour
    }
  }
})
//Stop button - Pauses the timer
stopDiv.addEventListener('click', function() {
  isPaused == true
  clearInterval(msTimeSpeed)
})



//Reset button - resets everything back to 0
resetDiv.onclick = () => {
  time = 0
  seconds = 0
  minutes = 0
  hour = 0
  secDoc.innerText = 0
  msDoc.innerText = 0
  minDoc.innerText = 0
  hrDoc.innerText = 0


  clearInterval(msTimeSpeed)

}


