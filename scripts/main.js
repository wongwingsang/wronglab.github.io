/* Open Full Sreen Menu when someone clicks on the Icon */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

// The Popup Sreen of Magic Props
var modal = document.getElementById('magicPropsPopUp');

// Get the button that opens the Popup
var btn = document.getElementById("magicPropsBtn");

// Get the <span> element that closes the Popup
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the Popup
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the Popup
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the Popup, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}