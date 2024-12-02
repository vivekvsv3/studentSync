import Home from './Home';
import Login from './Login';
import Register from './Register';
import Food from './Food';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Lost from './Lost';

function App() {

  return (
    <div style={{marginTop : '-3.5rem'}}>
      <BrowserRouter >
        <Routes>
          <Route path="/" element ={<Register/>} />
          <Route path="/register" element ={<Register/>} />
          <Route path="/login" element ={<Login/>} />
          <Route path="/home" element ={<Home/>} />
          <Route path="/food" element ={<Food/>} />
          <Route path="/lost" element ={<Lost/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
