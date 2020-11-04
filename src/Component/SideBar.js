import React from "react";
import "./SideBar.css";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import SideBar__Chat from "./SideBar__Chat";
const SideBar = () => {
  const user = [
    { user: "ali", msg: "hello" },
    { user: "nazim", msg: "hi" },
    { user: "shuhin", msg: "hello" },
  ];
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__headerLeft">
          <Avatar alt="Remy Sharp" src="#" />
        </div>
        <div className="sidebar__headerRight">
          <DonutLargeIcon></DonutLargeIcon>
          <ChatIcon></ChatIcon>
          <MoreVertIcon></MoreVertIcon>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchIcon></SearchIcon>
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>
      <div className="sidebar__ChatList">
        {user.map((x) => (
          <SideBar__Chat x={x}></SideBar__Chat>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
