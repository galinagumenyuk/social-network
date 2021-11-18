import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post";

const MyPosts = () => {
  return (
    <div>   
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <Post message='Hi'/>
      <Post message='it is my first post'/>
    </div>
    )
}

export default MyPosts;