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

function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  menu.classList.toggle('active');
}

// ✅ MOBILE DROPDOWN FIX
document.querySelectorAll('.menu-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      document.querySelector('.menu-links').classList.remove('active');
    }
  });
});
