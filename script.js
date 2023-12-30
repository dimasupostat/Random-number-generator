"use strict";
const minInput = document.querySelector(".min");
const maxInput = document.querySelector(".max");
const btn = document.querySelector(".btn");
const output = document.querySelector(".output");
const number = document.querySelector(".number");
const error = document.querySelector(".error");

btn.addEventListener("click", function () {
  const min = parseInt(minInput.value);
  const max = parseInt(maxInput.value);

  if (!isNaN(min) && !isNaN(max) && min <= max) {
    // Generează un număr aleatoriu între min și max
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    // Afișează numărul generat în consolă
    console.log("Număr generat:", randomNumber);
    number.textContent = randomNumber;
  } else {
    error.textContent = "Introduceți valorea minimă și maximă.";
  }
});
