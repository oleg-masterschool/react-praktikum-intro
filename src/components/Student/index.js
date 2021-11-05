import React from "react";
import styled from 'styled-components';
import { useParams } from "react-router-dom";
const SMALL_FONT_SIZE = "16px";

export const Paragraph = styled.p`
  font-size: ${({ small }) => small ? SMALL_FONT_SIZE : "48px"};
`;

const StudentItem = styled.div`
  max-width: 80%;
`;

export const Student = ({ students, cohort }) => {
    // STEP 7 - we need to find a student out of all the students, using the id from the URL
    // Beware: URL params are strings, while ids are integers!
    const { studentId } = useParams();
    // const student = {};
    // const student = students.filter(student => student.id == studentId)[0]

    const student = students.find(student => student.id === parseInt(studentId)) || {};
    const { image, name, profession } = student;

    return (
        <StudentItem>
            <img src={process.env.PUBLIC_URL + image} alt={name}/>
            <Paragraph>Name: {name}</Paragraph>
            <Paragraph>profession: {profession}</Paragraph>
            <Paragraph>cohort: { cohort }</Paragraph>
        </StudentItem>
    );
}
