import React from "react";
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
        <div>
          <img
            src="https://vjoy.cc/wp-content/uploads/2019/07/1-1.jpg"
            width="1000px"
            height="200px"
            alt=""
          ></img>
        </div>
        <div>
          {" "}
          ava+description
          <img
            src="https://klike.net/uploads/posts/2020-04/1587719791_1.jpg"
            width="50px"
            alt=""
          ></img>
        </div>
        <div>
          my post
          <div>new post</div>
          <div> post1</div>
          <div> post2</div>
        </div>
      </div>
    )
}

export default Profile;