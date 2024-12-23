import { useState } from "react";
import BlogList from "../bloglist/BlogList";

export default function Home() {
  const [blogs, setBlogs] = useState([
    { title: "Title1", body: "some text...", author: "richie", id: 1 },
    { title: "Title2", body: "some text...", author: "mario", id: 2 },
    { title: "Title3", body: "some text...", author: "richie", id: 3 },
  ]);

  function handleDelete(id) {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  }

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
    </div>
  );
}
