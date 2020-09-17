import React from "react";

const Suggestion = ({ text }) => {
    return <div className="reply">{text || ""}</div>;
};

export default Suggestion;
