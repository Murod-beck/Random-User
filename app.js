//Dark Light
const body = document.querySelector("body");
const nav = document.querySelector("nav");
const iconsDark = document.querySelector(".icons-dark");

const toggleLocal = () => {
  if (iconsDark.textContent == "wb_sunny") {
    iconsDark.textContent = "brightness_2";
    localStorage.setItem("mode", "");
  } else if (iconsDark.textContent == "brightness_2") {
    iconsDark.textContent = "wb_sunny";
    localStorage.setItem("mode", "darks");
  }
};

const modeLocal = localStorage.getItem("mode");
if (modeLocal) {
  body.classList.add(modeLocal);
  toggleLocal();
}

iconsDark.addEventListener("click", function () {
  body.classList.toggle("darks");
  nav.classList.toggle("navs");
  toggleLocal();
});

//Parallax
document.addEventListener("DOMContentLoaded", function () {
  const paral = document.querySelectorAll(".parallax");
  M.Parallax.init(paral);
});

//Delete
document.addEventListener("click", (e) => {
  if (e.target.classList[0] === "delete") {
    const delets = e.target.parentElement;
    const deletes = delets.parentElement;
    deletes.parentElement.remove();
  }
});
