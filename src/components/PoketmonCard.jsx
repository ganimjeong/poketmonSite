import { Link } from 'react-router-dom'
import { usePoketmon } from '../contexts/PoketmonContext'
import styled from 'styled-components'

const Card = styled.div`
  border: 2px solid #ffcc00;
  border-radius: 16px;
  padding: 16px;
  margin: 12px;
  width: 200px;
  background-color: #fffef3;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
  }
`
const PoketmonImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  margin-bottom: 12px;
`
const Name = styled.h3`
  font-size: 20px;
  color: #333;
  margin-bottom: 4px;
`
const Type = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 12px;
`
const DexDetailLinkBtn = styled(Link)`
  display: inline-block;
  padding: 8px 12px;
  background-color: #ffeeab;
  color: #333;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 14px;
  transition: background-color 0.2s;
  margin-right: 10px;

  &:hover {
    background-color: #ffe57e;
  }
`
const AddButton = styled.button`
  padding: 8px 12px;
  background-color: #ffcc00;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f5b700;
  }
`

function PoketmonCard({ poketmon }) {
  const { addPoketmon} = usePoketmon()
  return (
    <Card>
      <PoketmonImage src={poketmon.image} alt={poketmon.name} />
      <Name>{poketmon.name}</Name>
      <Type>타입: {poketmon.type}</Type>
      <DexDetailLinkBtn to={`/dex/${poketmon.id}`}>상세 보기</DexDetailLinkBtn>
      <AddButton onClick={() => addPoketmon(poketmon)}>추가</AddButton>
    </Card>
  )
}

export default PoketmonCard
