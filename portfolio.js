function popUpImage(event) {
  event.target.style.transform = "scale(1.1)";
}
function popBackImage(event) {
  event.target.style.transform = "scale(1)";
}

document.querySelectorAll(".book").forEach((item) => {
  item.addEventListener("mouseover", popUpImage);
});
document.querySelectorAll(".book").forEach((item) => {
  item.addEventListener("mouseout", popBackImage);
});
