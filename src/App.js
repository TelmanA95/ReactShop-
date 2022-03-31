import { Route, Routes } from 'react-router';
import './App.scss';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/MainPhotos/Main';
import MainProd from './Components/MainProduct/MainProd';
import ModalMenu from './Components/Modal/ModalMenu';
import Pylosopy from './Components/PhilosopyImg/Pylosopy';
import Products from './Components/Products/Products';
import ProductPhoto from './Components/ProductsPhoto/ProductPhoto';

function App() {



  return (
    <div className="App" >
      <Header />
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
      <Route path='/' element={<Pylosopy/>}/>

      </Routes>
      <Routes>
        <Route path='/' element={<ModalMenu />} />


      </Routes>
      

      <Footer />
    </div>
  );
}

export default App;
