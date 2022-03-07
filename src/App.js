import {BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import HomeIndex from './components/Home/HomeIndex';
import AboutIndex from './components/About/AboutIndex';
import ContactIndex from "./components/Contact/ContactIndex"
import NotFoundIndex from './components/Not Found/NotFoundIndex';

const App = ()=>{
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path = "/" element = {<HomeIndex/>}/>
        <Route exact path = "/about" element = {<AboutIndex/>}/>
        <Route exact path = "/contact" element={<ContactIndex/>} />
        <Route path='*' element = {<NotFoundIndex/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
