import styled, { css } from "styled-components";
import { theme } from "../../theme.ts";
import { NavLink } from "react-router-dom";

export const HeaderNavbar = styled.header<{
  type: 'mobile' | 'desktop'
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${props => props.type === 'mobile' && css`

    flex-direction: column;
    justify-content: start;
    align-items: start;
  `
  }

`
export const NavLinkComponent = styled(NavLink)<{
  active: boolean
}>`
  cursor: pointer;
  text-decoration: none;
  padding: .5rem 1rem;
  text-transform: uppercase;
  font-family: ${theme["font-secondary"]};
  font-size: ${theme["font-size-xs"]};

  font-weight: 600;
  color: ${theme["color-neutral-dark"]};

  ${props => props.active && css`
    font-size: ${theme["font-size-m"]};
  `}
  &:hover {
    opacity: .8;
    transition: .2s
  }

`

export const LinkName = styled.span`
  padding-left: ${theme["spacing-small"]};
`
