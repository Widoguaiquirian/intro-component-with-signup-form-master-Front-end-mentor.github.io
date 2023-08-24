"use strict";
const btn = document.querySelector(".wrapp-box-form-btn");
const inputsFields = document.querySelectorAll(".inputs");

let current = 0;

btn.addEventListener("click", function () {
   inputsFields.forEach(function (input) {
      if (input.checkValidity() == false) {
         input.classList.add("active");
      }
   });

   checkInput();
});

const checkInput = function () {
   btn.addEventListener("click", function () {
      inputsFields.forEach(function (input) {
         if (input.checkValidity() == true) {
            input.classList.remove("active");
         }
      });
   });
};
