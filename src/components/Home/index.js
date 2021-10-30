import React from 'react';
import './index.css';
// React's router history api version is necessary here

export const Home = () => {
    // Step 5 - Build click handler that will navigate to '<base-url>/students-list'

    const routeToList = () => {
        // navigate to 'localhost:3000/students-list'
    };

    return (
        <div className="welcome">
            <p>Welcome to the Student Registry!!!</p>
            <button onClick={routeToList}>See the list!</button>
        </div>
    );
}
