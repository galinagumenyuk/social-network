import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((posts) => (
    <Post message={posts.post} likesCount={posts.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  };

  return (
    <div className={s.postsBlock}>
      <div>
        <h3>My post</h3>
        <textarea ref={newPostElement}></textarea>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
