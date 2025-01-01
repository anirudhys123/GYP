import './App.css';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import AiPage from './Pages/AiPage';
import Header from './components/Common/Header/Header';
import PythonFullStackPage from './Pages/PythonFullStackPage';
import BackendPage from './Pages/BackendPage';
import FrontendPage from './Pages/FrontendPage';
import Footer from './components/Common/Footer/Footer';
import About from './Pages/About';



function App() {
  return (
   <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path="/AiPage" element={<AiPage />} />
        <Route path="/FrontendPage" element={<FrontendPage />} />
        <Route path="/BackendPage" element={<BackendPage />} />
        <Route path="/PythonFullStackPage" element={<PythonFullStackPage />} />
      </Routes>
      
      </>
  );
}

export default App;
