import styled from "styled-components";

import { SyncContactsSection } from "@/features/sync";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}
`;

export default function App() {
  return (
    <Container>
      <SyncContactsSection />
    </Container>
  );
}
