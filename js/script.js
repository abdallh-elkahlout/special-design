// toggle soin

document.querySelector(".setting-box .toggle-setting .fa-gear").onclick =
  function () {
    this.classList.toggle("fa-spin");
    document.querySelector(".setting-box").classList.toggle("open");
  };

//select landing page image

let landingPage = document.querySelector(".landing-page");
let introH1 = document.querySelector(".intro h1");
let introH1Span = document.querySelector(".intro h1 span");
let desc = document.querySelector(".intro p");
let logo = document.querySelector(".logo");

let images = ["img1.jpg", "img2.jpg"];

setInterval(() => {
  let randomNum = Math.floor(Math.random() * 2);
  landingPage.style.backgroundImage =
    'url("../imgs/' + images[randomNum] + '")';
}, 2000);
