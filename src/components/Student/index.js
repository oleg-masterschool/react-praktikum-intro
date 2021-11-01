import React from "react";
// import useParams hook from 'react-router-dom'
import './index.css';

export const Student = ({ students }) => {
    // STEP 7 - we need to find a student out of all the students, using the studentId from the URL
    // Beware: URL params are strings, while ids are integers!

    const student = {};
    const { image, name, profession } = student;

    return (
        <div className="student-item">
            <img src={process.env.PUBLIC_URL + image} alt={name}/>
            <p>{name}</p>
            <p>{profession}</p>
        </div>
    );
}
