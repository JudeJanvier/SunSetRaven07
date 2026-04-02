// app.js

function openMap(){
  document.getElementById('mapModal').style.display='flex';
}

function closeMap(){
  document.getElementById('mapModal').style.display='none';
}

window.onclick = function(e){
  const modal = document.getElementById('mapModal');
  if(e.target === modal){
    modal.style.display='none';
  }
}