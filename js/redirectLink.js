///// copying Link to clipBoard

const copyLink = document.getElementById("copyLink");
let LinkUrlTextBox = document.getElementsByClassName("Link")[0];

copyLink.addEventListener("click", () => {
  navigator.clipboard.writeText(LinkUrlTextBox.textContent);
});
