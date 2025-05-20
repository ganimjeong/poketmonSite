// import { Link } from 'react-router-dom'
// import { useState } from 'react'
import styled from 'styled-components'

import Dashboard from '../components/Dashboard'
import PoketmonList from '../components/PoketmonList'


const DexTiltle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
`

function Dex({poketmonList, selected, setSelected, addPoketmon}) {

  const removePoketmon = (id) => {
    setSelected(prev => prev.filter(p => p.id !== id))
  }

  return (
    <div>
      <DexTiltle>포켓몬 도감</DexTiltle>
      <Dashboard selected={selected} removePoketmon={removePoketmon} />
      <PoketmonList poketmonList={poketmonList} addPoketmon={addPoketmon}/>
    </div>
  )
}

export default Dex
