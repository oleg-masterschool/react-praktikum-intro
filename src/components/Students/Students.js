import { Student } from "../Student/Student";

export function Students({ title, list = [], add = () => ({})}) {
    return (
        <>
            <h2>Here is the list of {title}</h2>
            <div>Name - Profession</div>
            <ul>
                {
                    list.map((student, index) =>
                        <li key={index}>
                            <Student {...student}
                                     onClick={() => add(student)}/>
                        </li>)
                }
            </ul>
        </>
    );
}
