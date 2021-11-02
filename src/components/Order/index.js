import React from "react";
import "./index.css";

export function Order(order) {
    const { title, id } = order;

    return (
        <div className="order">
            <div>Order details - {title}</div>
            <div>Order actions</div>
        </div>
    );
}
