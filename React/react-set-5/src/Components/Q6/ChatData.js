import React, { useEffect, useState } from "react";
import { fakeFetch } from "../../api/chatApi";
import Chat from "./Components/Chat";

const ChatData = () => {
  const [chatData, setChatData] = useState("");

  const fetchData = async () => {
    const url = "https://example.com/api/userchat";
    try {
      const { status, data } = await fakeFetch(url);
      status === 200 && setChatData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(chatData);

  return (
    <ul>
      {chatData ? (
        chatData.map((item) => (
          <li>
            <Chat {...item} />
          </li>
        ))
      ) : (
        <h2>Loading...</h2>
      )}
    </ul>
  );
};

export default ChatData;
