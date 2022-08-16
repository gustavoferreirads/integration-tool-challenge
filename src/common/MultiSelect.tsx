import React, { useState } from "react";
import styled from "styled-components";

import Arrow from "@/assets/icons/arrow.svg";
import Check from "@/assets/icons/check.svg";
import { SubTitle } from "@/styles/components";

interface MultiSelectProps {
  isOpen: boolean;
}

const SelectBox = styled.div<MultiSelectProps>`
  box-sizing: border-box;
  width: 100%;
  height: ${props => (props.isOpen ? "155px" : "46px")};
  background: #f5f8fa;
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-radius: 2px;
  cursor: pointer;
  margin-top: ${({ theme }) => theme.margin.md};
  transition: all 0.4s;
`;

const ArrowIcon = styled.img<MultiSelectProps>`
  transition: all 0.4s;
  transform: ${props => (props.isOpen ? "rotate(-180deg)" : "rotate(0deg)")};
`;

const Container = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  height: 44.46px;
`;

const Description = styled(SubTitle)`
  font-size: ${({ theme }) => theme.fontSize.secondary};
  margin-left: 15px;
`;

const FlexBox = styled.div`
  display: flex;
`;

const Data = styled.div<MultiSelectProps>`
  transition: all 0.4s;
  padding-left: ${({ theme }) => theme.margin.md};
  overflow: auto;
  opacity: ${props => (props.isOpen ? "1" : "0")};
  height: 100px;
`;

export const MultiSelect: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <SelectBox isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <Container>
        <FlexBox>
          <img alt="check" src={Check} />
          <Description>All contacts</Description>
        </FlexBox>
        <ArrowIcon alt="arrow" isOpen={isOpen} src={Arrow} />
      </Container>
      <Data isOpen={isOpen}>
        <label className="container">
          Family
          <input type="checkbox" />
          <span className="checkmark" />
        </label>

        <label className="container">
          Work Friends
          <input checked type="checkbox" />
          <span className="checkmark" />
        </label>

        <label className="container">
          Another label
          <input type="checkbox" />
          <span className="checkmark" />
        </label>
        <label className="container">
          Another label
          <input type="checkbox" />
          <span className="checkmark" />
        </label>
        <label className="container">
          Another label
          <input type="checkbox" />
          <span className="checkmark" />
        </label>
        <label className="container">
          Another label
          <input type="checkbox" />
          <span className="checkmark" />
        </label>
      </Data>
    </SelectBox>
  );
};
