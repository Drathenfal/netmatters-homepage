
$(document).ready(function(){
    // Initialize slick slider
    $('.clients-carousel').slick();

    // Handle hover event for each image
    $('.clients-carousel div').hover(
        function(){
            // Get the corresponding popup content
            var popupClass = $(this).find('img').attr('class') + '-popup';
            var popupContent = $('.' + popupClass).html();

            // Show the popup
            $('.popup-container').html(popupContent);
            $('.popup-container').show();
        },
        function(){
            // Hide the popup on mouse out
            $('.popup-container').hide();
        }
    );
});