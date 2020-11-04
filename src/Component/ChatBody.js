import { Avatar } from "@material-ui/core";
import React from "react";
import "./ChatBody.css";
import AttachmentIcon from "@material-ui/icons/Attachment";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import MicIcon from "@material-ui/icons/Mic";
const ChatBody = () => {
  const user = "shuhin";
  const message = [];
  return (
    <div className="chatBody">
      <div className="chatBody__header" fixed>
        <div className="chatBody__headerLeft">
          <Avatar alt="s" src="#"></Avatar>
          <div>
            <p>Dance Room</p>
            <small>last seen Fri, 04 Sep 2020</small>
          </div>
        </div>
        <div className="chatBody__headerRight">
          <SearchIcon></SearchIcon>
          <AttachmentIcon></AttachmentIcon>
          <MoreVertIcon></MoreVertIcon>
        </div>
      </div>
      <div className="chat__message">
        {message.map((x) =>
          user === x.user ? (
            <p className="chat__messageUser">
              <span>{x.user}</span>
              {x.msg}
              <span>{new Date().toUTCString()}</span>
            </p>
          ) : (
            <p className="chat__messageOther">
              <span>{x.user}</span>
              {x.msg}
              <span>{new Date().toUTCString()}</span>
            </p>
          )
        )}
      </div>
      <div className="chatBody__footer">
        <EmojiEmotionsIcon></EmojiEmotionsIcon>
        <form>
          <input type="text" />
          <input type="submit" value="Submit" />
        </form>
        <MicIcon></MicIcon>
      </div>
    </div>
  );
};

export default ChatBody;
