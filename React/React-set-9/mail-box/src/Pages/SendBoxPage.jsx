import React from "react";
import { useMail } from "../Context/mail-context";
import Email from "../Components/InboxEmail";

const SendBoxPage = () => {
  const {
    mails: { sentEmails }
  } = useMail();
  return (
    <div>
      <h2>Sent Email Page</h2>
      <div>
        <ul>
          {sentEmails.map((email) => (
            <li key={email.id}>
              <Email {...email} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SendBoxPage;
