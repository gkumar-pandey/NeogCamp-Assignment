import React from "react";
import { Link } from "react-router-dom";

const SentEmail = ({ id, message, subject, to }) => {
  return (
    <div>
      <h2>{subject}</h2>
      <p>To : {to}</p>
      <p>Message : {message}</p>
    </div>
  );
};

export default SentEmail;
