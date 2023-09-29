import styled, { css } from "styled-components";
import { theme } from "../../theme.ts";

export const Stock = styled.div<{
  stock: 'soldOut' | 'inStock'
}>`
  color: ${props => props.stock === 'inStock' ? 'green' : 'red'}
`

export const StockValue = styled.div<{
  stock: 'soldOut' | 'inStock'
}>`
  ${props => props.stock === 'soldOut' && css`
    color: ${theme["color-primary"]};
  `}
`
