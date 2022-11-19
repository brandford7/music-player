import React from "react";

const UserAvatar = ({ image, name ,subscriptio}) => {
  return (
    <div className='flex '>
      <img src={image} alt="" />
      <h2>{name}</h2>
    </div>
  );
};

export default UserAvatar;
