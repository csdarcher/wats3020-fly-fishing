// Code makes slideshow play automatically
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 5000); // Image will change every 5 seconds
}

/*Code that will add caption information to slideshow

let slideshowData = [
  {title: 'Skagit River', filename: "river1.jpg"},
  {title: 'Raft on the Hoh River', filename: "river6jpg"},
  {title: 'Hatchery Steelhead', filename: "steelhead2.jpg"}
]

let slides = ["title", "filename"];

for (let slideshowData of slides){
    
}
*/

// Code for Accordion Tabs
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active"); // Adds or removes "active" class

        /* Code below causes accordion tab to slide open and close when clicked*/
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }
}


// Code adds a pop up message to photo
let darcher = document.querySelector('#andy-darcher');

function popUpMessage(event) {
  alert('Thank you for visiting my site!');
}

darcher.addEventListener('click', popUpMessage);
                    

