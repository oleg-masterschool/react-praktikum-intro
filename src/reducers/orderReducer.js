import { ORDERS } from "../actions/ordersActions";

export const initialState = {
    orders: []
};

export function ordersReducer(state, action) {
    switch (action.type) {
        case ORDERS.ADD:
            return { ...state, orders: state.orders.concat([action.data]) };
        case ORDERS.CLEAR:
            return { ...state, orders: [] };
        case ORDERS.MAKE_URGENT:
            const id = action.data;
            const urgentOrder = state.orders.find(order => order.id == id) || {};
            const newOrders = state.orders.filter(order => order.id !== id);

            return { ...state, orders: [urgentOrder].concat(newOrders) };
        default:
            return state;
    }
}
