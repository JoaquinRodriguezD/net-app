import "./style.css";
import { getPost } from "./utils/api.js";
import { getLikes, toggleLike } from "./utils/storage.js";

getPost().then((data) => console.log(data));

export async function renderHome() {
  const app = document.getElementById("app");
  const posts = await getPost();
  const likes = await getLikes();

  app.addEventListener("click", async (e) => {
    if (e.target.classList.contains("like-btn")) {
      const postId = parseInt(e.target.dataset.id);
      const newLikes = toggleLike(postId);
      e.target.classList.toggle("liked");
      e.target.innerHTML = newLikes[postId] ? "🤍" : "🧡";
    }
  });

  app.innerHTML = `
    <main class="container">
    ${posts
      .map(
        (posts) => `
            <div class="post">
            <h3>${(posts.title)}</h3>
            <p>${posts.body}</p>
            <button class="like-btn" data-id=${posts.id}>${
          likes[posts.id] ? "🤍" : "🧡"
        }</button>
            </div>`
      )
      .join("")}
    </main>
    `;
}

renderHome();