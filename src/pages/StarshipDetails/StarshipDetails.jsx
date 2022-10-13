import { useLocation } from "react-router-dom";


const StarshipDetails = (props) => {
  const location = useLocation()

  return ( 
    <div>
    <h3>Hello, my name is: {location.state.starship.name}</h3>
    <h3>I'm a {location.state.starship.model}!</h3>
    </div>
  );
}
 
export default StarshipDetails;