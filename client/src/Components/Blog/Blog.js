import React from "react";
import "./Blog.scss";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";

const Blog = ({ posts }) => {
  return (
    <div className="BlogsContainer">
      {posts.img ? (
        <React.Fragment>
          <img src={posts.img} alt="" />
          <div className="blogCont">
            <div className="blogCont__top">
              <h1>{posts.username}</h1>
            </div>
            <p className="date">{new Date(posts.createdAt).toLocaleString()}</p>
            <p className="title">{posts.title}</p>
            <p className="message">{posts.message}</p>
            <div className="viewMore">
              <Link to={`/blog/${posts._id}`} className="link">
                see more
                <ArrowRightAltIcon className="seeMore" />
              </Link>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="blogCont noImg">
            <p className="title">{posts.title}</p>
            <p className="message">{posts.message}</p>
            <p className="date">
              <span>{new Date(posts.createdAt).toLocaleString()}</span>
            </p>
            <div className="viewMore">
              <Link to={`/blog/${posts._id}`} className="link">
                see more
                <ArrowRightAltIcon className="seeMore" />
              </Link>
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Blog;
