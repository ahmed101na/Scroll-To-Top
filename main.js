// Select the element with the class "up" and store it in the variable spanEl
let spanEl = document.querySelector(".up");

// When the window is scrolled, execute the following function
window.onscroll = function () {
  // Check if the vertical scroll position is greater than or equal to 50
  this.scrollY >= 50
    // If true, add the class "show" to the spanEl element to make it visible
    ? spanEl.classList.add("show")
    // If false, remove the class "show" to hide the spanEl element
    : spanEl.classList.remove("show");
};

// When the spanEl element is clicked, execute the following function
spanEl.onclick = function () {
  // Scroll the window to the top of the page smoothly
  window.scrollTo({
    top: 0, // Scroll to the top of the page
    behavior: "smooth", // Smooth scrolling effect
  });
};
