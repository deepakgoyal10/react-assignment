import './App.css';
import Navbar from './components/navbar/Navbar';
import Movies from './components/movies/Movies';
import Summary from './pages/summary/Summary';



import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"



function App() {
  return (
    <div >
        <Router>

     <Navbar/>
     <Routes>
      <Route exect path='/' element={<Movies/>}/>
      <Route exect path='/summary/:id' element={<Summary/>}/>
     </Routes>
        </Router>

    </div>
  );
}

export default App;
