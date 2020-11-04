import React, { useEffect, useState } from 'react';
import './App.css';
import ChatBody from './Component/ChatBody';
import SideBar from "./Component/SideBar";
import Pusher from "pusher-js";
import axios from "./axios";
function App() {
  const [messages,setMessages]=useState([]);
  useEffect(()=>{
      axios.get("/messages/sync")
      .then(res=>{
        setMessages(res.data);
      })
  },[])
  useEffect(()=>{
    const pusher = new Pusher('d2fc256a8a85e6d46ab6', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('message');
    channel.bind('inserted', (data)=> {
      setMessages([...messages,data])
    });
    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }
  },[messages])
  console.log(messages)
  return (
    <div className="app">
      <div className="app__body">
      <SideBar></SideBar>
      <ChatBody></ChatBody>
      </div>
    </div>
  );
}

export default App;
