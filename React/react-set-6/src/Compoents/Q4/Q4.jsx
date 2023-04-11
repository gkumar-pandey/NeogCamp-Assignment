import React, { useEffect, useState } from "react";
import fakeFetch from "../../Apis/videoapi";
import VideoCard from "./Component/VideoCard";

const Q4 = () => {
  const [playlistData, setPlaylistData] = useState([]);

  const fetchData = async () => {
    const url = "https://example.com/api/videos";
    try {
      const { status, data } = await fakeFetch(url);
      if (status === 200) {
        setPlaylistData(data.videos);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteVideoHandler = () => {
    const newPlayList = playlistData.filter((item, idx) => idx !== 0);

    setPlaylistData(newPlayList);
  };

  return (
    <div>
      <h2>Playlist</h2>
      <div style={coustemStyle.container}>
        {playlistData.length > 0 ? (
          <>
            {playlistData.map((item, idx) => (
              <VideoCard {...item} key={idx} />
            ))}
          </>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
      <button onClick={deleteVideoHandler}>Delete Video</button>
    </div>
  );
};

export default Q4;

const coustemStyle = {
  container: {
    display: "flex",
    flexWrap: "wrap"
  }
};
