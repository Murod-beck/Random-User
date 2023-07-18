//Api
const API = "https://randomuser.me/api/?results=10";

const loader = document.querySelector(".small");

const getDate = (resurce) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState < 4) {
        loader.classList.add("active");
      } else if (request.readyState == 4 && request.status == 200) {
        loader.classList.remove("active");
        const data = JSON.parse(request.responseText);
        resolve(data.results);
      } else if (request.readyState == "") {
        reject("error");
      }
    });
    request.open("GET", resurce);
    request.send();
  });
};

const reload = () => {
  getDate(API)
    .then((data) => {
      userData(data);
    })
    .catch((err) => {
      console.log("error");
    });
};
document.addEventListener("DOMContentLoaded", reload);
