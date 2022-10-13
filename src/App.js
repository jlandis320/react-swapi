import logo from './logo.svg';
import './App.css';
import StarshipList from './pages/Starships/Starships';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <StarshipList />
      <Routes>
        <Route path='/starship' element={</>} />
      </Routes>
    </div>
  );
}

export default App;
