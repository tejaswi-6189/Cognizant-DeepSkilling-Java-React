import React from "react";

function App() {

  const books = [
    { id: 101, bname: "Master React", price: 670 },
    { id: 102, bname: "Deep Dive into Angular 11", price: 800 },
    { id: 103, bname: "Mongo Essentials", price: 450 }
  ];

  const blogs = [
    {
      id: 1,
      title: "React Learning",
      author: "Stephen Biz",
      content: "Welcome to learning React!"
    },
    {
      id: 2,
      title: "Installation",
      author: "Schwzdenier",
      content: "You can install React from npm."
    }
  ];

  const courses = [
    { id: 1, cname: "Angular", date: "4/5/2021" },
    { id: 2, cname: "React", date: "6/3/2020" }
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "40px"
      }}
    >

      {/* Course Details */}
      <div style={{ borderRight: "3px solid green", padding: "20px" }}>
        <h1>Course Details</h1>

        {courses.map((course) => (
          <div key={course.id}>
            <h2>{course.cname}</h2>
            <h4>{course.date}</h4>
          </div>
        ))}
      </div>

      {/* Book Details */}
      <div style={{ borderRight: "3px solid green", padding: "20px" }}>
        <h1>Book Details</h1>

        {books.map((book) => (
          <div key={book.id}>
            <h3>{book.bname}</h3>
            <h4>{book.price}</h4>
          </div>
        ))}
      </div>

      {/* Blog Details */}
      <div style={{ padding: "20px" }}>
        <h1>Blog Details</h1>

        {blogs.map((blog) => (
          <div key={blog.id}>
            <h2>{blog.title}</h2>
            <h4>{blog.author}</h4>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;