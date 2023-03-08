import React from "react";
import Post from "../Posts/Post/Post";
import usePostsStyles from "./styles";

const Posts = () => {
  const classes = usePostsStyles();
  return (
    <>
      <h2>List of PostsPosts</h2>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
