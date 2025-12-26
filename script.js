let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let text = document.getElementById('text');
let mountains7 = document.getElementById('mountains7');

window.onscroll = function () {
    let value = scrollY;

    // Parallax movements
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value * 3 + 'px';

    // Text effect: Rise up relative to scroll or stay? 
    // The previous logic had conflicting ideas. Let's make it move down slightly and scale.
    text.style.marginTop = value * 1.5 + 'px';

    // Optional: Stop parallax after hero section to save performance?
    if (value > 800) {
        // Optimization can happen here if needed, but for now simple is fine.
    }
}
