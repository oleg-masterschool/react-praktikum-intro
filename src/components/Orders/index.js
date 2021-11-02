import React, { useReducer } from "react";
import { Order } from "../Order";
import { generateOrder } from "./generateOrder";
import { initialState, ordersReducer } from "../../reducers/orderReducer";
import { ORDERS } from "../../actions/ordersActions";

export function Orders() {
    const [state, dispatch] = useReducer(ordersReducer, initialState);

    const onAdd = () => {
        const order = generateOrder();
        dispatch({ type: ORDERS.ADD, data: order });
    }

    function onClear() {
        dispatch({ type: ORDERS.CLEAR });
    }

    function onUrgent(id) {
        dispatch({ type: ORDERS.MAKE_URGENT, data: id })
    }

    return (
        <>
            <button onClick={onClear}>Clear all orders!</button>
            <ul>
                {state.orders.map(order => {
                    return <li key={order.id}><Order {...order} makeUrgent={() => onUrgent(order.id)}/></li>
                })}
            </ul>
            <button onClick={onAdd}>Add order</button>
        </>
    )
}
