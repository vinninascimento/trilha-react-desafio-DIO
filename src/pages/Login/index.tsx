import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Container, Column, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper, Divider } from './styles'
import { MdEmail, MdLock } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { IFormData } from './types'
import { useAuth } from '../../hooks/useAuth'

const schema = yup.object({
  email: yup.string().email('Email inválido.').required('Campo obrigatório.'),
  password: yup.string().min(8, 'No mínimo 8 caracteres.').required('Campo obrigatório.'),
}).required();

const Login = () => {
  const navigate = useNavigate()
  const { handleLogin } = useAuth()

  const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const onSubmit = async (formData: IFormData) => {
    handleLogin(formData)
  }
  
  return (<>
    <Header ocultarBotoes={true}/>
    <Container>
      <Column>
        <Divider />
        <Title>
          A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
        </Title>
      </Column>
      <Column>
        <Divider />
        <Wrapper>
          <TitleLogin>Faça seu login</TitleLogin>
          <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" aria-label="email" leftIcon={<MdEmail/>}/>
            <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" aria-label="senha" leftIcon={<MdLock/>} />
            <Button title="Entrar" variant="secondary" type="submit" />
          </form>
          <Row>
            <EsqueciText>Esqueci minha senha</EsqueciText>
            <CriarText onClick={() => navigate('/signup')}>Criar conta</CriarText>
          </Row>
        </Wrapper>
      </Column>
    </Container>
  </>)
}

export { Login }