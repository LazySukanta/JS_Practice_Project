const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value) * 0.01;
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  // console.log(height);
  // console.log(weight);

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = "Please give a valid height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please give a valid height";
  } 
  // else {
  //   let bmi = weight / (height * height);
  //   bmi = bmi.toFixed(2);
  //   if (bmi < 18.6) {
  //     results.innerHTML = `Your BMI is ${bmi} and you are Under Weight`;
  //   } else if (bmi > 24.9) {
  //     results.innerHTML = `Your BMI is ${bmi} and you are Under over weight`;
  //   } else {
  //     results.innerHTML = `Your BMI is ${bmi} and you are normal`;
  //   }
  // }

  else{
    let bmi = weight / (height * height);
    bmi = bmi.toFixed(2);
    results.innerHTML = `<span>Your BMI is ${bmi}</span>`;

  }
});
