import { useState } from "react";
import { Plan } from "./component";

function App() {
    const [selectedDay, setSelectedDay] = useState(null);
    const style = {
        width: '80%',
    }

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const plans = {
        'Sunday': ['work', 'work', 'work'],
        'Saturday': ['party', 'party', 'party'],
        'Monday': ['sick day'],
        'Friday': ['work'],
        'Tuesday': ['soccer practice'],
        'Wednesday': ['movie night'],
        'Thursday': ['guests'],
    };

    const today = new Date();
    const currentDay = today.getDay();

    const dayClickHandler = (day) => {
        setSelectedDay(day);
    }

    return (
        <div className="App">
            <header style={style}>
                <h1>Weekend planner</h1>
            </header>
            <section>
                Days of the week:
                {
                    days.map((day, index) => {
                        return (
                            <div key={index} style={{ color: currentDay === index ? 'green' : 'black' }}
                                 onClick={() => dayClickHandler(day)}>
                                {day}
                            </div>
                        )
                    })
                }
                <Plan plans={plans[selectedDay]}/>
            </section>
        </div>
    );
}

export { App };
