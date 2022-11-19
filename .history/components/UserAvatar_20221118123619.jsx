import React from "react";

const UserAvatar = ({ image, name ,subscription}) => {
  return (
    <div className='flex '>
      <img src={image} alt="" />
          <h2>{name}</h2>
          {subscription}
    </div>
  );
};

export default UserAvatar;
