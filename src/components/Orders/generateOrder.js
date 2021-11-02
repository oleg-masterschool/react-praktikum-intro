import { v4 } from "uuid";

const titles = ['Coffee', 'Tea', 'Salad', 'Steak'];

export function generateOrder() {
    return (
        {
            id: v4(),
            title: titles[Math.floor(Math.random() * titles.length)],
            price: 10
        }
    )
}