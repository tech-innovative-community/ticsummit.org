import React from "react";
import "./post.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import { Link } from "react-router-dom";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

const Post = ({ post, posts, setPosts }) => {
  const handleDelete = async (id) => {
    await axios
      .delete("https://milesmorales.herokuapp.com/api/post/" + id)
      .then((res) => {
        if (res.status === 200) {
          const newPosts = posts.filter((item) => item._id !== id);
          setPosts(newPosts);
        }
      });
  };
  return (
    <div className="admin__post">
      {post.image && <img src={post.img} alt="" />}
      <div className="admin__post-container">
        <div className="admin__post-title">{post.title}</div>
        <div className="admin__post-content">{post.message}</div>
        <div className="admin__post-date">
          {new Date(post.createdAt).toLocaleString()}
        </div>
        <div className="admin__trash">
          <DeleteIcon className="icon" onClick={() => handleDelete(post._id)} />
          <Link to={`/blog/${post._id}`}>
            <RemoveRedEyeOutlinedIcon className="icon" />
          </Link>
          <EditIcon className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Post;
