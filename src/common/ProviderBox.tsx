import React from "react";
import styled from "styled-components";

import { SubTitle, Title } from "@/styles/components";

const Box = styled.div`
  box-sizing: border-box;
  width: ${({ theme }) => theme.width.box};
  min-height: ${({ theme }) => theme.height.box};
  background: #ffffff;
  border: 2px solid ${({ theme }) => theme.color.border};
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: ${({ theme }) => theme.padding.lg};
  padding-top: 68px;
`;

interface Props {
  children?: React.ReactNode;
  logo: string;
  title: string;
  subTitle: string;
}

export const ProviderBox: React.FC<Props> = ({
  children,
  logo,
  title,
  subTitle,
}) => {
  return (
    <Box>
      <img alt="Provider logo" src={logo} data-testid="logo" />
      <Title data-testid="title">{title}</Title>
      <SubTitle data-testid="sub-title">{subTitle}</SubTitle>
      {children}
    </Box>
  );
};
