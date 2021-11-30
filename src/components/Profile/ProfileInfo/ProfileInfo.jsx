import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src="https://media.istockphoto.com/vectors/concept-of-liberation-with-a-dove-escaping-by-breaking-its-chains-of-vector-id1138883564?k=20&m=1138883564&s=612x612&w=0&h=gjdjI_q28foI9ML0MCyMBkDratLa9pyIPHKcERKsIQw="
          width="1000px"
          height="250px"
          alt=""
        ></img>
      </div>
          <div className={s.descriptionBlock}>
        {" "}
        ava+description
        <img
          src="https://klike.net/uploads/posts/2020-04/1587719791_1.jpg"
          width="50px"
          alt=""
        ></img>
      </div>
    </div>
    )
}

export default ProfileInfo;