import {useState,useEffect } from 'react'
import './App.css'
import { api } from './api/api'
import type { CharacterListResponse } from './types/Apiresponse'
import { CharacterList } from './components/CharacterList'


function App() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [respuesta, setRespuesta] = useState<CharacterListResponse | null>(null);
  
  const [urlActual, setUrlActual] = useState<string>("https://swapi.dev/api/people/");

  const llamadaApi = async (url: string) => {
    setLoading(true);
    setError(null);
    try {
      const e = await api.get(url);
      setRespuesta(e.data);
    } catch (err: any) {
      setError("Error al cargar los datos");
    } finally {
      setLoading(false);
    }
  };

  // Cada vez que urlActual cambie, pedimos los nuevos datos
  useEffect(() => {
    llamadaApi(urlActual);
  }, [urlActual]);

  return (
    <div className="app-container">
      <h1>Star Wars Characters</h1>

      <div className="buttons">
        <button 
          onClick={() => respuesta?.previous && setUrlActual(respuesta.previous)}
          disabled={!respuesta?.previous || loading}
        >
          Anterior
        </button>
        <button 
          onClick={() => respuesta?.next && setUrlActual(respuesta.next)}
          disabled={!respuesta?.next || loading}
        >
          Siguiente
        </button>
      </div>

      {loading && <p>Cargando página...</p>}
      {error && <p>{error}</p>}
      
      {respuesta && <CharacterList personajes={respuesta.results} />}
    </div>
  );
}

export default App
