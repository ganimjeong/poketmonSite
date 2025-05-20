import styled from 'styled-components'
import PoketmonCard from '../components/PoketmonCard' 

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  padding: 24px;
`

const PoketmonList = ({poketmonList,addPoketmon}) => {
  return (
    <CardGrid>
      {poketmonList.map((poketmon) => (
        <PoketmonCard key={poketmon.id} poketmon={poketmon} addPoketmon={addPoketmon}  />
      ))}
      </CardGrid>
  )
}

export default PoketmonList