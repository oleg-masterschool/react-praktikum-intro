import { Students } from "./components/Students/Students";
import { students } from "./api/students";
import { useState } from "react";

function App(props) {
  const { course, cohort, instructor, beginner = false} = props;
  const coursePrefix = beginner ? 'Beginner' : 'Advanced';
  const [enrolled, setEnrolled] = useState([]);

  const addEnrolled = (student) => {
    setEnrolled([...enrolled, student]);
  };

  return (
    <div className="App">
      <article>
        <h1>Welcome to { coursePrefix } { course }!</h1>
        <p>This is cohort number { cohort }.</p>
        <p>Taught by instructor { instructor }.</p>
        <Students title="candidates" list={students} add={addEnrolled}/>
        <Students title="enrolled" list={enrolled}/>
      </article>
    </div>
  );
}

export { App };
