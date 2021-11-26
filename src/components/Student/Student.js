export function Student({ name, profession, enrolled, onClick }) {
    return (
        <div onClick={onClick} className="student">
            {name} - {profession} -
            <>&nbsp;{enrolled ? 'enrolled' : 'pending'}</>
        </div>
    )
}
