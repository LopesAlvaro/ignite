interface RepositoryItemProps{
    repository:{
        name: string;
        description: string;
        html_url: string;
    }
}


export default function RepositoryItem(props: RepositoryItemProps){
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
