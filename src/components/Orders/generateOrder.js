import { v4 as uuidv4 } from 'uuid';

const titles = ['Coffee', 'Tea', 'Salad', 'Steak', 'Chicken soup', 'Vegan Burger'];

export function generateOrder() {
    return (
        {
            id: uuidv4(),
            title: titles[Math.floor(Math.random() * titles.length)],
            price: 10
        }
    )
}