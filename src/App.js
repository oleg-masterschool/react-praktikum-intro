import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
// Step 2: import Route, Link Switch from react router dom


import './app.css';
// import { students } from './api/data';
import cohortData from './api/data01.json';
import { Link, Route, Switch } from "react-router-dom";
// Components for routing
import { Home } from './components/Home';
import { List } from "./components/List";
import { Student } from './components/Student';


// simulates api call
async function fetchStudents() {
    const response = await fetch('http://localhost:3000/students');
    return response.json();
}

function fetchCohort() {
    return Promise.resolve({ success: true, data: cohortData });
}

function deleteStudent(id) {
    return fetch(`http://localhost:3000/students/${id}`, { method: "DELETE" });
}

function App() {
    const history = useHistory();
    const [students, setStudents] = useState([]);
    const [cohort, setCohort] = useState([]);

    useEffect(() => {
        fetchStudents().then((data) =>
            setStudents(data)
        );
    }, []);

    useEffect(() => {
        async function getCohort() {
            const res = await fetchCohort();
            setCohort(res.data.cohort);
        }

        getCohort();
    }, []);

async function removeStudent(id) {
    await deleteStudent(id);
    const data = await fetchStudents();
    setStudents(data);
    history.push('/');
}

return (
    <div className="App">
        <nav>
            <h1>Student Registry</h1>
            <h2>Welcome to number {cohort}!</h2>
            <div className="nav-links">
                {/*Step 3 Make links to navigate to Home '/', and Student's list '/students-list' */}
                <Link to="/">Home</Link>
                <Link to="/students-list">Students</Link>
            </div>
        </nav>

        {/*Step 4 - Build a Switch block with Route for each of the components at the top*/}
        <Switch>
            <Route path="/students-list/:studentId">
                <Student cohort={cohort} students={students}/>
            </Route>
            <Route path="/students-list">
                <List students={students} onClick={removeStudent}/>
            </Route>
            <Route exact path="/">
                <Home/>
            </Route>
        </Switch>
    </div>
);
}

export { App };
