
  document.addEventListener("DOMContentLoaded", function() {
    var toggle = document.querySelector(".toggle");
    if (window.innerWidth >= 419 && window.innerWidth <= 522) {
      toggle.classList.remove("active");
    } else {
      toggle.classList.add("active");
    }
  });

