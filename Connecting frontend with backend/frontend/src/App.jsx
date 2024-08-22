import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        // Ensure response.data is an array
        if (Array.isArray(response.data)) {
          setJokes(response.data);
        } else {
          console.error('Expected an array but got:', response.data);
          setJokes([]); // Reset to an empty array if the data is not an array
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // Run only once after the initial render

  return (
    <>
      <h1>Chai and Full Stack</h1>
      <p>JOKES : {jokes.length}</p>
      {
        jokes.map((joke, index) => (
          <div key={index}> {/* Using index as the key if joke.id is not unique */}
            <h3>{joke.title}</h3>
            <p>{joke.content}</p> {/* Ensure you use the correct property */}
          </div>
        ))
      }
    </>
  );
}

export default App;
