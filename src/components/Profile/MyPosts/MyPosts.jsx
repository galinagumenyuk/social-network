import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post";

const MyPosts = () => {

  let postsData = [
    { id: 1, post: 'Hi', likesCount: 12 },
    { id: 2, post: 'it is my first post', likesCount: 22 },
  ]
  
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
        <Post message={postsData[0].post} likesCount={postsData[0].likesCount} />
        <Post message={postsData[1].post} likesCount={postsData[1].likesCount} />
      </div>
    </div>
    )
}

export default MyPosts;