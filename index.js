var NumberOfDrums=document.querySelectorAll(".drum").length;

for(var i=0;i<NumberOfDrums;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",handleclicked);


}
document.addEventListener("keypress",function(event){
//this.style.color="white";
  MakeSound(event.key);
});

function handleclicked()
{

this.style.color="white";
var buttonHTML=this.innerHTML;
MakeSound(buttonHTML);
}


function MakeSound(key)
{

  switch(key)
  {
    case "w":
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
    break;

    case "a":
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
    break;

    case "s":
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
    break;

    case "d":
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
    break;

    case "j":
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
    break;

    case "k":
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
    break;

    case "l":
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
    break;



  }
}
