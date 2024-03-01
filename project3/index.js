const clock = document.querySelector("#clock");

setInterval(() => {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  document.querySelector(
    "#clock"
  ).innerHTML = `<span>${date.toLocaleTimeString()}</span>`;
}, 1000);
