
import axios from 'axios';
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom';

export type Repository = {
  full_name: string;
  description: string;
}

export function Repos() {
 
  const { data, isFetching } = useQuery<Repository[]>('repos', async () => {
    const response = await axios.get('https://api.github.com/users/diego3g/repos')
    return response.data;
  }, {
      staleTime: 1000 * 60,
  })

  return (
    <ul>
      { isFetching && <p>Carregando...</p>}
      {data?.map(repo => {
          return (
            <li key={repo.full_name}>
              <Link to={`repos/${repo.full_name}`}>
              {repo.full_name}</Link>
              <p>{repo.description}</p>
            </li>
          )
        })
      }
    </ul>
  )
}



  /* sem lib _____________________________ //
      useEffect(() => {
      window.addEventListener('focus', () => {
      })
    }, [])
  */

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
