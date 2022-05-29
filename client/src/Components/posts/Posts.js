import axios from "axios";
import React, { useEffect, useState } from "react";
import { post } from "../../api/endpoints";
import "./posts.scss";
import Post from "../post/Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        await axios.get(post).then((response) => {
          setPosts(
            response.data.sort((p1, p2) => {
              return new Date(p2.createdAt) - new Date(p1.createdAt);
            })
          );
        });
      } catch (error) {
        setIsError(error);
      }
    };
    fetchPost();
  }, []);

  return (
    <div className="app__post-finder">
      {posts.map((item, index) => (
        <Post post={item} key={index} posts={posts} setPosts={setPosts} />
      ))}
    </div>
  );
};

export default Posts;
