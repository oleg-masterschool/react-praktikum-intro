import React, { useState, useEffect } from "react";

// Step 2: import Route, Link Switch from react router dom


import './app.css';
import { students } from './api/data';
import { Link, Route, Switch } from "react-router-dom";
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
                    {/*Step 3 Make links to navigate to Home '/', and Student's list '/students-list' */}
                    <Link to="/">Home</Link>
                    <Link to="/students-list">Students</Link>
                </div>
            </nav>

            {/*Step 4 - Build a Switch block with Route for each of the components at the top*/}
            <Switch>
                <Route path="/students-list/:studentId">
                    <Student students={students}/>
                </Route>
                <Route path="/students-list">
                    <List students={students}/>
                </Route>
                <Route exact path="/">
                    <Home/>
                </Route>
            </Switch>
        </div>
    );
}

export { App };
