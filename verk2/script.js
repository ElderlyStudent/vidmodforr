document.addEventListener('DOMContentLoaded', function() {
    var svgLogo = document.getElementById('svg-logo');

    var startTime = 0;
    var endTime = 0;
    var tapThreshold = 200; // Þröskuldur fyrir taps í millisekúndum
    var longPressThreshold = 2000; // Þröskuldur fyrir long press í millisekúndum
    var startX = 0;
    var startY = 0;

    // Taps
    svgLogo.addEventListener('click', function(event) {
        var currentTime = new Date().getTime();
        if (currentTime - startTime < tapThreshold) {
            // Gerðu eitthvað þegar það var tap
            console.log('Tapped!');
        }
        startTime = currentTime;
    });

    // Swipe up
    svgLogo.addEventListener('touchstart', function(event) {
        startX = event.touches[0].clientX;
        startY = event.touches[0].clientY;
    });

    svgLogo.addEventListener('touchend', function(event) {
        var endX = event.changedTouches[0].clientX;
        var endY = event.changedTouches[0].clientY;
        var deltaX = endX - startX;
        var deltaY = endY - startY;

        if (deltaY < -50 && Math.abs(deltaY) > Math.abs(deltaX)) {
            // Swipe up
            console.log('Swiped up!');
        }
    });

    // Long press
    svgLogo.addEventListener('touchstart', function(event) {
        startTime = new Date().getTime();
    });

    svgLogo.addEventListener('touchend', function(event) {
        endTime = new Date().getTime();
        if (endTime - startTime > longPressThreshold) {
            // Long press
            console.log('Long pressed!');
        }
    });
});
