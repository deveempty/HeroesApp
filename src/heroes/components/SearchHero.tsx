
import { ChangeEvent, useEffect, useState } from 'react';
import { HeroGrid } from "./HeroGrid";
import { toast } from "react-hot-toast";


import 'animate.css';
export const SearchHero = () => {
  
    const [searchValue = '', setSearchValue] = useState<string>();
    
    const [categories, setCategories] = useState<string[]>([])
    

  
    const onAddCategory = ( newCategory: string ) => {
      setCategories([newCategory, ...categories])
    }
    
    const onSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchValue.length <= 2) return toast.error(`${searchValue} is not a valid search`)
        onAddCategory(searchValue)
        setSearchValue('')
    }

    const onInputChange = ({target}: ChangeEvent<HTMLInputElement>) => {
        const { value } = target;
        setSearchValue(value)   
    }    
    
    const onOpenHero = () => {
      console.log('Open')
    }
  
  return (
    <>
    <form onSubmit={onSearchSubmit}> 
    <div className="mt-8 flex flex-wrap justify-center gap-4">
        <input className="w-full py-3 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" 
        placeholder="Search"
        type="text"
        value={searchValue}
        onChange={onInputChange}
        />
    </div>
    </form>
    
   
    {
      categories.map((category) => (
      <div className='animate__animated animate__fadeIn'
        onClick={onOpenHero}
      >
        <HeroGrid
        key={category}
        hero={category}
        />
      </div>
      ))
    
    }


    
    </>
  )
}
