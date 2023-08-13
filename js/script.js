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
  let randomNum = Math.floor(Math.random() * images.length);
  landingPage.style.backgroundImage =
    'url("../imgs/' + images[randomNum] + '")';
  if (landingPage.style.backgroundImage == 'url("../imgs/img1.jpg")') {
    introH1.style.color = "black";
    introH1Span.style.color = "#72791f";
    logo.style.color = "white";
    desc.style.color = "white";
  } else if (landingPage.style.backgroundImage == 'url("../imgs/img2.jpg")') {
    introH1.style.color = "#3f3f38";
    introH1Span.style.color = "#7c4c4c";
    desc.style.color = "#3f3f38";
  }
}, 2000);
