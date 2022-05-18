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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const sections = document.querySelectorAll('section');



/**
 * End Global Variables
 * Start Helper Functions
 *
 */
 const checkElementInViewPort = (element) => {
   const height = element.clientHeight;
   const topOffset = element.offsetTop - (height/3);
   const elementInPage = height + topOffset;
   return window.scrollY >= topOffset && window.scrollY <= elementInPage;
 }


/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
const buildNavbar = () => {
const navbar = document.getElementById('navbar__list');
    sections.forEach(section => {
        const li = document.createElement('li');
        li.textContent = section.getAttribute('data-nav');
        li.setAttribute('secid',li.textContent)
        li.addEventListener('click', () => scrollToSection(section))
    navbar.appendChild(li);
    })
};

// Add class 'active' to section when near top of viewport
const scrollSideEffect = () => {
    sections.forEach( section => {
        const sectionName = section.getAttribute('data-nav');
        const li = document.querySelector(`[secid="${sectionName}"]`)
    const isSectionInView = checkElementInViewPort(section);
    if (isSectionInView){
        li.classList.add('your-active-class')
        section.classList.add('your-active-class')
    }else {
        li.classList.remove('your-active-class')
        section.classList.remove('your-active-class')
    }
})
};

// Scroll to anchor ID using scrollTO event
const scrollToSection = (element) => {
element.scrollIntoView({behavior: "smooth"})
}


/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
buildNavbar();

// Scroll to section on link click

// Set sections as active
window.addEventListener('scroll', () => scrollSideEffect())