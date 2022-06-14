import { Link } from 'react-router-dom'

function CatCard({  image , name , description , origin, catId }) {
return (
    <div className="column is-one-third-desktop is-one-third-tablet">
    <div>
    <Link to={`/cats/${catId}`}>
    <div className="card-container">
    <div className="card">
    <div className="card-header">
    <div className="card-header-title is-centered">{name}</div>
    </div>
    <div className="card-image">
    <figure className="image image-is-1by1">
    <img src={image} alt= "" />
    </figure>
    </div>
    <div className="origin-text">
    <h3>{origin}</h3>
    </div> 
    <div className="description-text">
    <div className="card-content">
    <h2>{description}</h2>
    </div>   
    </div>
    </div>      
    </div>
    </Link>
    </div>
    </div>
)}

export default CatCard