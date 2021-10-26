import { Student } from "../Student/Student";

export function Students({ title, list = [], editStudent = () => ({})}) {
    const clickHandler = (student) => {
        const editedStudent = {
            ...student,
            enrolled: !student.enrolled
        };
        editStudent(editedStudent);
    };

    return (
        <>
            <h2>Here is the list of {title}</h2>
            <div>Name - Profession</div>
            <ul>
                {
                    list.map((student, index) =>
                        <li key={index}>
                            <Student {...student}
                                     onClick={() => clickHandler(student)}/>
                        </li>)
                }
            </ul>
        </>
    );
}
