import {Button} from '../Button'
import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  Wrapper,
  UserPicture,
  UserInfo
} from './styles'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo-dio.png'
import { IHeader } from './types'
import { useAuth } from '../../hooks/useAuth'

const Header = ({ocultarBotoes}: IHeader) => {
  const navigate = useNavigate()
  const { user, handleSignOut } = useAuth()
  
  return(
    <Wrapper>
      <Container>
        <Row>
          <Link to="/">
            <img src={logo} alt="Logo da DIO"/>
          </Link>
          {user.id ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." aria-label="Buscar"/>
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {user.id ? (
            <>
              <UserPicture src="https://picsum.photos/30" />
              <UserInfo>
                <p>{user.name}</p>
                <Link to="/" onClick={handleSignOut}>
                  <p>Sair</p>
                </Link>
              </UserInfo>
            </>
          ) : (
            <>
              <MenuRight href="#" onClick={() => navigate('/')}>Home</MenuRight>
              <MenuRight href="#">Catálogo</MenuRight>
              <MenuRight href="#">Planos</MenuRight>
              <MenuRight href="#">Para Empresas</MenuRight>
              { ocultarBotoes ? null : (
                <>
                  <Button title="Entrar" onClick={() => navigate('/login')} />
                  <Button title="Cadastrar" onClick={() => navigate('/signup')} />
                </>
              )}
              
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  )
}

export {Header}