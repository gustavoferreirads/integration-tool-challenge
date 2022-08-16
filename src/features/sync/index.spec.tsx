import { render } from "@testing-library/react";

import { SyncContactsSection } from "./index";
import { GlobalStyle } from "@/styles";

describe("Contacts Synchronization", () => {
  it("should render contact providers synchronization", () => {
    const { asFragment } = render(
      <GlobalStyle>
        <SyncContactsSection />
      </GlobalStyle>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
