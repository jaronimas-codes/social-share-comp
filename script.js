"use strict";

const shareIcon = document.querySelector(".share-cont");
const active = document.querySelector(".active");
const activeWrap = document.querySelector(".active-wrap");

shareIcon.addEventListener("click", function () {
  active.classList.toggle("visible");
  activeWrap.classList.toggle("visible");
});
