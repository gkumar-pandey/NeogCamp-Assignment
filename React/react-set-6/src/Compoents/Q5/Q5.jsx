import React, { useEffect, useState } from "react";
import fakeFetch from "../../Apis/socialMediaApi";
import PostCard from "./Components/PostCard";

const Q5 = () => {
  const [postsData, setPostsData] = useState([]);

  const fetchData = async () => {
    const url = "https://example.com/api/posts";
    try {
      const { status, data } = await fakeFetch(url);
      if (status === 200) {
        setPostsData(data.posts);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const showBakeryHandler = () => {
    const filterPostsData = postsData.filter(
      ({ category }) => category === "Bakery"
    );
    setPostsData(filterPostsData);
  };
  return (
    <div>
      <h2>Social Media</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {postsData.map((post) => (
          <PostCard {...post} />
        ))}
      </div>
      <button onClick={showBakeryHandler}>Show Bakery</button>
    </div>
  );
};

export default Q5;
