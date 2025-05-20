import { Routes, Route } from 'react-router-dom'
// Pages
import Home from './pages/Home'
import Dex from './pages/Dex'
import DexDetail from './pages/DexDetail'
// Provider
import { PoketmonProvider } from './contexts/PoketmonContext'
// Data
import { poketmonList } from './data/poketmon.js'
// react-toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  return (
    <PoketmonProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dex" element={<Dex poketmonList={poketmonList} />} />
        <Route path="/dex/:id" element={<DexDetail poketmonList={poketmonList} />} />
      </Routes>
      <ToastContainer />
    </PoketmonProvider>
  )
};

export default App;