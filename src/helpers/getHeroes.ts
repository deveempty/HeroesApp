import { heroesApi } from "../api/heroesApi"

export const getHeroes = async ({heroes}: {heroes:string}) => {

    const { data } = await heroesApi.get(`/api/125744090398388/search/${heroes}`);
    return {
        data: data.results,
        status: data.response
    }

}