// globals
let rating = 0;

// event handlers
function handleLiClick() {
  rating = this.textContent;
}

function handleSubmit() {
  const message = `You selected ${rating} of 5 Thank you! We appreciate you taking
  the time to give a rating. If you ever need more support, don’t hesitate to
  get in touch!`;
  console.log(message);
}

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("button");
  const liList = document.querySelectorAll("li");

  liList.forEach((li) => {
    li.addEventListener("click", handleLiClick);
  });
  button.addEventListener("click", handleSubmit);
});
