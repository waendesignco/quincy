var fans = document.querySelector("p .fans");
var fish = document.querySelector("p .fish");
var pets = document.querySelector("p .pets");

var themeSwitchInput = document.querySelector("#toggle");
var ball = document.querySelector(".ball");
var h1 = document.querySelector("h1");
var body = document.querySelector("body");

fans.addEventListener("mouseover", function () {
  fans.innerText = "123K";
});
fish.addEventListener("mouseover", function () {
  fish.innerText = "47K";
});
pets.addEventListener("mouseover", function () {
  pets.innerText = "20K";
});

themeSwitchInput.addEventListener =
  ("click",
  function () {
    if (body.classList.contains("light")) {
      body.classList.remove("light");
      ball.classList.remove("move-right");
      h1.innerText = "Stealth Quincy";
    } else {
      body.classList.add("light");
      ball.classList.add("move-right");
      h1.innerText = "Party Quincy";
    }
  });
