import React from "react";

function Posts() {
  const posts = [
    {
      id: 1,
      title: "React Learning Journey",
      body: "React helps developers build fast and interactive user interfaces using reusable components."
    },
    {
      id: 2,
      title: "Why JavaScript Matters",
      body: "JavaScript is one of the most popular programming languages for web development."
    },
    {
      id: 3,
      title: "Frontend Development",
      body: "Frontend development focuses on creating attractive and user-friendly web applications."
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Posts</h1>

      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid gray",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "8px"
          }}
        >
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;