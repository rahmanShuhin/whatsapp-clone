import { Avatar } from "@material-ui/core";
import React from "react";
import "./SideBar__Chat.css";
const SideBar__Chat = (props) => {
  const { user, msg } = props.x;
  return (
    <div className="sidebarChat">
      <div className="sidebarChat__left">
        <Avatar alt={user} src=""></Avatar>
      </div>
      <div className="sidebarChat__Right">
        <p>{user}</p>
        <p>{msg}</p>
      </div>
    </div>
  );
};

export default SideBar__Chat;
