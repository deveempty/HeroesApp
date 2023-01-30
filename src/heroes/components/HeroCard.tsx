
export const HeroCard = ({img, name, preview}: {img:string, name:string, preview:string}) => {

  return (
    <>   
    <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img className="object-cover w-full h-56" src={img} alt="avatar" />
    
        <div className="py-5 text-center">
            <a href="#" className="block text-2xl font-bold text-gray-800 dark:text-white" role="link">{name}</a>
            <span className="text-sm text-gray-700 dark:text-gray-200">{preview}</span>
        </div>
    </div>
    
    </>
  )
}
