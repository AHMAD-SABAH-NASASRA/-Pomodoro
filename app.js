
let start = 25; 
let time = start * 60;
const countdown = document.getElementById('counter');
let buttonSta = false;
let interval = null;

const breakSound = new Audio("https://www.soundjay.com/buttons/sounds/button-16a.mp3");
const  ring =new Audio("https://www.soundjay.com/misc/sounds/bell-ringing-01c.mp3")


function goToPomodoro(){
    start = 25;
    document.getElementById('counter').innerHTML='25:00';
      time=start*60;
      buttonSta =false;
      clearInterval(interval);  
      document.getElementById('btn4').innerHTML="Start Count"
       
      document.body.style.backgroundColor = "#fff ";
    }
function goToShort(){
    start = 5;
    document.getElementById('counter').innerHTML='5:00';
    time=start*60;
    buttonSta =false;
    clearInterval(interval);

    document.getElementById('btn4').innerHTML="Start Count"
}

function goToLong(){
    start = 15;
    document.getElementById('counter').innerHTML='15:00';
    time=start*60;
    buttonSta =false;
    clearInterval(interval);  
    document.getElementById('btn4').innerHTML="Start Count"
}

function changeBtnSta() {
    if (!buttonSta) {
        buttonSta = true;
        clearInterval(interval); 
        interval = setInterval(updateCountDown, 1000);
        document.getElementById('btn4').innerHTML="Pouse"
    }
    else{

        document.getElementById('btn4').innerHTML="continue"
        buttonSta =false;
        clearInterval(interval);
          
    }
}
function updateCountDown() {
    const minutes = Math.floor( time / 60);
    let seconds = time % 60;
    

    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    countdown.innerHTML = `${minutes}:${seconds}`;
    time--;


    if (time < 0) {
        clearInterval(interval);
        ring.play()
    }
}
document.getElementById("btn1").addEventListener("click", function() {
    breakSound.play();
});
document.getElementById("btn2").addEventListener("click", function() {
    breakSound.play();
});document.getElementById("btn3").addEventListener("click", function() {
    breakSound.play();
});document.getElementById("btn4").addEventListener("click", function() {
    breakSound.play();
});