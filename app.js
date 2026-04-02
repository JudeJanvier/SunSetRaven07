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

// ✅ MOBILE DROPDOWN FIX
document.querySelectorAll('.dropdown > a').forEach(link => {
  link.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      this.parentElement.classList.toggle('active');
    }
  });
});
