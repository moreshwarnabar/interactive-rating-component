// globals
let rating = 0;

// event handlers
function handleLiClick() {
  rating = this.textContent;
}

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("button");
  const liList = document.querySelectorAll("li");

  liList.forEach((li) => {
    li.addEventListener("click", handleLiClick);
  });
  button.addEventListener("click", () => console.log("submitted"));
});
