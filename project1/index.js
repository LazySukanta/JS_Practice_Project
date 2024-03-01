const body = document.querySelector("body");
// console.log(body);
// document.querySelector(".selector")
document.querySelectorAll(".button").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.target.id);
    body.style.backgroundColor = e.target.id;
  });
});
