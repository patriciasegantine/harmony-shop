import styled from "styled-components";
import { theme } from "../../theme.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PrimaryButton } from "../../global.styles.ts";

export const modalStyle = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: {xs: 2, md: 6},
  width: {xs: 350, md: 700}
};

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
