//=-=-=-=-=-=-=-= Navigation bar drop down menu =-=-=-=-=-=-=-=

const navbarToggle = document.querySelector(".navbar-toggle");
const navbarLinks = document.querySelector(".navbar-links");

navbarToggle.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
});


//=-=-=-=-=-=-=-= Portfolio dynamic scrolling =-=-=-=-=-=-=-=

let scrollAmount = 0;
const projectWidth = 340; // Adjust this width as needed
const projectsContainer = document.querySelector('.projects-container');
const projects = document.querySelectorAll('.project');

function scrollProjects(direction) {
    if (direction === 'left') {
        scrollAmount -= projectWidth;
        if (scrollAmount < 0) {
            scrollAmount = 0;
        }
    } else {
        scrollAmount += projectWidth;
        const maxScroll = (projects.length - 1) * projectWidth;
        if (scrollAmount > maxScroll) {
            scrollAmount = maxScroll;
        }
    }

    projectsContainer.style.transform = `translateX(-${scrollAmount}px)`;

    updateButtonStates();
}

function updateButtonStates() {
    const leftButton = document.querySelector('.nav-button.left');
    const rightButton = document.querySelector('.nav-button.right');

    leftButton.disabled = scrollAmount === 0;
    rightButton.disabled = scrollAmount === (projects.length - 1) * projectWidth;
}

updateButtonStates();


//=-=-=-=-=-=-=-= Navigation bar retreat on scroll =-=-=-=-=-=-=-=

let prevScrollPos = window.pageYOffset;

window.addEventListener("scroll", () => {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        document.querySelector(".navbar").classList.remove("scrolled");
    } else {
        document.querySelector(".navbar").classList.add("scrolled");
    }

    prevScrollPos = currentScrollPos;
});
