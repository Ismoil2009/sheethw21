const cardRow = document.querySelector(".card-row");
const titlePage = document.querySelector(".title");

const userId = JSON.parse(localStorage.getItem("userId"));
let point = JSON.parse(localStorage.getItem("point"));

titlePage.innerHTML = point;

point = point.toLowerCase();

function getPost({ title, body, id }) {
  return `
    <div class="card mb-3">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${body}</p>
        <a href="comments.html" onclick="postSaveId(${id})" class="btn btn-primary">Comments</a>
      </div>
    </div>
  `;
}
function getTodos({ title, completed }) {
  return `
    <li class="list-group-item d-flex m-2 justify-content-between align-items-center">
      ${title}
      <span class="badge rounded-pill">${completed ? "✅" : "❌"}</span>
    </li>
  `;
}

function getting() {
  getData(
    `https://jsonplaceholder.typicode.com/${point}?userId=${userId}`
  ).then((res) => {
    res.map((el) => {
      if (point == "posts") {
        cardRow.innerHTML += getPost(el);
      } else {
        cardRow.innerHTML += getTodos(el);
      }
    });
  });
}

setTimeout(() => {
  getting();
}, 1000);

function postSaveId(id) {
  localStorage.setItem("postId", JSON.stringify(id));
}
