import React from 'react'
import Graph1 from '../../Assets/GraphData (1).jpeg'
import Graph2 from '../../Assets/GraphData.jpeg'
import Graph3 from '../../Assets/GraphData (2).jpeg'
import Graph4 from '../../Assets/GraphData (3).jpeg'
import './home.css'

const Home = () => {
  const images = [Graph1, Graph2, Graph3, Graph4];
  return (
    <div id='details'>
      {images.map(image => {
        return(
          <img src={image}/>
        )
      })}
    </div>
  )
}

export default Home