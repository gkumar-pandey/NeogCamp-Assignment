import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useMail } from "../Context/mail-context";

const Email = ({ subject, read, id }) => {
  const location = useLocation();

  const { markAsReadHandler } = useMail();

  return (
    <div>
      <Link to={`${location.pathname}/email/${id}`}>{subject}</Link>
      {!read && location.pathname === "/inbox" && (
        <button onClick={() => markAsReadHandler(id)}>Mark as read</button>
      )}
    </div>
  );
};

export default Email;
