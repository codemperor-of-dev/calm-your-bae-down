////// Going to redirect Link page from getEmail page with submit button

const submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  location.href = "../pages/redirectLink.html";
});
