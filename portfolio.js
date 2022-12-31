function popUpImage(event) {
  event.target.style.height = "35rem";
}
function popBackImage(event) {
  event.target.style.height = "";
}

document.querySelectorAll(".book").forEach((item) => {
  item.addEventListener("mouseover", popUpImage);
});
document.querySelectorAll(".book").forEach((item) => {
  item.addEventListener("mouseout", popBackImage);
});
