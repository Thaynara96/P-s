export function SkillsList({ Skills}) {
    return (
        <ul>
            {Skills.map((skill) => <li>{skill}</li>)}
            <li></li>
        </ul>
    )
}