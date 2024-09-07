$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 500, function(){
            window.location.hash = hash;
            });
        }
    });
});


// Select the button and the content element
const showButton = document.getElementById('menu-toggle');
const content = document.getElementById('mobile');


// Add an event listener to the button
showButton.addEventListener('click', () => {
    // Check the current display property and toggle it
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
});

document.addEventListener('click', (event) => {
    if (content.style.display === 'block') {
        const targetElement = event.target;
        if (!content.contains(targetElement) && targetElement !== showButton) {
            content.style.display = 'none';
        }
    }
});
