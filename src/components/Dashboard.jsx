import styled from 'styled-components'
import { usePoketmon } from '../contexts/PoketmonContext'


const SelectedContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 24px;
`
const Slot = styled.div`
  width: 80px;
  height: 80px;
  border: 2px dashed #ccc;
  border-radius: 12px;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
`
const SelectedPoketmon = styled.div`
  display: flex;
  align-items: center;
  flex-direction : column;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-5px);
  }
`
const SelectedPoketmonImg = styled.img`
  width: 70px;
  height: 70px;
  object-fit: contain;
  border-radius: 12px;
  cursor: pointer;
  `
const SmallSpan = styled.span`
    font-size: 8px;
    color : #888;
    margin-bottom: 10px;
  `

const Dashboard = () => {
    const { selected, removePoketmon} = usePoketmon()
  return (
    <SelectedContainer>
        {[...Array(6)].map((_, index) => {
          const poketmon = selected[index]
          return (
            <Slot key={index} onClick={() => poketmon && removePoketmon(poketmon.id)} title={poketmon ? '클릭해서 삭제' : ''}>
              {poketmon ? (
                <SelectedPoketmon>
                  <SelectedPoketmonImg src={poketmon.image} alt={poketmon.name} />
                  <SmallSpan>클릭해서 선택 해제</SmallSpan>
                </SelectedPoketmon>
              ) : (
                <span>빈 슬롯</span>
              )}
            </Slot>
          )
        })}
      </SelectedContainer>
  )
}

export default Dashboard