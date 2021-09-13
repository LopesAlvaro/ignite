export default function RepositoryItem(props){
    return(
        <ul>
        <li>
            <strong>{props.repository.name}</strong>
            <p>{props.repository.description}</p>

            <a href={props.repository.html_url}>
                Acessar repositório
            </a>
        </li>
        </ul>
    )

}
