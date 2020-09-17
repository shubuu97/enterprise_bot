import React from "react";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getIntentDetail } from "../Redux/actions/intent";
import "./style.css";

const IntentList = ({ intentsList, getIntentDetail }) => {
    return (
        <>
            <div className="heading">Intents</div>
            <div className="intents_container">
                {(intentsList || []).length > 0 ? (
                    (intentsList || []).map((intent) => {
                        return (
                            <div
                                className="intent"
                                onClick={() => getIntentDetail(intent?.id ?? "")}
                            >
                                {intent?.displayName ?? ""}
                            </div>
                        );
                    })
                ) : (
                    <div className="loader">
                        <CircularProgress />
                    </div>
                )}
            </div>
        </>
    );
};

const mapStateToProps = (state) => {
    const intentsList = state?.intents?.list?.data ?? [];
    return { intentsList };
};

export default connect(mapStateToProps, { getIntentDetail })(IntentList);
