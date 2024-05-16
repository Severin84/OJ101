import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css';
import Login from './Login';
import Register from "./Register";
import Editor from "./Editor";
import Home from "./Home/Home";
import AdminHome from "./Admin/AdminHome";

function App() {
  return (
   
    <Router>
      <Routes>
      <Route path="/" element={<Register/>}/>
      <Route path="/editor" element={<Editor/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/admin" element={<AdminHome/>}/>
      </Routes>
    </Router>
  
  );
}

export default App;
