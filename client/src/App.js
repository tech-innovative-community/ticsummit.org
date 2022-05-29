import { Route, Routes } from "react-router-dom";
import "./App.css";
import FAQ from "./Pages/FAQ/FAQ";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/About/About";
import CurriculumPage from "./Pages/Curriculum/Curriculum";
import Home from "./Pages/Home/Home";
import Posts from "./Pages/Post/Posts";
import PostBlog from "./Pages/postBlog/PostBlog";
import Auth from "./Pages/Authentication/Auth";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import Oneblog from "./Pages/OneBLog/Oneblog";
import Admin from "./Pages/Admin/Admin";
import Users from "./Components/Users/Users";
import Dashboard from "./Components/Dashbord/Dashboard";
import PostsAdmin from "./Components/posts/Posts";
function App() {
  const { user } = useContext(AuthContext);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/curriculum" element={<CurriculumPage />} />
        <Route path="/blog" element={<Posts />} />
        <Route path="/blog/:id" element={<Oneblog />} />
        <Route path="/login" element={user ? <PostBlog /> : <Auth />} />
        <Route path="/admin" element={user ? <Admin /> : <Auth />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="posts" element={<PostsAdmin />} />
        </Route>
        <Route path="/postBlog" element={user ? <PostBlog /> : <Home />} />
      </Routes>
    </div>
  );
}

export default App;
