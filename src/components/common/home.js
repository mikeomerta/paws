import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="home-container">
    <div className="home-text-container">
      <div className="title-text">
        <h1>Cat Compendium</h1>
      </div>       
    </div> 
      <Link to="/cats">
      <div className="cat-button">
      <button className='button is-primary is-outlined'>
          Show Me The Cats!
        </button>
      </div>        
      </Link>
      <div className="image">
        <img src="https://i.imgur.com/IEyfMVb.jpg" alt="smart cat"></img>
      </div>
    </section>
  )
}

export default Home
