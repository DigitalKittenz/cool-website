window.addEventListener('DOMContentLoaded', (event) => {
    var aside = document.querySelector('aside'); // Select the aside
    // Remove the line that sets the display to "none"
});

document.getElementById('toggle-button').addEventListener('click', function() {
    var aside = document.querySelector('aside'); // Select the aside
    if (aside.style.display === "none") {
        aside.style.display = "block";
    } else {
        aside.style.display = "none";
    }
});
