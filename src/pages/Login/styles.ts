import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;

  margin-top: 70px;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

export const Wrapper = styled.div`
  max-width: 300px;
`

export const Column = styled.div`
  &:nth-child(2) {
    margin-left: 20px;
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`

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

export const TitleLogin = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  width: 320px;
  margin-bottom: 20px;
  line-height: 44px;
`

export const SubTitleLogin = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 35px;
  line-height: 25px;
`

export const EsqueciText = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;

  color: #e5e044;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

export const CriarText = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;

  color: #23dd7a;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
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
