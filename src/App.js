import './App.css';
import Header from './include/Header';
import Footer from './include/Footer';
import Addproduct from './components/Addproduct';
import Updateproduct from './components/Updateproduct';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Header />
   <Routes>
    <Route path='/addproduct' element={<Addproduct/>}></Route>
    <Route path='/updateproduct' element={<Updateproduct/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
   </Routes>
   <Footer /> 
   
   </BrowserRouter>
        
    </div>
  );
}

export default App;
