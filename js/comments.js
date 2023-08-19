const cardRow = document.querySelector(".card-row");

const postId = JSON.parse(localStorage.getItem("postId"));

function getPost({ name, email, body }) {
  return `
    <div class="card mb-3">
      <div class="card-header">${email}</div>
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${body}</p>
      </div>
    </div>
  `;
}

function getting() {
  getData(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  ).then((res) => {
    res.map((el) => {
      cardRow.innerHTML += getPost(el);
    });
  });

  loader.innerHTML = "";
  loader.style.height = "0px";
}

setTimeout(() => {
  getting();
}, 1000);
