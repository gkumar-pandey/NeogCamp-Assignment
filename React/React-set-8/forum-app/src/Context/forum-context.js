import { createContext, useContext, useState } from "react";

export const forumContext = createContext();

export const ForumContextProvider = ({ children }) => {
  const [forumData, setForumData] = useState([]);
  return (
    <forumContext.Provider value={{ forumData, setForumData }}>
      {children}
    </forumContext.Provider>
  );
};

export const useForum = () => useContext(forumContext);
