import React, { useReducer } from "react";
import { Order } from "../Order";
import { initialState, reducer } from "../../reducers/ordersReducer";
import { generateOrder } from "./generateOrder";

export function Orders() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const onAdd = () => {
        debugger
        const order = generateOrder();
        dispatch({ type: 'ADD', data: order });
    }

    return (
        <>
            <ul>
                {state.orders.map(order => {
                    return <li><Order {...order}/></li>
                })}
            </ul>
            <button onClick={onAdd}>Add order</button>
        </>
    )
}
