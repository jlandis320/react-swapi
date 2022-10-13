import { useLocation, Link } from "react-router-dom";


const StarshipDetails = (props) => {
  const location = useLocation()

  return ( 
    <div>
      <h2>Hello, my name is: {location.state.starship.name}</h2>
      <h3>I'm a {location.state.starship.model}!</h3>
      <Link to='/starship-list'>Back to All Starships</Link>
    </div>
  );
}
 
export default StarshipDetails;