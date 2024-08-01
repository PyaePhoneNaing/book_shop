// script.js
function openSignInForm() {
    document.getElementById("signInModal").style.display = "block";
}

function closeSignInForm() {
    document.getElementById("signInModal").style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    var modal = document.getElementById("signInModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
