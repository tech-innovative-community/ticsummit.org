import axios from "axios";
import "./users.scss";
import React, { useContext, useEffect } from "react";
import { remove, use } from "../../api/endpoints";
import { AuthContext } from "../../Context/AuthContext";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Users = () => {
  const { user } = useContext(AuthContext);
  const data = user.user;
  const [users, setUsers] = React.useState([]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        await axios.get(use).then((res) => {
          setUsers(res.data);
          console.log(res.data);
        });
      } catch (error) {
        console.log(error);
      }
    };

    getUsers();
  }, []);

  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(remove + id).then((res) => {
        console.log(res.msg);
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="app__users">
      {users.map((user) => {
        return (
          <div className="app__user">
            <div className="user__container">
              <div className="app__user__avatar">
                <img src={user.pic} alt="" />
              </div>
              {data._id === user._id ? (
                <span>You</span>
              ) : (
                <div className="name__container">
                  <div className="app__user__name">{user.username}</div>
                  <div className="app__user__email">{user.email}</div>
                </div>
              )}
            </div>
            {data._id === user._id ? (
              <EditIcon className="icon" />
            ) : (
              <DeleteIcon
                className="icon"
                onClick={() => handleDeleteUser(user._id)}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Users;
