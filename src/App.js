import logo from './logo.svg';
import './App.css';
import StarshipList from './pages/StarshipList/StarshipList';
import { Route, Routes } from 'react-router-dom';
import StarshipDetails from './pages/StarshipDetails/StarshipDetails';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/starship-list' element={<StarshipList />} />
        <Route path='/starship' element={<StarshipDetails />} />
      </Routes>
    </div>
  );
}

export default App;
