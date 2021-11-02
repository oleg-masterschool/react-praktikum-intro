import uuid from "uuid";

const titles = ['Coffee', 'Tea', 'Salad', 'Steak'];

export function generateOrder() {
    return (
        {
            id: uuid(),
            title: titles[Math.floor(Math.random() * titles.length)],
            price: 10
        }
    )
}