
import type { CharacterApi } from "./CharacterApi";
export type apiResponse<T> = {
    count: number;
    next: string | null;     
    previous: string | null; 
    results: T[];           
};


export type CharacterListResponse =apiResponse<CharacterApi>;