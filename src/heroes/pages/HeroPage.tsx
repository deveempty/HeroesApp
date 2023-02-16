import { FC } from "react"

export const HeroPage:FC = () => {
  return (
    <>
    <div className="row mt-5">
    <div className="col-4">
      <img 
      src='{`/assets/heroes/${id}.jpg`}'
      alt='{hero.superhero}'
      className="img-thumbnail animate__animated animate__fadeInLeft"
      />
    </div>
    
    <div className="col-8">
      <h3>Name</h3>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><b>Alter Ego:</b>alter ego</li>
        <li className="list-group-item"><b>Publisher:</b>publisher</li>
        <li className="list-group-item"><b>First Apperance:</b>info</li>
      </ul>
      
      <h5 className="mt-3"> Characters </h5>
      <p></p>
      
      <button 
      className="btn btn-outline-primary"
      >
        Back
      </button>
      
      
      </div>
  </div>
    </>
  )
}
