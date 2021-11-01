import React from "react";

import './index.css';
// Import a Link from 'react-router-dom'

export const List = ({ students }) => {
    return (
        <div className="students-list">
            {students.map(student => (
                // STEP 6 - Link starts, navigates from "current_url" to "current_url/student_id"
                    <div className="student-card" key={student.id}>
                        <img src={process.env.PUBLIC_URL + student.image} alt={student.name}/>
                        <p>{student.name}</p>
                    </div>
                // link ends here
            ))}
        </div>
    )
};
