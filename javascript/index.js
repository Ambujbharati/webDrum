var noDrum = document.querySelectorAll(".drum").length;
for(var i=0;i<noDrum;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",fun);
}


function fun()
{
  var buttonName = this.innerHTML;
  playSound(buttonName);
  animation(buttonName);
}

document.addEventListener("keydown",fun2);
function fun2(event)
{
  playSound(event.key);
  animation(event.key);
}

function playSound(name)
{
  switch(name)
  {
    case "w":
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
    break;
    case "a":
    var audio = new Audio('sounds/tom-2.mp3');
    audio.play();
    break;
    case "s":
    var audio = new Audio('sounds/tom-3.mp3');
    audio.play();
    break;
    case "d":
    var audio = new Audio('sounds/tom-4.mp3');
    audio.play();
    break;
    case "j":
    var audio = new Audio('sounds/snare.mp3');
    audio.play();
    break;
    case "k":
    var audio = new Audio('sounds/crash.mp3');
    audio.play();
    break;
    case "l":
    var audio = new Audio('sounds/kick-bass.mp3');
    audio.play();
    break;
    default:
    console.log(name);
    break;
  }
}

function animation(key)
{
  var activeKey = document.querySelector("."+key);
  activeKey.classList.add("pressed");

  setTimeout(function() {
    activeKey.classList.remove("pressed");
  }, 100);
}
