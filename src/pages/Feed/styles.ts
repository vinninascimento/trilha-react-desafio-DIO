import styled from 'styled-components'
import { IColumn } from './types'

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Title = styled.h3`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: #fff;
  margin-bottom: 24px;
`

export const TitleHighlight = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: #ffffff7d;
  margin-bottom: 20px;
`

export const Column = styled.div<IColumn>`
  flex: ${({ flex }) => flex};
  padding-right: 24px;
`
