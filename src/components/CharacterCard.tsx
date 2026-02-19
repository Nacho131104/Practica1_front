import type { CharacterApi } from "../types/CharacterApi"
import "../styles/styles.css";

export const CharacterCard = ({ personaje }: { personaje: CharacterApi }) => {
    return (
        <div className="characterDataContainer">
            <h3 style={{ margin: '0 0 10px 0', color: '#2c3e50' }}>{personaje.name}</h3>
            <p><strong>Altura:</strong> {personaje.height}cm</p>
            <p><strong>Peso:</strong> {personaje.mass}kg</p>
            <p><strong>Género:</strong> {personaje.gender}</p>
            <p style={{ fontSize: '0.8rem', color: '#666', marginTop: 'auto' }}>
                ID: {personaje.url.split('/').filter(Boolean).pop()}
            </p>
        </div>
    );
};