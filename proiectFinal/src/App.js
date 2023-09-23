import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Tesla from './components/Tesla/Tesla';
import Sanatate from './components/Sanatate/Sanatate';
import Sport from './components/Sport/Sport';
import Favorite from './components/Favorite/Favorite';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/tesla' element={<Tesla/>}/>
          <Route path='/sanatate' element={<Sanatate/>}/>
          <Route path='/sport' element={<Sport/>}/>
          <Route path='/favorite' element={<Favorite/>}/>
        </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
