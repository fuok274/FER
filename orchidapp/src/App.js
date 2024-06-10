
import './App.css';
import Contact from './component/Contact/Contact';
import Content from './component/Content/Content';
import Detail from './component/Detail/Detail';
import NavBar from './component/NavBar/NavBar';
import Home from './component/Home/Home';
import {
  Routes,
  Route,
} from "react-router-dom";
import Footer from './component/Footer/Footer';
import MyComponent from './component/MyComponent/MyComponent';


function App() {
  return (
    /*<div>
      <NavBar />
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/' element={<Content />}>
        </Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <Footer />



    </div>
    */
    <div>
      <MyComponent />
    </div>
  );
}

export default App;
