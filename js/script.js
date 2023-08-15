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
}, 2000);

// switch colors

const colorsLi = document.querySelectorAll(".colors-list li");
colorsLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    //set color on root
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    localStorage.setItem("color-option", e.target.dataset.color);

    e.target.parentElement.querySelectorAll(".active").forEach((el) => {
      el.classList.remove("active");
    });

    //add active class
    e.target.classList.add("active");
  });
});

// local storage

let mainColor = localStorage.getItem("color-option");

if (mainColor !== null) {
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("color-option")
  );
  document.querySelectorAll(".colors-list li").forEach((el) => {
    el.classList.remove("active");
    if (el.dataset.color === mainColor) {
      el.classList.add("active");
    }
  });
}
