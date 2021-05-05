/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

 var sections = document.querySelectorAll('section');
var navList = document.getElementById('navbar__list');
var items = ["Section1", "Section2", "Section3","section4","section5","section6","section7","section8"];

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// Function to check element is in view port
var isInViewport = function (elem) {
  var bounding = elem.getBoundingClientRect();
  return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * End Helper Functions
 * Begin Main Functions

*/
// Build menu
// build the nav

items.forEach((item, i) => {
  const el = document.createElement("a");
  el.innerText = item;
  el.classList.add("menu-items");
  el.setAttribute("id", `menu-${i + 1}`);
  el.href = `#section${i + 1}`;
  
	//Create a list item
  const li = document.createElement("li")
  // Append the anchor to the list item
  li.appendChild(el);
  li.classList.add("list");
  // Append the list item to the list
  navList.appendChild(li);
});



// Get all lists with class="list" inside the ul
var lists = navList.getElementsByClassName("list");

// Loop through the list and add the active class to the current/clicked list
for (var i = 0; i < lists.length; i++) {
  lists[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}



// // Scroll to section on link click
var links = document.querySelectorAll('a[href^="#"]');
for (let index of links) { 
  index.addEventListener('click', (e)=> {
      let list = index.getAttribute('href')
      let target = document.querySelector(list)
      target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      })
      history.pushState(null, null, list)
      e.preventDefault()
  })
};
 
//  add the active class (bubble style)to the section in view port


  window.addEventListener('scroll', function(event) {
  // add event on scroll
  sections.forEach(section => {
     
      if (isInViewport(section)) {
        //if in Viewport
        section.classList.add("active");
      }
      else{section.classList.remove("active");}
  });
  }, false);
  
//End Main Functions
// set setTimeout to fire a function when the user stops scrolling
(function() {        
  var timer;
  $(window).bind('scroll',function () {
      clearTimeout(timer);
      timer = setTimeout( refresh , 150 );
  });
  var refresh = function () { 
      // do stuff
      console.log('Stopped Scrolling'); 
  };
})();
//Add scroll to top button
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


 

