const cardRow = document.querySelector(".card-row");
const title = document.querySelector(".title");

const albumId = JSON.parse(localStorage.getItem("albumId"));

function getData(url) {
  class ErrorResponse extends Error {
    constructor(status, message) {
      super(message);
      this.status = status;
    }
  }

  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          reject(new ErrorResponse(res.status, "Url is error"));
        }
      })
      .then((res) => {
        resolve(res);
      });
  });
}

function getPhotos({ title, url }) {
  return `
    <div class="card" style="width: 270px;">
      <img src="${url}" class="card-img-top" alt="img">
      <div class="card-body">
        <p class="card-text">${title}</p>
      </div>
    </div>
  `;
}

async function getting() {
  let data = await getData(
    `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
  );
  data.map((el) => {
    cardRow.innerHTML += getPhotos(el);
  });
  loader.innerHTML = "";
  loader.style.height = "0px";
}

setTimeout(() => {
  getting();
}, 3000);
