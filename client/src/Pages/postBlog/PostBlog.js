import React, { useContext, useState } from "react";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import { AuthContext } from "../../Context/AuthContext";
import CancelIcon from "@mui/icons-material/Cancel";
import axios from "axios";
import "./postBlog.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { cloudinary, post, toastOptions } from "../../api/endpoints";

const PostBlog = () => {
  const { user } = useContext(AuthContext);
  const userId = user.user;
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "srsvrme3");
        await axios.post(cloudinary, formData).then((res) => {
          setImage(res.data.secure_url);
        });
        const blog = {
          title,
          username: userId.username,
          image,
          message,
        };

        await axios.post(post, blog).then((res) => {
          console.log(res);
        });
        toast.success("Blog created succesfull", toastOptions);
        setTitle("");
        setMessage("");
        setFile(null);
      } else {
        const blog = {
          title,
          username: userId.username,
          message,
        };
        await axios.post(post, blog).then((res) => {
          console.log(res);
        });
        toast.success("Blog created succesfull", toastOptions);
        setTitle("");
        setMessage("");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="postBlog">
      <div className="postBlogContainer">
        <div className="topContainer">
          <img src={userId.pic} alt="" />
          <p>{userId.username}</p>
        </div>
        <div className="postContainer">
          <input
            className="form-control"
            placeholder="Enter title"
            type="text"
            name="name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="form-control"
            placeholder="Enter message"
            type="text"
            name="name"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <label htmlFor="file" className="shareOption">
            <PermMediaIcon htmlColor="white" className="shareIcon" />
            <span className="shareOptionText">Photo</span>
            <input
              style={{ display: "none" }}
              type="file"
              id="file"
              accept=".png,.jpeg,.jpg"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </label>
          {file && (
            <div className="shareImgContainer">
              <CancelIcon
                color="white"
                className="shareCancelImg"
                onClick={() => setFile(null)}
              />
              <img
                src={URL.createObjectURL(file)}
                alt="preview"
                style={{ maxWidth: "100%" }}
                className="shareImg"
              />
            </div>
          )}
          <button className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PostBlog;
