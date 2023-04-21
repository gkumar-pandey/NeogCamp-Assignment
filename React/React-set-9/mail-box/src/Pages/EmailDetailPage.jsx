import React from "react";
import { useMail } from "../Context/mail-context";
import { useLocation, useParams } from "react-router-dom";

const EmailDetailPage = () => {
  const location = useLocation();
  const {
    mails: { emails, sentEmails }
  } = useMail();
  const { emailId } = useParams();

  let email = "";
  if (location.pathname.split("/")[1] === "inbox") {
    email = emails.find((email) => email.id === Number(emailId));
  } else {
    email = sentEmails.find((email) => email.id === Number(emailId));
  }

  return (
    <div>
      {location.pathname.split("/")[1] === "inbox" ? (
        <>
          <div>
            <h2>{email.subject}</h2>
            <p>From: {email.sender}</p>
            <p>Message : {email.message}</p>
          </div>
        </>
      ) : (
        <>
          <div>
            <h2>{email.subject}</h2>
            <p>To : {email.to}</p>
            <p>Message: {email.message}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default EmailDetailPage;
