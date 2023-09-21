import bgBanner from '../../assets/img/banner-two.png'
import styled from "styled-components";
import { theme } from "../../theme.ts";

export const BannerContainer = styled.div`
  height: 450px;
  background-image: url(${bgBanner});
  background-size: cover;
  margin: ${theme["spacing-small"]} auto ${theme["spacing-regular"]};
  border-radius: ${theme["border-radius-primary"]};
  object-fit: fill;
  position: relative;
`
export const BannerContent = styled.div`
  line-height: 1.5;
  font-weight: 500;
  font-family: ${theme["font-secondary"]};
  font-size: ${theme["font-size-l"]};
  text-align: left;

  position: absolute;
  top: 50%;
  left: 40%;
  transform: translate(-0%, -0%);
`
