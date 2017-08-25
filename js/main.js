// Code makes slideshow play automatically
let slideIndex = 0;


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

// Code that adds captions to slideshow

// Array of objects that houses the actual captions
let slideshowData = [
  {title: 'Skagit River', filename: "river1.jpg"},
  {title: 'Raft on the Hoh River', filename: "river6.jpg"},
  {title: 'Hatchery Steelhead', filename: "steelhead2.jpg"}
]

// Code that pulls in the information for the array above into the actual pictures
let slideCount = 0;
let slideshowContainer = document.querySelector("#slideshow-container");
for (let slide of slideshowData){
  
  let slideContainer = document.createElement('div');
  slideContainer.setAttribute('class', 'mySlides fade');
  
  let numberText = document.createElement('div');
  numberText.setAttribute('class', 'numbertext');
  numberText.innerHTML = `${slideCount + 1}/${slideshowData.length}`;
  
  let img = document.createElement('img');
  img.setAttribute('src', `img/${slide.filename}`);
  img.style.width = "100%";
  
  let text = document.createElement('div');
  text.innerHTML = slide.title;
  text.setAttribute('class', 'text');
  
 slideContainer.appendChild(numberText);
 slideContainer.appendChild(img);
 slideContainer.appendChild(text);
 
 slideshowContainer.appendChild(slideContainer); 
 slideCount++; 
}

showSlides();

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

////// Here is my best guess at how I could make the Accorions work using ECMA 6 ///////
////////I couldn't get it to work //////////
////// but I think I am close ///////////
/*
let acc = document.querySelector("#accordion");

function accordionOpen(event){
  event.currentTarget.classList.toggle('active');
}
    if (accordion.status === "active" ) {
       accordion.style.display = "block";
    }else{
      accordion.style.display = "none";
    }

let sections = document.querySelectorAll('panel');
for (let section of sections){
  section.addEventListener('click', accordionOpen);
}
*/
/////////////////
/////////////////

// Code adds a pop up message to photo
let darcher = document.querySelector('#andy-darcher');

function popUpMessage(event) {
  alert('Thank you for visiting my site!');
}

darcher.addEventListener('click', popUpMessage);
                    

