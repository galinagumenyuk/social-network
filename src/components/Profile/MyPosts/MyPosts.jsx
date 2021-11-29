import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post";

const MyPosts = () => {
  return (
    <div className={s.postsBlock}>
      <div>
        <h3>My post</h3>
        <textarea></textarea>
        <div>
          <button>Add post</button>
        </div>
        
      </div >
      <div className={s.posts}>
        <Post message='Hi'/>
        <Post message='it is my first post' />
      </div>
    </div>
    )
}

export default MyPosts;