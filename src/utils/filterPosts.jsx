export const filterPosts = (posts, filter) => {
  if (filter === "Trending") {
    const newPosts = posts.sort(
      (a, b) => b.likes.likeCount - a.likes.likeCount
    );
    console.log("filterPosts", newPosts);
    return newPosts;
  }
  if (filter === "Latest") {
    return posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }
  if (filter === "Oldest") {
    return posts.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  }
  return posts;
};
