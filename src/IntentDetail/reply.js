import React from "react";

const Reply = ({ text }) => {
    return <div className="reply">{text || ""}</div>;
};

export default Reply;
