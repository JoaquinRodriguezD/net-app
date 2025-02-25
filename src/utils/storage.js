const LIKES_KEY = "social-network-likes";

export function getLikes() {
  const data = JSON.parse(localStorage.getItem(LIKES_KEY)) || {};
  console.log(data);
  return data;
}

export function toggleLike(postId) {
  const likes = getLikes();
  const newLikes = { ...likes, [postId]: !likes[postId] };
  localStorage.setItem(LIKES_KEY, JSON.stringify(newLikes));
  return newLikes;
}
