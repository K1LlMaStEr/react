import { API_RM } from "../constant/Api.constants";

class RickAndMortiService{

    async getAllCharacters(){
        const response= await fetch(API_RM.CHARACTERS());
        //interceptor
        return response.json();
    }

    async getAllCharacterById(id){
        const response= await fetch(API_RM.CHARACTERS_BY_ID(id));
        //interceptor
        return response.json();
    }

}
export default new RickAndMortiService();