import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div>
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
      <MyPosts />
    </div>
    )
}

export default Profile;