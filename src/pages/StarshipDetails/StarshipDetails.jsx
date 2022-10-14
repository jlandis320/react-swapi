import { useLocation, Link } from "react-router-dom";


import './StarshipDetails.css'

const StarshipDetails = (props) => {
  const location = useLocation()

  return ( 
    <div className="main">
    <div className="detail-card">
      <h2>Hello, my name is: {location.state.starship.name}</h2>
      <div className="card-body">
      <h3>I'm a {location.state.starship.model}!</h3>
      <h4>I was made by {location.state.starship.manufacturer}. I am {location.state.starship.length} feet long and I can reach speeds of {location.state.starship.max_atmosphering_speed} kph.</h4>
      </div>
      <Link to='/starship-list'>Back to All Starships</Link>
    </div>
    </div>
  );
}

export default StarshipDetails;