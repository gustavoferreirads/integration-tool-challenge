import { render, screen } from "@testing-library/react";

import { GlobalStyle } from "@/styles";

import List from "./List";

jest.mock("@/assets/icons/gmail.svg", () => "src/assets/gmail.svg");

describe("Gmail Contacts", () => {
  it("should renders a Gmail contacts box", () => {
    render(
      <GlobalStyle>
        <List />
      </GlobalStyle>
    );
    const title = screen.getByTestId("title");
    const subTitle = screen.getByTestId("sub-title");
    const logo = screen.getByAltText("Provider logo");

    // assert
    expect(title).toHaveTextContent("Gmail");
    expect(subTitle).toHaveTextContent(
      "These Gmail contacts will sync to MailChimp"
    );
    expect(logo).toHaveAttribute("src", "src/assets/gmail.svg");
  });
});
