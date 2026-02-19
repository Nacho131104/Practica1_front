import {useState } from 'react'
import './App.css'
import { api } from './api/api'
import type { CharacterListResponse } from './types/Apiresponse'
import { CharacterList } from './components/CharacterList'


function App() {

  const [error, setError] = useState<string|null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [respuesta, setRespuesta]= useState<CharacterListResponse|null>(null)
  const [urlSiguiente, setNextUrl] = useState<string|null>(null)

  const llamadaApi = async() => {
    await api.get(`people/`).then((e) => {
      setRespuesta(e.data)
      setNextUrl(e.data.next)
    }).catch((e)=> setError(e)).finally(()=>setLoading(false))
  }



  return (
    <>
     <button onClick={()=> {llamadaApi()}}> Llamada a API</button>
     {loading && <p>Loading ....</p>}
     {error && <p>Error: {error}</p>}
     {respuesta && <CharacterList personajes={respuesta.results}/>} 
     {urlSiguiente && <p>siguiente pagina: {urlSiguiente}</p>}
    </>
  )
}

export default App
