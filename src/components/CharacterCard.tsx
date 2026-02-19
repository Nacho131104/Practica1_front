import type { CharacterApi } from "../types/CharacterApi"
import "./styles.css";

export const CharacterCard = ({ personaje }: { personaje: CharacterApi }) => {
    return (
        <div className="characterDataContainer">
            <h2>{personaje.name}</h2>
            <p><strong>Height:</strong> {personaje.height}</p>
            <p><strong>Mass:</strong> {personaje.mass}</p>
            <p><strong>Gender:</strong> {personaje.gender}</p>
            <p><strong>Birth:</strong> {personaje.birth_year}</p>
            <hr />
            <p>🎬 Films: {personaje.films.length}</p>
            <p>🚀 Starships: {personaje.starships.length}</p>
        </div>
    );
}