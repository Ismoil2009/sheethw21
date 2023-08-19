const cardRow = document.querySelector(".card-row");

const userId = JSON.parse(localStorage.getItem("userId"));

function getAlbum({ title, id }) {
  return `
    <div class="col-md-4 col-lg-3 mb-3 text-center">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title" style="margin-bottom: 15px;">${title}</h5>
          <a onclick="albumId(${id})" style="color: white; border: 1px solid green; background-color: green; width: 100%;" class="btn btn-info" href="photos.html">Photos</a>
        </div>
      </div>
    </div>
  `;
}

function date() {
  getData(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`).then(
    (res) => {
      res.map((el) => {
        cardRow.innerHTML += getAlbum(el);
      });
    }
  );
}

setTimeout(() => {
  date();
}, 1000);

function albumId(id) {
  localStorage.setItem("albumId", JSON.stringify(id));
}
