import React, { useState, useEffect } from "react";

// STEP 2: import Route, Link, Switch from react router dom


import './app.css';
import { students } from './api/data';

// Components for routing
import { Home } from './components/Home';
import { List } from "./components/List";
import { Student } from './components/Student';


// simulates api call
function fetchStudents() {
    return Promise.resolve({ success: true, data: students });
}

function App() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetchStudents().then(res => setStudents(res.data));
    }, []);

    return (
        <div className="App">
            <nav>
                <h1>Student Registry</h1>
                <div className="nav-links">
                    {/*STEP 3 Make links to navigate to Home '/', and Student's list '/students-list' */}
                </div>
            </nav>

            {/*STEP 4 - Build a Switch block with Route for each of the components at the top*/}
        </div>
    );
}

export { App };
