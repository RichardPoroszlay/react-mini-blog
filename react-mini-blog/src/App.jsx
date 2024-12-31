import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import NewBlog from "./components/newBlog/NewBlog";
import BlogDetails from "./components/blogDetails/BlogDetails";
import NotFound from "./components/notFound/NotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/newblog" element={<NewBlog />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
