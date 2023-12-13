// Get all elements with class 'box'
var boxes = document.querySelectorAll('.box');

// Add event listeners to each box
boxes.forEach(function(box) {
    box.addEventListener('mouseover', function() {
        var hoverColor = box.getAttribute('data-hover-color'); // Read the hover color from the attribute
        changeBackgroundColor(hoverColor);
    });

    box.addEventListener('mouseout', function() {
        resetBackgroundColor();
    });
});

// Add an event listener to reset the background color when mouse leaves the parent container
document.querySelector('.main-content').addEventListener('mouseout', function() {
    resetBackgroundColor();
});

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

function resetBackgroundColor() {
    document.body.style.backgroundColor = '#ffd0d5'; // Reset to the initial background color
}


