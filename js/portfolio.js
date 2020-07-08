
// Home page type effect
var typed = new Typed('#things', {
  strings: ["I'm a JavaScript Developer.", "I build beautiful websites and apps."],
  typeSpeed: 100,
  loop: true,
  showCursor: false
});

// Footer current year
var year = new Date().getFullYear();
document.getElementById('year').textContent = year;