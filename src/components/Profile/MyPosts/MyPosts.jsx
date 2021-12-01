import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post";

const MyPosts = () => {

  let posts = [
    { id: 1, post: 'Hi', likesCount: 12 },
    { id: 2, post: 'it is my first post', likesCount: 22 },
  ]

  let postsElements = posts.map(posts => <Post message={posts.post} likesCount={posts.likesCount} />)
  
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
        {postsElements}
      </div>
    </div>
    )
}

export default MyPosts;