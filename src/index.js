import React from "react";
import ReactDOM from "react-dom";

import ToastEditor from "./component/ToastEditor";

const Index = () => {
    return (
        <div>
            <ToastEditor/>
        </div>
    );
};

ReactDOM.render(<Index />, document.getElementById("root"));