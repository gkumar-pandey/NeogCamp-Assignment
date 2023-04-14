import React from "react";

const Chat = ({ name, messages }) => {
  return (
    <>
      <h2>{name}'s Chat</h2>
      <ul>
        {messages.map(({ from, message }) => (
          <li>
            <strong>{from}</strong>: {message}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Chat;
