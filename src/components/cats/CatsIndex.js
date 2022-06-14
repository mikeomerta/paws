import React from 'react'
import { getAllCats } from '../../lib/api'
import CatCard from './CatCard'

function CatsIndex() {
  const [cats, setCats] = React.useState(null)
  

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getAllCats()
        const regularisedCats = res.data.map(cat=>{
          if (!cat.image){
            console.log(cat) 
            cat.image = {
              url: '',
            }
          }
          return cat
        })
        setCats(regularisedCats)
        console.log(res.data)
      } catch (error) {
        return error
      }
    }
    getData()
  }, [])

  return (
    <section>
      <div>
      {cats &&
        cats.map(cat => (
          <CatCard 
            key= {cat.id}
            image= {cat.image.url}
            name={cat.name}
            description={cat.description}
            origin={cat.origin}
            catId= {cat.id}
          />
      ))}
      </div>
    </section>
  )
}

export default CatsIndex