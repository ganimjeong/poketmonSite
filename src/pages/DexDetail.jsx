import { useParams, Link } from 'react-router-dom'
import { usePoketmon } from '../contexts/PoketmonContext'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fffbe6;
`
const Card = styled.div`
  background: #fff;
  border: 4px solid #ffcc00;
  border-radius: 24px;
  padding: 32px;
  width: 400px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.15);
  text-align: center;
  font-family: 'Segoe UI', sans-serif;
`
const PoketmonImage = styled.img`
  height: 200px;
  object-fit: contain;
  margin-bottom: 20px;
`
const Name = styled.h2`
  font-size: 28px;
  margin-bottom: 8px;
  color: #333;
`
const Type = styled.p`
  font-size: 16px;
  color: #888;
  margin-bottom: 16px;
`
const Description = styled.p`
  font-size: 16px;
  color: #444;
  line-height: 1.5;
`
const StyledLinkButton = styled(Link)`
  display: inline-block;
  padding: 10px 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover {
    background-color: #45a049;
  }
`
const AddButton = styled.button`
  padding: 10px 16px;
  margin-left: 10px;
  background-color: #ffcc00;
  color: #333;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 17px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f5b700;
  }
`


function DexDetail({ poketmonList }) {
  const { addPoketmon} = usePoketmon()
  const { id } = useParams()
  const poketmon = poketmonList.find((p) => p.id === Number(id))

  if (!poketmon) return <div>포켓몬을 찾을 수 없습니다.</div>

  return (
    <div>
      <Container>
        <Card>
          <h2> 멋진 {poketmon.name}의 상세 정보</h2>
          <PoketmonImage src={poketmon.image} alt={poketmon.name} />
          <Name>{poketmon.name}</Name>
          <Type>타입: {poketmon.type}</Type>
          <Description>{poketmon.description}</Description>
          <StyledLinkButton to="/dex">← 도감으로 돌아가기</StyledLinkButton>
          <AddButton onClick={()=>addPoketmon(poketmon)}>슬롯에 추가</AddButton>
        </Card>
      </Container>
    </div>
  )
}

export default DexDetail
