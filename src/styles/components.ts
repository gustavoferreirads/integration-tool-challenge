import styled from "styled-components";

export const Title = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: ${({ theme }) => theme.fontSize.primary};
  line-height: 25px;
  text-align: center;
  color: ${({ theme }) => theme.color.primary};
  margin: 10px;
`;

export const SubTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSize.tertiary};
  line-height: 20px;
  text-align: center;
  color: ${({ theme }) => theme.color.secondary};
  white-space: pre-wrap;
`;

export const Box = styled.div`
  display: flex;
  height: ${({ theme }) => theme.height.box};
  align-items: flex-start;
  justify-content: center;
`;
