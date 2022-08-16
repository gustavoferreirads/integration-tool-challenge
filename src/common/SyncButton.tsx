import React, { useState } from "react";
import styled from "styled-components";

import SyncIcon from "@/assets/icons/sync.svg";
import { Box, SubTitle } from "@/styles/components";

const Button = styled.div`
  margin: 30px;
  cursor: pointer;
`;

interface Props {
  isSync: boolean;
}

const ButtonImg = styled.img<Props>`
  transform: ${props => (props.isSync ? "rotate(-180deg)" : "rotate(0deg)")};
  transition: all 0.4s ease;
`;

const TextButton = styled(SubTitle)<Props>`
  font-size: ${({ theme }) => theme.fontSize.primary};
  margin-top: 10px;
  opacity: 0;
  transition: opacity 0.4s ease;
  position: absolute;
`;

const AllDone = styled(TextButton)`
  opacity: ${props => (props.isSync ? "1" : "0")};
  margin-left: 28px;
}
`;

const Synced = styled(TextButton)`
  opacity: ${props => (props.isSync ? "0" : "1")};
  margin-left: 5px;
`;

const Container = styled(Box)`
  align-items: center;
`;

interface SyncProps {
  onClick?: () => void;
}

export const SyncButton: React.FC<SyncProps> = ({ onClick }) => {
  const [isSync, setIsSync] = useState<boolean>(false);
  return (
    <Container>
      <Button
        onClick={() => {
          setIsSync(!isSync);
          if (onClick) onClick();
        }}
      >
        <ButtonImg alt="sync" isSync={isSync} src={SyncIcon} />
        <AllDone isSync={isSync}>All done!</AllDone>
        <Synced isSync={isSync}>Sync Contacts</Synced>
      </Button>
    </Container>
  );
};
