import logo from './logo.svg';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Mainpage from './components/Mainpage';
import Published from './components/Published';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Contact from './components/Contact';
import Signup from './components/Signup';
import Login from './components/Login';
import Protected from './components/Protected';
import Trending from './components/Trending';
function App() {
 
  return (
    <div className="App">
<Navbar/>
 
<BrowserRouter>
      <Routes>
        <Route path='/Published' element={<Protected Component={Published}/>}></Route>
        <Route path='/' element={<Signup/>}></Route>
        <Route path='/Trending' element={<Trending/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
<Route path='/Mainpage' element={<Protected Component={Mainpage}/>}></Route>
<Route path='/Contact' element={<Protected Component={Contact}/>}></Route>
      </Routes>
      
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
