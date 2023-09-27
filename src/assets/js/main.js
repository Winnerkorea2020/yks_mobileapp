// Import Flowbite - Tailwindcss

import "flowbite";

// Import Our CSS
import "../css/main.css";

// core version + navigation, pagination modules:

// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

// IMG IMPORT
// Main Image Assest
import "../img/logo.svg";

import "../img/bannerMain.svg";
import "../img/bannerMain1.png";

import "../img/a.png";
import "../img/b.png";
import "../img/c.png";
import "../img/d.png";
import "../img/e.png";
import "../img/f.png";
import "../img/g.png";
import "../img/h.png";
import "../img/i.png";
import "../img/j.png";

import "../img/shop.png";
import "../img/card.png";

import "../img/rounded-dollar.png";
import "../img/rounded-dollar_b.png";

import "../img/evnet_b.png";

// Login Image Assets

import "../img/Organetopshape.png";
import "../img/completeimg.png";

// Coin Image
import "../img/coinUsdtTRX.png";
import "../img/coinTronTRX.png";

// Event Image

import "../img/eventCheckAttendace.svg";
import "../img/eventCheckAttendaceTitle.png";
import "../img/eventCheckAttendaceBenfit.png";
import "../img/eventCheckAttendaceButton.png";
import "../img/eventrulletTitle.png";
import "../img/eventrulletimg.png";

// init Swiper:
var swiper = new Swiper(".cardSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
  },
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

// Bottom Sheet

const showModalBtn = document.querySelector(".show-modal");
const bottomSheet = document.querySelector(".bottom-sheet");
const sheetOverlay = bottomSheet.querySelector(".sheet-overlay");
const sheetContent = bottomSheet.querySelector(".content");
const dragIcon = bottomSheet.querySelector(".drag-icon");
// Global variables for tracking drag events
let isDragging = false,
  startY,
  startHeight;
// Show the bottom sheet, hide body vertical scrollbar, and call updateSheetHeight
const showBottomSheet = () => {
  bottomSheet.classList.add("show");
  document.body.style.overflowY = "hidden";
  updateSheetHeight(50);
};
const updateSheetHeight = (height) => {
  sheetContent.style.height = `${height}vh`; //updates the height of the sheet content
  // Toggles the fullscreen class to bottomSheet if the height is equal to 100
  bottomSheet.classList.toggle("fullscreen", height === 100);
};
// Hide the bottom sheet and show body vertical scrollbar
const hideBottomSheet = () => {
  bottomSheet.classList.remove("show");
  document.body.style.overflowY = "auto";
};
// Sets initial drag position, sheetContent height and add dragging class to the bottom sheet
const dragStart = (e) => {
  isDragging = true;
  startY = e.pageY || e.touches?.[0].pageY;
  startHeight = parseInt(sheetContent.style.height);
  bottomSheet.classList.add("dragging");
};
// Calculates the new height for the sheet content and call the updateSheetHeight function
const dragging = (e) => {
  if (!isDragging) return;
  const delta = startY - (e.pageY || e.touches?.[0].pageY);
  const newHeight = startHeight + (delta / window.innerHeight) * 100;
  updateSheetHeight(newHeight);
};
// Determines whether to hide, set to fullscreen, or set to default
// height based on the current height of the sheet content
const dragStop = () => {
  isDragging = false;
  bottomSheet.classList.remove("dragging");
  const sheetHeight = parseInt(sheetContent.style.height);
  sheetHeight < 25
    ? hideBottomSheet()
    : sheetHeight > 75
    ? updateSheetHeight(100)
    : updateSheetHeight(50);
};
dragIcon.addEventListener("mousedown", dragStart);
document.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
dragIcon.addEventListener("touchstart", dragStart);
document.addEventListener("touchmove", dragging);
document.addEventListener("touchend", dragStop);
sheetOverlay.addEventListener("click", hideBottomSheet);
showModalBtn.addEventListener("click", showBottomSheet);

// Rullet Event
