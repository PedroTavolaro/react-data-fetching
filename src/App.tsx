

import { useFetch } from './hooks/useFatch';


type Repository = {
  full_name: string;
  description: string;
}

function App() {
 
  const { data: repositories, isFetching } = 
  useFetch<Repository[]>('users/diego3g/repos');

  return (
    <ul>
      { isFetching && <p>Carregando...</p>}
      {repositories?.map(repo => {
          return (
            <li key={repo.full_name}>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </li>
          )
        })
      }
    </ul>
  )
}

export default App

  /*_______________________________________ Busca api tradicional ______________

  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    fetch('https://api.github.com/users/diego3g/repos')
    .then(response => response.json())
    .then(data => {
      setRepositories(data);
    })
  }, [])

  return (
    <ul>
      {
        repositories.map(repo => {
          return (
            <li key={repo.full_name}>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </li>
          )
        })
      }
    </ul>
  )
}

export default App
*/
