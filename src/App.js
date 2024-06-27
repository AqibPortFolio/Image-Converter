
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Converter from './components/converter/Converter';
import Home from './Pages/Home';


function App() {
  return (
  <>
 <BrowserRouter>
<Header/>
 <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/ImgConverter' element={<Converter/>}/>
 </Routes>

<Footer/>
 </BrowserRouter>
  </>
  );
}

export default App;
