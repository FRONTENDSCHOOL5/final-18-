import styled from "styled-components";

export const ErrorTextStyle = styled.span`
  display: block;
  font-size: 15px;
  color: var(--color-error);
`;

export const ErrorImg = styled.img`
  margin-right: 8px;

  &.errorIcon {
    filter: invert(65%) sepia(40%) saturate(7147%) hue-rotate(331deg)
      brightness(100%) contrast(102%);
  }
`;
