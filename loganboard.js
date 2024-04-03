let delayTime=0;
const captionViewer = document.querySelector('#caption-viewer');
let timeout;

function sayIt(whichloganSound){
 const audio = new Audio("sounds/" + whichloganSound +".mp3");
 audio.play();
}
var loganButtons = document.querySelectorAll(".logan div.button, .logan button");
Array.from(loganButtons).forEach(loganButton => {
 loganButton.addEventListener("click", e => {
  const whichloganSound = loganButton.getAttribute("id");
  checkDelay();
  setTimeout(function(){sayIt(whichloganSound)}, (delayTime*1000));
  //show caption
  if (captionViewer){
   const soundbiteIDref = loganButton.getAttribute("aria-describedBy")
   const soundbite = document.querySelector("#" + soundbiteIDref).textContent.trim();
   updateStatus(soundbite);
  }
 });
});

function checkDelay(){
 if(document.querySelector("[name='delay']")) {
  delayTime = document.querySelector("[name='delay']:checked").value;
 }
}

function updateStatus(soundbite){
  captionViewer.innerHTML=soundbite;
  clearStatus()
}

function removeStatus(){
  captionViewer.innerHTML="";
  clearStatus()
}

function clearStatus(){
  clearTimeout(timeout);
  timeout = setTimeout(function(){
    removeStatus();
  },3000);
}
