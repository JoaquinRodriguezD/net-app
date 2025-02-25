const API_URL = "https://jsonplaceholder.typicode.com";

export async function getPost() {
  const response = await fetch(`${API_URL}/posts`);
  return response.json();
}

export async function getUser(user_id) {
  const response = await fetch(`${API_URL}/users/${user_id}`);
  return response.json();
}

export async function getUserPosts(user_id = 1) {
  const response = await fetch(`${API_URL}/posts?userId=${user_id}`);
  return response.json();
}
