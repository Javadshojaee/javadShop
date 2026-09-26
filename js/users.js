let loading = document.querySelector("#loading");
let cover = "";

async function users() {
  setCover();
  loading.classList.add("active");
  let users = "";
  let data = await fetch("https://javadshojaee.github.io/sesstion12web3/db.json");
  let res = await data.json();
  users = res.Users?.map((item) => {
    return `<div class="card">
        <div class="image">
          <img src=${item.image} alt="image" />
        </div>
        <div class="botton">
          <div class="right">
              <h3 class="fullName">FullName:</h3>
              <h3 class="birthdate">Birthdate:</h3>
              <h3 class="phone">Phone:</h3>
              <h3 class="zipCode">ZipCpde:</h3>
              <h3 class="id">Id:</h3>
          </div>
          <div class="left">
            <h3>${item.fullName}</h3>
            <h3>${item.birtDate}</h3>
            <h3>${item.phone}</h3>
            <h3>${item.zipCode}</h3>
            <h3>${item.id}</h3>
          </div>
        </div>
      </div>`;
  });
  loading.classList.remove("active");
  removeCover();

  document
    .querySelector("#users")
    .insertAdjacentHTML("afterbegin", users);
}

function setCover() {
  cover = document.createElement("div");
  cover.classList.add("cover");
  document.body.insertAdjacentElement("afterbegin", cover);
}

function removeCover() {
  cover.remove();
}

export default users;
