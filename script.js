const dialog = document.getElementById("myDialog");
dialog.addEventListener('click', dialClick);
// gestion du clic sur une image
function dialClick() { 
    dialog.close(); 
  }


// execute only when the page is loaded
document.addEventListener('DOMContentLoaded', templateclone );

// clone the template
function templateclone()  {
    console.log("DOMContentLoaded")
    const template = document.getElementById("image-template") ;
    const target = document.querySelector('.imgs') ;

    // boucle sur larray
    for (let itemCount = 1; itemCount < larray.length; itemCount++) {
    const item = template.content.cloneNode(true)
    item.querySelector("img").src = `./images/MakingOfLCD5_${itemCount}.png`;
    item.querySelector("img").setAttribute("data-index",`${itemCount}`)
    target.append(item)
    }
    // Texte explicatif
    legende.innerHTML = larray[1];   
    // active le clic sur une vignette 
    const imgs = document.querySelector('.imgs');
    imgs.addEventListener('click', imgClick);
 
}

// gestion du clic sur une vignette
function imgClick(e) {

    // Change current image to src of clicked image
    current.src = e.target.src;
    
    // Change le texte explicatif
    index = parseInt(e.target.getAttribute("data-index"))
    legende.innerHTML = larray[index];
    // affiche le dialog
    dialog.showModal();
  
}