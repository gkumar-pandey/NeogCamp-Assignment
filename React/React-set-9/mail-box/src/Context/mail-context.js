import { createContext, useContext, useEffect, useState } from "react";
import { fakeFetch } from "../api/api";

const mailContext = createContext();

export const MailContextProvider = ({ children }) => {
  const [mails, setMails] = useState({
    emails: [],
    sentEmails: []
  });
  const fetchMails = async () => {
    const url = "https://example.com/api/allemails";
    try {
      const res = await fakeFetch(url);
      setMails(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMails();
  }, []);

  const markAsReadHandler = (emailId) => {
    const { emails } = mails;
    const updatedMarkAsReadMails = emails.map((email) => {
      return email.id === emailId ? { ...email, read: true } : email;
    });

    setMails((pre) => ({ ...pre, emails: [...updatedMarkAsReadMails] }));
  };

  return (
    <mailContext.Provider value={{ mails, markAsReadHandler }}>
      {children}
    </mailContext.Provider>
  );
};

export const useMail = () => useContext(mailContext);
