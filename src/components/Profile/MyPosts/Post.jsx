import React from "react";
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
        <div>
              <img src="https://klike.net/uploads/posts/2020-04/1587719791_1.jpg" alt="" />
              {props.message}
        </div>
        <div>
            <span>like</span>
        </div>
    </div>
    )
}

export default Post;