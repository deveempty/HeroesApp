import { heroesApi } from "../api/heroesApi"

export const getHeroes = async ({heroes}: {heroes:string}) => {

    const { data } = await heroesApi.get(`/api.php/${process.env.REACT_APP_MY_KEY}/search/${heroes}`);
    return {
        data: data.results,
        status: data.response
    }

}