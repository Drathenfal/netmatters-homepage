// sticky header

let lastScrollTop = 0;
const header = document.querySelector('.header');
const placeholder = document.createElement('div');
placeholder.classList.add('placeholder');
document.body.insertBefore(placeholder, header.nextSibling); // Insert the placeholder after the header

const handleScroll = () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    const headerHeight = header.offsetHeight;

    if (scrollTop > 212) {
        if (scrollTop > lastScrollTop) {
            // Scrolling down
            header.style.position = '';
            header.classList.remove('slide-down'); // Remove the slide-down class
            placeholder.style.display = 'none';
        } else {
            // Scrolling up
            header.style.position = 'fixed';
            header.classList.add('slide-down'); // Add the slide-down class to trigger the animation
            placeholder.style.display = 'block';
            placeholder.style.height = `${headerHeight}px`;
        }
    } else {
        header.style.position = '';
        header.classList.remove('slide-down'); // Remove the slide-down class
        placeholder.style.display = 'none';
    }

    lastScrollTop = scrollTop; // Update lastScrollTop with the current scrollTop value
};

window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleScroll); // Handle resize events as well

