import { Link } from 'react-router-dom'

function CatCard({  image , name , description , origin, catId }) {
return (
    <> 
    <div>
    <Link to={`/cats/${catId}`}>
      <h1>{name}</h1>
      <h2>{description}</h2>
      <h3>{origin}</h3>
      <img src={image} alt= "" />
      </Link>
      </div>
    </>
  )

}


export default CatCard