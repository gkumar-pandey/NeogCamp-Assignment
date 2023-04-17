import React from "react";

const Container = ({ children }) => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  };
  return <div style={styles.container}>{children}</div>;
};

export default Container;
