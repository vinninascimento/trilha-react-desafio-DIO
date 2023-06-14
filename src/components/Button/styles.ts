import styled, { css } from 'styled-components'
import { IButtonStyled } from './types'

export const ButtonContainer = styled.button<IButtonStyled>`
  background-color: #565656;
  border-radius: 22px;
  position: relative;
  color: #fff;
  font-family: 'Sans Serif', sans-serif;
  padding: 6px 12px;
  min-width: 120px;
  width: 100%;
  border: 0;
  margin-right: 5px;

  &:hover {
    background-color: #e4105d;
    cursor: pointer;
    transition: 0.25s;
  }

  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      min-width: 167px;
      height: 40px;
      background-color: #e4105d;
      font-size: 15px;
      text-transform: uppercase;
      font-weight: 700;
      margin-top: 13px;

      &:hover {
        cursor: pointer;
        box-shadow: #e4105d 0px 0px 48px 0px;
      }

      &::after {
        content: '';
        position: absolute;
        border: 1px solid #e4105d;
        top: -5px;
        left: -6px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 22px;
      }
    `}
`
