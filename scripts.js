const dropdown = document.getElementById("dropdown");
const toggler = document.getElementById("toggler");

toggler.addEventListener("click", () => {
  dropdown.classList.toggle("hidden");
});