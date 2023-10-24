//hamburger menus

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const sideMenu = document.querySelector('.side-menu-1');
    const darkOverlay = document.querySelector('.dark-overlay-menu');
    const wrapper = document.querySelector('.wrapper'); // Add the class 'wrapper' to the wrapper element in your HTML

    // Function to open the menu
    function openMenu() {
        sideMenu.style.right = '0';
        darkOverlay.style.display = 'block';
        wrapper.style.transform = 'translateX(-280px)';
    }

    // Function to close the menu
    function closeMenu() {
        sideMenu.style.right = '-280px';
        darkOverlay.style.display = 'none';
        wrapper.style.transform = 'translateX(0)';
    }

    // Event listener for hamburger click
    hamburger.addEventListener('click', function () {
        openMenu();
    });

    // Event listener for dark overlay click
    darkOverlay.addEventListener('click', function () {
        closeMenu();
    });
});