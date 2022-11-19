import React from "react";

const UserAvatar = ({ image, name ,subscription}) => {
  return (
    <div className="flex flex-col">
      <img src={image} alt="" />
      <h2 className="text-">{name}</h2>
      <p className="text-gray-600 text-xl"> {subscription}</p>
    </div>
  );
};

export default UserAvatar;
