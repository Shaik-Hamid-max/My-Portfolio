// Select the menu icon and navbar elements
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

// Toggle active class on menu icon click
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

// Close menu when clicking any nav link
// const navLinks = document.querySelectorAll('.navbar a');
// navLinks.forEach(link => {
//     link.addEventListener('click', () => {
//         menuIcon.classList.remove('bx-x');
//         navbar.classList.remove('active');
//     });
// });


const typed = new Typed('.multiple-text',{
    strings: ['Frontend Developer.','Web Designer.','UI/UX Designer.'],
    typeSpeed: 80,
    backSpeed:80,
    backDelay: 1200,
    loop:true,

});