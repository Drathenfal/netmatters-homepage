//cookie


document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.querySelector('.overlay-dark');
    const containerCookie = document.querySelector('.container-cookie');
    const manageConsentButton = document.querySelector('.cookie-consent');
    const acceptCookiesButton = document.getElementById('accept-cookies-cookie');
    const changeSettingsButton = document.getElementById('change-settings-cookie');

    const COOKIE_CONSENT_KEY = 'cookieConsent';

    function hideCookiePopup() {
        overlay.style.display = 'none';
        containerCookie.style.display = 'none';
        enableScroll(); // Enable scrolling when the cookie popup is closed
    }

    function showCookiePopup() {
        overlay.style.display = 'flex';
        containerCookie.style.display = 'flex';
        disableScroll(); // Disable scrolling when the cookie popup is displayed
    }

    function checkCookieConsent() {
        if (localStorage.getItem(COOKIE_CONSENT_KEY)) {
            hideCookiePopup();
        } else {
            showCookiePopup();
        }
    }

    // Function to disable scrolling
    function disableScroll() {
        // Get the current page scroll position
        const scrollPosition = window.scrollY;

        // Add styles to the body to fix its position
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollPosition}px`;
    }

    // Function to enable scrolling
    function enableScroll() {
        // Retrieve the scroll position from the body
        const scrollPosition = parseInt(document.body.style.top || '0', 10);

        // Remove the inline styles from the body
        document.body.style.position = '';
        document.body.style.top = '';

        // Scroll the page back to the original position
        window.scrollTo(0, -scrollPosition);
    }

    manageConsentButton.addEventListener('click', function() {
        showCookiePopup();
    });

    acceptCookiesButton.addEventListener('click', function() {
        localStorage.setItem(COOKIE_CONSENT_KEY, true);
        hideCookiePopup();
    });

    changeSettingsButton.addEventListener('click', function() {
        // Add your logic to change cookie settings here
        console.log('Change settings button clicked');
    });

    checkCookieConsent();
});
