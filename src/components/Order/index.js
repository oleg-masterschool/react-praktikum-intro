import React from "react";
import "./index.css";

export function Order({ title, id, makeUrgent }) {
    return (
        <div className="order">
            <div>{title}</div>
            &nbsp;
            <div className="actions"> - Order actions -&nbsp;
                <button onClick={makeUrgent}>Make it quick!</button>
            </div>
        </div>
    );
}
