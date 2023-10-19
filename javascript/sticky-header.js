// sticky header

let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > 212) {
        if (scrollTop > lastScrollTop) {
            // Scrolling down
            header.style.position = '';
            header.classList.remove('slide-down'); // Remove the slide-down class
        } else {
            // Scrolling up
            header.style.position = 'fixed';
            header.classList.add('slide-down'); // Add the slide-down class to trigger the animation
        }
    } else {
        header.style.position = '';
        header.classList.remove('slide-down'); // Remove the slide-down class
    }

    lastScrollTop = scrollTop; // Update lastScrollTop with the current scrollTop value
});
