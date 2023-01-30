import { SearchHero } from "../../heroes"
import { AnimatedScroll } from "./AnimatedScroll"
import { Toaster } from "react-hot-toast";




interface Hero { 
  name: string;
}

export const Home = () => {
        
  return (
    <>
    <Toaster/>
    <AnimatedScroll />
      <section className="bg-gray-900 text-white">
        <div
          className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h1
              className="bg-gradient-to-r from-blue-500  to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
            >
              Search information related to
              <span className="sm:block"> YOUR BEST SUPER HERO! </span>
            </h1>
      
            <p className="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
                It is time to search for your Hero information. <br/> What about ... villains? 👀
            </p>
            <SearchHero />
          </div>
        </div>
      </section>
    </>
  )
}
