import { useFetchHeroes } from '../../hook/useFetchHeroes';
import { HeroCard } from './HeroCard';

interface DataElement {
    image: {
      url: string
    },
    name: string,
    biography: {
      'full-name': string
    }
  }
  
export const HeroGrid = ({hero}: {hero:string}) => {

    const { data, isLoading, status } = useFetchHeroes(hero)

  return (
    <>  
        {
            isLoading && ( <h2> Loading ... </h2>)
            
        }
    
        {
            !status ? '' : <h1 className='bg-gray-800 mt-2 max-auto rounded'><b>{hero}</b></h1>
        }
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4
                gap-4 p-5">
        {
            
            data.map((item: DataElement) => (
                
                <HeroCard img={item.image.url} name={item.name} preview={item.biography['full-name']} />
            
            ))
        
        }
        </div>
    
    </>
  )
}
