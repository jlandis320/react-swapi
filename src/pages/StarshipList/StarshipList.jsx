import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getAllStarships } from "../../services/sw-api"

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
    <>
    {starshipList.map((starship) => 
      <Link to='/starship' state={{starship}} key={starship.name}>{starship.name}</Link>
    )}
    </>
  )
}

export default StarshipList