import React from "react";
import { connect } from "react-redux";
import ReplyIcon from "@material-ui/icons/Reply";
import SuggestionIcon from "@material-ui/icons/Highlight";
import PictureIcon from "@material-ui/icons/Collections";
import CircularProgress from "@material-ui/core/CircularProgress";
import Reply from "./reply";
import Suggestion from "./suggestion";
import Picture from "./picture";
import "./style.css";

const IntentDetail = ({ data, loading }) => {
    const { displayName, replies, suggestions } = data?.intent ?? {};
    return (
        <>
            {loading ? (
                <div className="loader">
                    <CircularProgress />
                </div>
            ) : (
                <>
                    <div className="heading">{displayName}</div>
                    <div className="detail">
                        <div className="mb_40">
                            <div className="detail_heading">
                                <ReplyIcon style={{ height: "16px" }} />
                                Replies
                            </div>
                            {Array.isArray(replies) &&
                                replies.length > 0 &&
                                replies.map((reply) => {
                                    return <Reply text={reply} />;
                                })}
                        </div>
                        <div className="mb_40">
                            <div className="detail_heading">
                                <SuggestionIcon style={{ height: "18px" }} />
                                Suggestions
                            </div>
                            {Array.isArray(suggestions) && suggestions.length > 0
                                ? suggestions.map((suggestion) => {
                                      return <Suggestion text={suggestion} />;
                                  })
                                : "No suggestions found!"}
                        </div>
                        <div className="mb_40">
                            <div className="detail_heading">
                                <PictureIcon style={{ height: "18px" }} />
                                Pictures
                                <Picture />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

const mapStateToProps = (state) => {
    const { data, loading } = state?.intents?.detail ?? {};
    return { data, loading };
};

export default connect(mapStateToProps)(IntentDetail);
