const userCard = document.querySelector(".user-card");
const btnRefresh = document.querySelector(".btn-refresh");
const btnClear = document.querySelector(".btn-clear");
const formInput = document.querySelector(".form-input");

//User
const userData = (data) => {
  data.forEach((user) => {
    const { dob, location, name, picture, phone } = user;
    userCard.innerHTML += `
        <div class="col s6 m4">
            <div class="card">
                <div class="card-image">
                    <img class="circle" src="${picture.large}" alt="" />
                </div>
                <div class="card-content">
                    <span class="card-title">${name.first}</span>
                    <p>Age: ${dob.age}</p>
                    <p>Phone: ${phone}</p>
                    <p>City: ${location.city}</p>
                </div>
                <div class="card-action">
                    <i class="delete material-icons">delete</i>
                </div>
            </div>
        </div>`;
  });
};

//Refresh
btnRefresh.addEventListener("click", (e) => {
  e.preventDefault();
  btnClear.style.display = "block";
  reload();
});

//Clear
btnClear.addEventListener("click", (e) => {
  e.preventDefault();
  btnClear.style.display = "none";
  userCard.innerHTML = "";
});

//Search name
formInput.addEventListener("input", () => {
  const inputValue = formInput.value.toLocaleLowerCase();
  const names = document.querySelectorAll(".card-content");
  names.forEach((item) => {
    if (item.firstElementChild.textContent.toLowerCase().includes(inputValue)) {
      const parent = item.parentElement;
      parent.parentElement.classList.remove("hidden");
    } else {
      const parent = item.parentElement;
      parent.parentElement.classList.add("hidden");
    }
  });
});
