import RepositoryItem from "./RepositoryItem";
import '../styles/repositories.scss';

// https://api.github.com/orgs/rocketseat/repos

const repository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'https://github.com/unform/unform'
}

export function RespositoryList(){
    return(
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <RepositoryItem repository={repository}/>
            <RepositoryItem repository={repository}/>
            <RepositoryItem repository={repository}/>
            <RepositoryItem repository={repository}/>
        </section>
    )
}