import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction : column;
  height: 100vh;
  background-color: #fffbe6;
`
const Title = styled.h1`
  margin-bottom: 0px;
  font-size: 40px;
  color: #000;
`
const LogoImg = styled.img`
  width: 400px;
  object-fit: contain;
  margin-bottom: 22px;
`
const DevLinkBtn = styled.button`
  display: inline-block;
  padding: 17px 26px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 25px;
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
  transition: background-color 0.2s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  
  &:hover {
    background-color: #26862b;
    transform: translateY(-5px);

  }
`

function Home() {
  const navigate = useNavigate()

  return (
    <Container>
      <Title>포켓몬 도감</Title>
      <LogoImg
        src="https://static.vecteezy.com/system/resources/previews/027/127/571/non_2x/pokemon-logo-pokemon-icon-transparent-free-png.png"
        alt="Pokémon Logo"
        width="240"
        height="auto"
      />
      <DevLinkBtn onClick={() => navigate('/dex')}>포켓몬 도감 시작하기!</DevLinkBtn>
    </Container>
  )
}

export default Home
