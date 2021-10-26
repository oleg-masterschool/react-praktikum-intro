import { useState } from "react";

export function Student({ name, profession, onClick }) {
    const [enrolled, setEnrolled] = useState(false);

    const clickHandler = () => {
        setEnrolled(!enrolled);
        onClick && onClick();
    };

    return (
        <div onClick={clickHandler}>
            {name} - {profession} -
            <>&nbsp;{enrolled ? 'enrolled' : 'pending'}</>
        </div>
    )
}
