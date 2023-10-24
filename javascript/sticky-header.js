// sticky header


let lastScrollTop = 0;
const header = document.querySelector('.header');
let placeholder = document.createElement('div');

// Set the initial height and display style for the placeholder
placeholder.style.height = header.offsetHeight + 'px';
placeholder.style.display = 'none';

// Insert the placeholder before the header
header.parentNode.insertBefore(placeholder, header);

window.addEventListener('scroll', function() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > 212) {
        if (scrollTop > lastScrollTop) {
            // Scrolling down
            header.style.position = '';
            header.classList.remove('slide-down');
            placeholder.style.display = 'none';
        } else {
            // Scrolling up
            header.style.position = 'fixed';
            header.classList.add('slide-down');
            placeholder.style.display = 'block';
        }
    } else {
        header.style.position = '';
        header.classList.remove('slide-down');
        placeholder.style.display = 'none';
    }

    lastScrollTop = scrollTop;
});

