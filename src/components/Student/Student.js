export function Student({ name, profession, enrolled, onClick }) {
    return (
        <div onClick={onClick}>
            {name} - {profession} -
            <>&nbsp;{enrolled ? 'enrolled' : 'pending'}</>
        </div>
    )
}
