import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/index.tsx';
import Cocktail from './Components/CockTail/index.tsx';
import Ingredients from './Components/Ingredients/index.tsx';

function App() {
  return (
    <Router history='browserHistory'>
      <Routes>
        <Route path='/home' Component={Home}/>
        <Route path='/cocktail' Component={Cocktail}/>
        <Route path='/ingredients' Component={Ingredients}/>
      </Routes>
    </Router>
  );
}

export default App;
