import { useState } from "react";

export function Student({ name, profession }) {
    const [enrolled, setEnrolled] = useState(false);

    return (
        <div onClick={() => setEnrolled(!enrolled)}>
            {name} - {profession} -
            <>&nbsp;{enrolled ? 'enrolled' : 'pending'}</>
        </div>
    )
}
