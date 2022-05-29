import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { post } from "../../api/endpoints";
import "./Oneblog.scss";

const Oneblog = () => {
  const location = useLocation();
  const path = location.pathname.split("/");
  const id = path[2];
  const [posts, setPosts] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await axios(`${post}/${id}`);
      setPosts(res.data);
    };
    getPost();
  }, [id]);

  return (
    <div className="OneBlog">
      <div className="oneContainer">
        <div className="oneContainer__title">
          <h1>{posts.title}</h1>
          <p>{new Date(posts.createdAt).toLocaleString()}</p>
        </div>
        {posts.img && <img src={posts.img} alt={posts.title} />}
      </div>
    </div>
  );
};

export default Oneblog;
