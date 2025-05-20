// Data
import PoketmonList from '../components/PoketmonList'
// Component
import Dashboard from '../components/Dashboard'
// Style
import styled from 'styled-components'


const DexTiltle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
`

function Dex({poketmonList}) {
  return (
    <div>
      <DexTiltle>포켓몬 도감</DexTiltle>
      <Dashboard  />
      <PoketmonList poketmonList={poketmonList} />
    </div>
  )
}

export default Dex
