import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css';
import Login from './Login';
import Register from "./Register";
import Home from "./Home";

function App() {
  return (
   
    <Router>
      <Routes>
      <Route path="/" element={<Register/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  
  );
}

export default App;
