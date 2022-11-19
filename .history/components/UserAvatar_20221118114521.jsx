import React from "react";

const UserAvatar = ({ image, name }) => {
  return (
    <div className='flex flex-end'>
      <img src={image} alt="" />
      <h2>{name}</h2>
    </div>
  );
};

export default UserAvatar;
