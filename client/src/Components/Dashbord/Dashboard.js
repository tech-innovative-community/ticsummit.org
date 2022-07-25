import React from "react";
import Charts from "../charts/Charts";
import "./Dashboard.scss";

const Dashboard = () => {
  // const handleRegister = async (e) => {
  //   e.preventDefault();
  //   if (passwordAgain !== password) {
  //     return toast.error("Passwords don't match", toastOptions);
  //   } else {
  //     const user = {
  //       username,
  //       email,
  //       password,
  //     };
  //     console.log(user);
  //     try {
  //       const { data } = await axios.post(registerRoute, user);
  //       if (data.status === false) {
  //         toast.error(data.msg, toastOptions);
  //       }
  //       if (data.status === true) {
  //         window.location.reload();
  //         navigate("/login");
  //       }
  //     } catch (err) {
  //       toast.error(err, toastOptions);
  //     }
  //   }
  // };
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <Charts />
      <div className="dashboard__container">
        <div className="dashboard__container-users">users</div>
        <div className="dashboard__container-posts">posts</div>
      </div>
    </div>
  );
};

export default Dashboard;
