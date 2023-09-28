import styled, { css } from "styled-components";
import { theme } from "../../theme.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge, BadgeProps } from "@mui/material";

export const HeaderContainer = styled.div<{
  fixed: 'fixed' | 'not-fixed'
}>`
  margin: 0 auto;
  width: 100%;
  padding: ${theme["spacing-small"]};
  transition: 0.3s;
  top: 0;
  z-index: 999;
  border-bottom: 1px solid ${theme["color-neutral-dark"]};

  ${(props) =>
          props.fixed === 'fixed' && css`
            position: fixed;
            box-shadow: ${theme["shadow-primary"]};
            border-bottom: none;
            background: ${theme["color-white"]};
          `}
`

export const HeaderContent = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${theme['container']};
  margin: 0 auto;

  img {
    height: 60px;
  }
`

export const Logo = styled.a`
  cursor: pointer;

  img {
    height: 30px;
  }
`

export const MobileButton = styled(FontAwesomeIcon)`
  cursor: pointer;

  &:hover {
    opacity: .8;
  }
`

export const StyledBadge = styled(Badge)<BadgeProps>(() => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    // border: `2px solid blue`,
    padding: '0 4px',
    background: theme["color-detached"]
  },
}));

export const FlexContainer = styled.div`
  display: flex;
  gap: ${theme["spacing-extra-small"]};
`
