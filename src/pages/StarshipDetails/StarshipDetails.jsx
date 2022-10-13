import { useLocation } from "react-router-dom";


const StarshipDetails = (props) => {
  const location = useLocation()
  return ( 
    <>
    <h3>{location.state.starship.name}</h3>
    </>
   );
}
 
export default StarshipDetails;