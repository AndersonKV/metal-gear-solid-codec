import { radioList, formatedNumbers } from "./utils.js";

const volumeFromView = document.querySelector(
  ".top-screen__middle-screen--dot"
);

const ArrayOfSpans = [];

for (let index = 0; index < 10; index++) {
  ArrayOfSpans.push(document.createElement("span"));
}

ArrayOfSpans.forEach((element) => {
  volumeFromView.append(element);
});

document.querySelector(".ptt").addEventListener("click", setSound);

function setSound(event) {
  const numberCodec = document.querySelector(".number-code").textContent;
  const img = document.querySelector(".top-screen__left-screen img");
  const sound = document.querySelector("#audio");
  const bottomScreen = document.querySelector(".bottom-screen");

  if (bottomScreen != null) {
    bottomScreen.remove();
  }

  sound.play();

  radioList.forEach((element) => {
    if (numberCodec.trim() === element.frq) {
      const dots = document.querySelector(".top-screen__middle-screen--dot");
      const dot = dots.querySelectorAll("span");

      img.src = element.img;

      dot[3].classList.add("anima1");
      dot[2].classList.add("anima2");
      dot[1].classList.add("anima3");

      const div = document.createElement("div");
      const p = document.createElement("p");
      div.classList.add("bottom-screen");
      p.innerHTML = element.text;
      div.append(p);

      document.querySelector(".codec").append(div);
    }
  });
}

document.querySelector("#play-left").addEventListener("click", switchPlay);
document.querySelector("#play-right").addEventListener("click", switchPlay);

function switchPlay(e) {
  const numberCodec = document.querySelector(".number-code");
  const newNumber = numberCodec.textContent.replace(".", "");

  if (e.path[1].id === "play-left") {
    const initNumber = parseFloat(newNumber) - 1;
    numberCodec.innerHTML = "";
    numberCodec.append(formatedNumbers(initNumber.toString()));
  } else if (e.path[1].id === "play-right") {
    const initNumber = parseFloat(newNumber) + 1;
    numberCodec.innerHTML = "";
    numberCodec.append(formatedNumbers(initNumber.toString()));
  }

  const dots = document.querySelector(".top-screen__middle-screen--dot");
  const dot = dots.querySelectorAll("span");

  dot.forEach((element) => {
    if (element.className) {
      element.classList.remove(element.classList[0]);
    }
  });
}

//Frequenza: 140.85;
