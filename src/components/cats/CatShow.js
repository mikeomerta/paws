import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import CatCard from './CatCard'

import { getSingleCat } from '../../lib/api'

function CatShow() {
  useLocation()
  const { catId } = useParams()
  const [cats, setCats] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getSingleCat(catId)
        setCats(res.data)
      } catch {
        console.log('cat loading error')
      }
    }
    getData()
  }, [catId])

  
  return (
    <section>
    <div>
    {cats.map(cat => (
        <CatCard 
            key= {cat.id}
            image= {cat.image.url}
            name={cat.name}
            description={cat.description}
            origin={cat.origin}
            catId= {cat.id}
          />)
          
        
      )}
    </div>
  </section>
  )
}

export default CatShow