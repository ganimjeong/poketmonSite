import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
// Pages
import Home from './pages/Home'
import Dex from './pages/Dex'
import DexDetail from './pages/DexDetail'
// Datas
import { poketmonList } from './data/poketmon.js'
// react-toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify'


const App = () => {
  const [selected, setSelected] = useState([])

  const addPoketmon = (poket) => {
    if (selected.find(p => p.id === poket.id)) {
      toast.error('이미 선택된 포켓몬입니다!')
      return
    }
    if (selected.length >= 6) {
      toast.warn('포켓몬은 최대 6마리까지 선택할 수 있어요!')
      return
    }
    setSelected(prev => [...prev, poket])
    toast.success(`${poket.name}을(를) 추가했어요!`)
  }

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dex" element={<Dex poketmonList={poketmonList} selected={selected} setSelected={setSelected} addPoketmon={addPoketmon}/>} />
      <Route path="/dex/:id" element={<DexDetail poketmonList={poketmonList}  addPoketmon={addPoketmon}/>} />
    </Routes>
    <ToastContainer />
    </>
  )
};

export default App;