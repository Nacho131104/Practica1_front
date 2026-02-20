import {useState,useEffect } from 'react'
import './App.css'
import { api } from './api/api'
import type { CharacterListResponse } from './types/Apiresponse'
import { CharacterList } from './components/CharacterList'
import "./styles/styles.css"

function App() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [respuesta, setRespuesta] = useState<CharacterListResponse | null>(null);
  const [urlActual, setUrlActual] = useState<string>("https://swapi.dev/api/people/");
  const [busquedaIniciada, setBusquedaIniciada] = useState<boolean>(false);

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

  useEffect(() => {
    if (busquedaIniciada) {
      llamadaApi(urlActual);
    }
  }, [urlActual, busquedaIniciada]);

  const BusquedaInicial = () => {
    setBusquedaIniciada(true);
    llamadaApi(urlActual);
  };

  return (
    <div className="app-container">
      <h1>Personajes Star Wars</h1>

      <div className="buttons">
        {busquedaIniciada && respuesta && (
          <button 
            onClick={() => respuesta.previous && setUrlActual(respuesta.previous)}
            disabled={!respuesta.previous || loading}
          >
            Anterior
          </button>
        )}

        <button onClick={BusquedaInicial} disabled={loading}>
          {busquedaIniciada ? "": "Buscar Personajes"}
        </button>

        {busquedaIniciada && respuesta && (
          <button 
            onClick={() => respuesta.next && setUrlActual(respuesta.next)}
            disabled={!respuesta.next || loading}
          >
            Siguiente
          </button>
        )}
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      
      {busquedaIniciada && respuesta && <CharacterList personajes={respuesta.results} />}
      
    </div>
  );
}

export default App
