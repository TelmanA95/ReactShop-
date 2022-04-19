import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import './App.scss';
import CreateAccount from './Components/CreateAccount/CreateAccount';
import Footer from './Components/Footer/Footer';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import BurgerHeader from './Components/Header/BurgerHeader/BurgerHeader';
import BurgerMenu from './Components/Header/BurgerMenu/BurgerMenu';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Main from './Components/MainPhotos/Main';
import MainProd from './Components/MainProduct/MainProd';
import ModalMenu from './Components/Modal/ModalMenu';
import ModalCart from './Components/ModalCart/ModalCart';
import Pylosopy from './Components/PhilosopyImg/Pylosopy';
import Products from './Components/Products/Products';
import ProductPhoto from './Components/ProductsPhoto/ProductPhoto';
import Slider from './Components/Slider/Slider';
import { selectModal } from './Redux/CartModalSlice/cartModalSlice';
import { selectMobile } from './Redux/mobileMenuSlice/mobileMenuSlice';
function App() {
  const openModal = useSelector(selectModal);
  const openMobile = useSelector(selectMobile)


  return (
    <div className="App" >
      {openMobile && <BurgerMenu />}
      <Header />
      <BurgerHeader />
      {openModal && <ModalCart />}

      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>

      <Routes>
        <Route path='/products' element={<ProductPhoto />} />
      </Routes>

      <Routes>
        <Route path='/products' element={<Products />} />
        <Route path='/' element={<Main />} />

      </Routes>
      <Routes>
        <Route path='/forgotpsw' element={<ForgotPassword />} />
      </Routes>

      <Routes>
        <Route path='/' element={<MainProd />} />

      </Routes>
      <Routes>
        <Route path='/' element={<Slider />} />
      </Routes>


      <Routes>
        <Route path='/' element={<Pylosopy />} />

      </Routes>
      <Routes>
        <Route path='/' element={<ModalMenu />} />
      </Routes>

      <Routes>
        <Route path='/create' element={<CreateAccount />} />
      </Routes>



      <hr className='hr' />

      <Footer />
    </div>
  );
}

export default App;
