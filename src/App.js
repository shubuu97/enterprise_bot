import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loginUser } from "./Redux/actions/auth";
import Header from "./Header";
import IntentsList from "./IntentList";
import IntentDetail from "./IntentDetail";
import "./app.css";

const App = ({ loginUser, showIntentDetail }) => {
    useEffect(() => {
        loginUser();
    }, []);

    return (
        <>
            <Header />
            <div className="container">
                <div className="intents_list">
                    <IntentsList />
                </div>
                <div className="intent_detail">
                    {showIntentDetail ? (
                        <IntentDetail />
                    ) : (
                        <h3 className="right_text">Please select a intent!</h3>
                    )}
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state) => {
    const showIntentDetail = "detail" in state?.intents ?? {};
    return { showIntentDetail };
};

export default connect(mapStateToProps, { loginUser })(App);
