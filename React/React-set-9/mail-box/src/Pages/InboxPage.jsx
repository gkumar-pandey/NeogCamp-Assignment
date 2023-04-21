import React from "react";
import { useMail } from "../Context/mail-context";
import Email from "../Components/InboxEmail";

const InboxPage = () => {
  const {
    mails: { emails }
  } = useMail();

  const { readMails, unReadMails } = emails?.reduce(
    (acc, curr) => {
      return curr.read
        ? { ...acc, readMails: acc.readMails + 1 }
        : { ...acc, unReadMails: acc.unReadMails + 1 };
    },
    {
      readMails: 0,
      unReadMails: 0
    }
  );

  return (
    <>
      <h2>Inbox Page</h2>
      {emails.length !== 0 ? (
        <>
          <div>
            <div>
              <p>Unread Emails : {unReadMails}</p>
              <p>Read Emails : {readMails}</p>
            </div>
            <div>
              <ul>
                {emails.map((email) => (
                  <li key={email.id}>
                    <Email {...email} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1>Loading...</h1>
        </>
      )}
    </>
  );
};

export default InboxPage;
