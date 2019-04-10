


// Footer current year
var year = new Date().getFullYear();
document.getElementById('year').textContent = year;
document.getElementById('norman-age').textContent = year - 2013;
document.getElementById('sunny-age').textContent = year - 2018;

// Home page type effect
var typed = new Typed('#things', {
  strings: ["Frontend Developer", "Network Admin", "Test Engineer"],
  typeSpeed: 100,
  loop: true,
  showCursor: false
});

console.log(year);