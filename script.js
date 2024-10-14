const current = document.querySelector('#current');
const imgs = document.querySelector('.imgs');
const img = document.querySelectorAll('.imgs img');
const opacity = 0.6;
const legende = document.querySelector("#legende");

// debug only
// console.table(larray)

// Dialog
const dialog = document.getElementById("myDialog");

dialog.addEventListener('click', dialClick);

function dialClick() { 
  dialog.close(); 
} 

// Texte explicatif
legende.innerHTML = larray[1];

imgs.addEventListener('click', imgClick);

function imgClick(e) {

  // Change current image to src of clicked image
  current.src = e.target.src;
  
  // Change le texte explicatif
  index = parseInt(e.target.getAttribute("data-index"))
  legende.innerHTML = larray[index];
  // affiche le dialog
  dialog.showModal();

}
