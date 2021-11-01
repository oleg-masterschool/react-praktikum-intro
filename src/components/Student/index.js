import React from "react";
import { useParams } from "react-router-dom";
import './index.css';

export const Student = ({ students, cohort }) => {
    // STEP 7 - we need to find a student out of all the students, using the id from the URL
    // Beware: URL params are strings, while ids are integers!
    const { studentId } = useParams();
    // const student = {};
    // const student = students.filter(student => student.id == studentId)[0]

    const student = students.find(student => student.id === parseInt(studentId)) || {};
    const { image, name, profession } = student;

    return (
        <div className="student-item">
            <img src={process.env.PUBLIC_URL + image} alt={name}/>
            <p>Name: {name}</p>
            <p>profession: {profession}</p>
            <p>cohort: { cohort }</p>
        </div>
    );
}
