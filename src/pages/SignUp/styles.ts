import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  margin-top: 70px;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

export const Column = styled.div``

export const Title = styled.h2`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  width: 320px;
  margin-bottom: 20px;
  line-height: 44px;
  color: #fff;
`

export const Wrapper = styled.div`
  max-width: 310px;
`

export const TitleSignUp = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  width: 320px;
  line-height: 44px;
`

export const SubTitleSignUp = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 10px;
  line-height: 25px;
`

export const AvisoText = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  margin: 14px 0;
`

export const LoginText = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;

  span {
    color: #23dd7a;
    font-weight: 700;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`

export const Divider = styled.div`
  background: linear-gradient(
    270deg,
    rgba(228, 16, 93, 0.1) -3.55%,
    rgb(228, 16, 93) 100.21%
  );
  width: 100px;
  margin-bottom: 20px;
  height: 7px;
  border-radius: 5px;
`
