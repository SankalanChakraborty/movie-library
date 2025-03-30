import React from "react";
import { useSelector } from "react-redux";
import "./Notification.css";

const Notification = () => {
  const { favourites } = useSelector((store) => store.movies);

  return (
    <div className={`notification-bar success`}>
      <span>
        {favourites[favourites.length - 1].title} added to favourites !
      </span>
    </div>
  );
};

export default Notification;
