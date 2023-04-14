import React, { useEffect, useState } from "react";
import { fakeFetch } from "../../Apis/singleVideoapi";
import VideoCard from "./VideoCard";

const Q9 = () => {
  const [video, setVideo] = useState("");

  const fetchData = async () => {
    const url = "https://example.com/api/getvideo";
    try {
      const { status, data } = await fakeFetch(url);
      if (status === 200) {
        setVideo(data.videos);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addLabelHandler = (label) => {
    setVideo((pre) => ({ ...pre, ...label }));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <VideoCard {...video} />
      <button onClick={() => addLabelHandler({ label: "self motivated" })}>
        Add Label
      </button>
    </div>
  );
};

export default Q9;
