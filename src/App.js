// import logo from './logo.svg';

import './App.css';
import Menu from './menusection/Menu';
import About from './aboutsection/About';
import Blog from './blogssection/Blog';
import Contact from './contactsection/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Footer from './components/Footer';
import OurMenu from './components/OurMenu';
import Login from './LoginComponent/Login';
import Checkout from './components/Checkout';
import Register from './LoginComponent/Register';
import ScrollToTop from './components/ScrollToTop';


// import Login2 from './components/Login2';
function App() {
 return (
   <>
    <BrowserRouter>
<ScrollToTop/>    
      <Routes >
        <Route exact path="/gloreya" element={<OurMenu/>} />
        {/* <Route exact path="/gloreya" element={<OurMenu/>} /> */}
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/menu/pizza" element={<Menu />} />
          <Route exact path="/menu/sushi" element={<Menu />} />
          <Route exact path="/menu/salat" element={<Menu />} />
          <Route exact path="/menu/burger" element={<Menu />} />
          <Route exact path="/menu/desert" element={<Menu />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path='*' element={<OurMenu />} />
          {/* <Route exact path="checkout" element={<CheckOut />} /> */}
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
   </>
  );
}

export default App;
