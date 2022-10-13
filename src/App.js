import logo from './logo.svg';
import './App.css';
import StarshipList from './pages/StarshipList/StarshipList';
import { Route, Routes } from 'react-router-dom';
import StarshipDetails from './pages/StarshipDetails/StarshipDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/starship-list' element={<StarshipList />} />
        <Route path='/starship' element={<StarshipDetails />} />
      </Routes>
    </div>
  );
}

export default App;
