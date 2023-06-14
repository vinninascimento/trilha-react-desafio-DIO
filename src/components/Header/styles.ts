import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 80%;
  height: 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Wrapper = styled.div`
  background-color: #151515;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BuscarInputContainer = styled.div`
  width: 275px;
  height: 36px;
  background-color: #2d2d37;
  border-radius: 8px;
  padding: 2px 5px;
  margin: 0 12px;
  outline: none;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Menu = styled.a`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-size: 16px;
  line-height: 25px;
  color: #fff;
  margin-right: 12px;
  text-decoration: none;

  &:hover {
    color: #e4105d;
    cursor: pointer;
    transition: 0.3s;
  }
`

export const MenuRight = styled.a`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-size: 16px;
  line-height: 25px;
  color: #fff;
  margin-right: 12px;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    color: #e4105d;
    transition: 0.3s;
  }
`

export const UserPicture = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 22px;
  border: 3px solid #fff;
`

export const Input = styled.input`
  background-color: transparent;
  flex: 1;
  border: 0;
  color: #fff;
  outline: none;
  font-size: 15px;
`

export const UserInfo = styled.div`
  margin-left: 12px;

  &> p {
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: #FFF;

    &:hover {
      color: #e4105d;
      transition: 0.3s;
    }
  }
`