import { useState, useEffect } from 'react';
import { getHeroes } from '../helpers/getHeroes';
import { toast } from "react-hot-toast"



export const useFetchHeroes = (heros:string) => {
    const [data = [], setData] = useState<[]>([])
    const [status, setStatus] = useState<boolean>()
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const getData = async () => {
        const { data, status} = await getHeroes({heroes: heros})
        setData(data)
        setIsLoading(false)
        status == 'error' ? toast.error(`${status} - Your hero might not exist`) && setStatus(false) : setStatus(true)
    }
    
    useEffect( () => {
        getData();
    }, [])
    
    
    return {
       data: data, 
       status: status,
       isLoading
    }
    
}