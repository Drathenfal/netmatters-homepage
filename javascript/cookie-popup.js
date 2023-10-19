//cookie

document.addEventListener("DOMContentLoaded", function () {
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
        disableBackgroundScroll(); // Disable scrolling on the background when the cookie popup is displayed
        containerCookie.classList.add('enable-cookie-scroll'); // Add a class to enable scrolling within the cookie popup
    }

    function checkCookieConsent() {
        if (localStorage.getItem(COOKIE_CONSENT_KEY)) {
            hideCookiePopup();
        } else {
            showCookiePopup();
        }
    }

    // Function to disable scrolling on the background
    function disableBackgroundScroll() {
        document.body.style.overflow = 'hidden';
    }

    // Function to enable scrolling on the background
    function enableBackgroundScroll() {
        document.body.style.overflow = '';
    }

    manageConsentButton.addEventListener('click', function () {
        showCookiePopup();
    });

    acceptCookiesButton.addEventListener('click', function () {
        localStorage.setItem(COOKIE_CONSENT_KEY, true);
        hideCookiePopup();
    });

    changeSettingsButton.addEventListener('click', function () {
        // Add your logic to change cookie settings here
        console.log('Change settings button clicked');
    });

    // Event listener to enable scrolling on the background when the cookie popup is closed
    overlay.addEventListener('click', function (event) {
        if (event.target === overlay) {
            enableBackgroundScroll();
        }
    });

    checkCookieConsent();
});

// Function to enable scrolling
function enableScroll() {
    const scrollPosition = parseInt(document.body.style.top || '0', 10);
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, -scrollPosition);
}





// document.addEventListener("DOMContentLoaded", function() {
//     const overlay = document.querySelector('.overlay-dark');
//     const containerCookie = document.querySelector('.container-cookie');
//     const manageConsentButton = document.querySelector('.cookie-consent');

//     const acceptCookiesButton = document.getElementById('accept-cookies-cookie');
//     const changeSettingsButton = document.getElementById('change-settings-cookie');

//     const COOKIE_CONSENT_KEY = 'cookieConsent';

//     function hideCookiePopup() {
//         overlay.style.display = 'none';
//         containerCookie.style.display = 'none';
//         enableScroll(); // Enable scrolling when the cookie popup is closed
//     }

//     function showCookiePopup() {
//         overlay.style.display = 'block';
//         containerCookie.style.display = 'block';
//         disableScroll(); // Disable scrolling when the cookie popup is displayed
//     }

//     function checkCookieConsent() {
//         if (localStorage.getItem(COOKIE_CONSENT_KEY)) {
//             hideCookiePopup();
//         } else {
//             showCookiePopup();
//         }
//     }

//     // Function to disable scrolling
//     function disableScroll() {
//         // Get the current page scroll position
//         const scrollPosition = window.scrollY;

//         // Add styles to the body to fix its position
//         document.body.style.position = 'fixed';
//         document.body.style.top = `-${scrollPosition}px`;
//     }

//     // Function to enable scrolling
//     function enableScroll() {
//         // Retrieve the scroll position from the body
//         const scrollPosition = parseInt(document.body.style.top || '0', 10);

//         // Remove the inline styles from the body
//         document.body.style.position = '';
//         document.body.style.top = '';

//         // Scroll the page back to the original position
//         window.scrollTo(0, -scrollPosition);
//     }

//     manageConsentButton.addEventListener('click', function() {
//         showCookiePopup();
//     });

//     acceptCookiesButton.addEventListener('click', function() {
//         localStorage.setItem(COOKIE_CONSENT_KEY, true);
//         hideCookiePopup();
//     });

//     changeSettingsButton.addEventListener('click', function() {
//         // Add your logic to change cookie settings here
//         console.log('Change settings button clicked');
//     });

//     checkCookieConsent();
// });
