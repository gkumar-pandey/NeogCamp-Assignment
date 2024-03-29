//? Q.Write a function that takes an object blog and returns true if the blog has more than 1000 views (i.e. has a views property greater than 1000)
const blog1 = {
  title: "How to Learn JavaScript",
  author: "John Doe",
  views: 1430
};
const blog2 = {
  title: "10 Reasons to Start a Blog",
  author: "Jane Smith",
  views: 500
};

const getViews = (blog) => {
  const { views } = blog;
  return views > 1000 ? true : false;
};
console.log(getViews(blog1)); // true
console.log(getViews(blog2)); // false
