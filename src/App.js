import { Students } from "./components/Students/Students";
import { students } from "./api/students";
import { useState } from "react";

function App(props) {
  const { course, cohort, instructor, beginner = false} = props;
  const coursePrefix = beginner ? 'Beginner' : 'Advanced';
  const extendedStudents = students.map((student) => {
    return ({
      ...student,
      enrolled: false
    })
  })
  const [candidates, setCandidates] = useState(extendedStudents);

  const enrolled = candidates.filter((student) => {
    return student.enrolled === true;
  });

  const editStudent = (editedStudent) => {
    const newCandidates = candidates.map((student) => {
      if (student.id === editedStudent.id) {
        return editedStudent;
      }
      return student;
    });
    setCandidates(newCandidates);
  }

  return (
    <div className="App">
      <article>
        <h1>Welcome to { coursePrefix } { course }!</h1>
        <p>This is cohort number { cohort }.</p>
        <p>Taught by instructor { instructor }.</p>
        <Students title="candidates" list={candidates} editStudent={editStudent}/>
        <Students title="enrolled" list={enrolled} editStudent={editStudent}/>
      </article>
    </div>
  );
}

export { App };
