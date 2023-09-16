document.querySelector(".nav-cart").addEventListener("mouseenter", () => {
  document.getElementById("navb-cart").style.display = "block";
});

document.querySelector(".nav-cart").addEventListener("mouseleave", () => {
  document.getElementById("navb-cart").style.display = "none";
});
document.querySelector("#navb-cart").addEventListener("mouseleave", () => {
  document.querySelector("#navb-cart").style.display = "none";
  console.log("hell");
});
document.querySelector(".nav-page").addEventListener("mouseenter", () => {});
