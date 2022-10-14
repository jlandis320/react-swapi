import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getAllStarships } from "../../services/sw-api"
import './StarshipList.css'

const StarshipList = (props) => {
  const [starshipList, setStarshipList] = useState([])

  useEffect(() => {
    const fetchStarships = async () => {
      const starshipData = await getAllStarships()
      setStarshipList(starshipData.results)
    }
    fetchStarships()
  },[])

  return (
    <div className="main">
    <>
    {starshipList.length ?
    <>
    {starshipList.map((starship) => 
        <Link className='card' to='/starship' state={{starship}} key={starship.name}>{starship.name}</Link>
    )}
    </>
    :
    <div className="card">I'm loading here!</div>
    }
    </>
    </div>
  )
}

export default StarshipList