import React from "react";
import { NotificationText } from "./Notification.styled";

const Notification = ({ message }) => {
    return (
        <NotificationText>{message}</NotificationText>
    )
}

export default Notification;