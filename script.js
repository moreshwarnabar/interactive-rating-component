// globals
let rating = 0;

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("button");
  const liList = document.querySelectorAll("li");
  const ratingDiv = document.querySelector("#rating");
  const thankYouDiv = document.querySelector("#thank-you");
  const ratingMessage = document.querySelector("#rating-message");

  // hide the thank you div initially
  thankYouDiv.style.display = "none";

  // disable the submit button
  button.disabled = true;

  // event handlers
  function handleClick() {
    // change background color of li
    this.style.backgroundColor = "hsl(217, 12%, 63%)";
    this.style.color = "hsl(0, 0%, 100%)";

    // set the rating message
    rating = this.textContent;
    ratingMessage.textContent = `You selected ${rating} out of 5`;

    // enable the submit button
    button.disabled = false;
    console.log(rating);
  }

  function handleSubmit() {
    // show the thank you div and hide the rating div
    thankYouDiv.style.display = "flex";
    ratingDiv.style.display = "none";
  }

  liList.forEach((li) => {
    li.addEventListener("click", handleClick);
  });
  button.addEventListener("click", handleSubmit);
});
