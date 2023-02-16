import { heroesApi } from "../api/heroesApi"

export const getHeroes = async ({heroes}: {heroes:string}) => {

    const { data } = await heroesApi.get(`/api.php/${import.meta.env.VITE_API_KEY}/search/${heroes}`);
    return {
        data: data.results,
        status: data.response
    }

}