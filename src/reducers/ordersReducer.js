export const initialState = {
    orders: []
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return { ...state, orders: state.orders.concat([action.data.order]) };
        case 'CLEAR':
            return { ...state, orders: []};
        case 'UPDATE':
            const updatedOrder = action.data.updatedOrder;

            const updatedOrders = state.orders.map(order => {
                if(order.id === updatedOrder.id) {
                    return updatedOrder;
                }
                return order;
            })
            return { ...state, orders: updatedOrders};
        case 'DELETE':
            const newOrders = state.orders.filter(order => order.id !== action.data.id)
            return { ...state, orders: newOrders};
        default:
            return state;
    }
};
