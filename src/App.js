import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import './App.scss';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Main from './Components/MainPhotos/Main';
import MainProd from './Components/MainProduct/MainProd';
import ModalMenu from './Components/Modal/ModalMenu';
import ModalCart from './Components/ModalCart/ModalCart';
import Pylosopy from './Components/PhilosopyImg/Pylosopy';
import Products from './Components/Products/Products';
import ProductPhoto from './Components/ProductsPhoto/ProductPhoto';
import { selectModal } from './Redux/CartModalSlice/cartModalSlice';

function App() {
  const openModal = useSelector(selectModal);




  return (
    <div className="App" >

      <Header />
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
        <Route path='/' element={<MainProd />} />

      </Routes>


      <Routes>
        <Route path='/' element={<Pylosopy />} />

      </Routes>
      <Routes>
        <Route path='/' element={<ModalMenu />} />


      </Routes>



<hr className='hr'/>

      <Footer />
    </div>
  );
}

export default App;
