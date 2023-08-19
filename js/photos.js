const cardRow = document.querySelector(".card-row");
const title = document.querySelector(".title");

const albumId = JSON.parse(localStorage.getItem("albumId"));

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
