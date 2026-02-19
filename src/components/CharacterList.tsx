
import type { CharacterApi } from "../types/CharacterApi"
import { CharacterCard } from "./CharacterCard"
import "../styles/styles.css"

export const CharacterList = (params: {personajes: CharacterApi[]})=>{

    const personajes = params.personajes
    return (
        <>
            <div className="mainContainer">
                {personajes && personajes.map((p)=> <CharacterCard personaje={p}/>)}
            </div>
        </>

    )
}