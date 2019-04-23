$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".accordion__header").click(function() {
        // Get that specific accordion being minimized/maximized
        var accordion = $(this).parents('.accordion');
        accordion.toggleClass("accordion--collapsed");
    });
});