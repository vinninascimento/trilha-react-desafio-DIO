import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import { Container, Column, Title, Wrapper, TitleSignUp, SubTitleSignUp, AvisoText, LoginText, Divider } from './styles'
import { useForm } from "react-hook-form";
import { MdAccountCircle, MdEmail, MdLock } from 'react-icons/md'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { IFormData } from './types'
// import axios from 'axios';
const schema = yup.object({
  name: yup.string().required('Campo obrigatório.'),
  email: yup.string().email('Email inválido.').required('Campo obrigatório.'),
  password: yup.string().min(8, 'No mínimo 8 caracteres.').required('Campo obrigatório.'),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'As senhas não correspondem').required('Campo obrigatório.')
})

const SignUp = () => {
  const navigate = useNavigate()

  const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:8001/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        navigate('/feed');
      } else {
        throw new Error('Erro ao salvar os dados.');
      }
    } catch (error) {
      console.error(error);
    }
  }

  return ( <>
      <Header ocultarBotoes={true} />
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
            <TitleSignUp>Comece agora grátis</TitleSignUp>
            <SubTitleSignUp>Crie sua conta e make the change._</SubTitleSignUp>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Input name="name" errorMessage={errors?.name?.message} control={control} placeholder="Nome completo" aria-label="nome completo" leftIcon={<MdAccountCircle/>} />
              <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" aria-label="email" leftIcon={<MdEmail/>} />
              <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" aria-label="senha" leftIcon={<MdLock/>} />
              <Input name="confirmPassword" errorMessage={errors?.confirmPassword?.message} control={control} placeholder="Confirmar senha" aria-label="confirmar senha" type="password" leftIcon={<MdLock/>} />
              <Button title="Criar minha conta" variant="secondary" type="submit"/>
            </form>

            <AvisoText>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</AvisoText>
            <LoginText>Já tenho conta. <span onClick={() => navigate('/login')}>Fazer login</span></LoginText>
          </Wrapper>
        </Column>
      </Container>
    </>)
}

export { SignUp }