import React from "react";

import './index.css';
// Import a Link and useRouteMatch hook from 'react-router-dom'
import { Link } from "react-router-dom";

export const List = ({ students, onClick }) => {
    // Grab the current URL using the hook
    return (
        <div className="students-list">
            {students.map(student => (
                <div>
                    <Link to={`/students-list/${student.id}`}>
                        <div className="student-card" key={student.id}>
                            {/*STEP 6 - Link starts, navigates from "current_url" to "current_url/student_id"*/}
                            <img src={process.env.PUBLIC_URL + student.image} alt={student.name}/>
                            <p>{student.name}</p>

                            {/*link ends here*/}
                        </div>
                    </Link>
                    <button onClick={() => onClick(student.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
};
