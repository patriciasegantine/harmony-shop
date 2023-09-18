import styled from "styled-components";
import { theme } from "../../theme.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PrimaryButton } from "../../global.styles.ts";

export const ModalContent = styled.div``

export const ItemDescription = styled.span`
  font-weight: 600;
  padding-right: ${theme["spacing-extra-small"]};
`
export const CloseButton = styled(FontAwesomeIcon)`
  padding: ${theme["spacing-extra-small"]};
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: ${theme["color-detached"]};
`

export const BoxImgModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${theme["spacing-small"]};
  margin-bottom: ${theme["spacing-small"]};

  img {
    width: 100%;
  }
`

export const ModalButton = styled(PrimaryButton)`
  width: 100%;
`
