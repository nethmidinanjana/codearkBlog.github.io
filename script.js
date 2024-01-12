function scrollToAbout() {
  // Get the about section by its id
  var aboutSection = document.getElementById('about');

  // Scroll to the about section smoothly
  aboutSection.scrollIntoView({ behavior: 'smooth' });
}


ScrollReveal().reveal('[data-sr]');


document.addEventListener("DOMContentLoaded", function () {
  var aboutText = document.querySelector(".about_text");

  function handleScroll() {
    var scrollPosition = window.scrollY;
    var aboutTextPosition = aboutText.getBoundingClientRect().top;

    if (aboutTextPosition < window.innerHeight * 0.75) {
      aboutText.classList.add("show");
      window.removeEventListener("scroll", handleScroll);
    }
  }

  window.addEventListener("scroll", handleScroll);
});


function navigateToDesignPage() {
  // Redirect to the design.html page
  window.location.href = 'design.html';
}

function scrollToContact() {
  var contactSection = document.getElementById('contact');
  contactSection.scrollIntoView({ behavior: 'smooth' });
}

function navigateToContact() {
  // Change the window location to the contact section in index.html
  window.location.href = 'index.html#contact';
}

function scrollToHome() {
  var aboutSection = document.getElementById('home');
  if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
  }
}

function redirectToOperations() {
  window.location.href = 'operations.html';
}

function redirectToFinance() {
  window.location.href = 'finance.html';
}

function redirectToHR() {
  window.location.href = 'hr.html';
}

function redirectToMarketing() {
  window.location.href = 'marketing.html';
}

function redirectToTech() {
  window.location.href = 'technology.html';
}

function redirectToMeb() {
  window.location.href = 'membership.html';
}

function sendMessage(){
  alert("This Feature is Still Developing!");
}