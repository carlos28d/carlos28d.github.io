function popUpImage(event) {
  event.target.style.width = "16.5rem";
}
function popBackImage(event) {
  event.target.style.width = "";
}

document.querySelectorAll(".book").forEach((item) => {
  item.addEventListener("mouseover", popUpImage);
});
document.querySelectorAll(".book").forEach((item) => {
  item.addEventListener("mouseout", popBackImage);
});
