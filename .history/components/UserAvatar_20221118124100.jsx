import React from "react";

const UserAvatar = ({ image, name ,subscription}) => {
  return (
    <div className="flex flex-col">
      <img src={image} alt="" />
      <h2>{name}</h2>
      <p className="text-gray-500"> {subscription}</p>
    </div>
  );
};

export default UserAvatar;
