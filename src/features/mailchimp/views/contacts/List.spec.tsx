import { render, screen } from "@testing-library/react";

import List from "./List";
import { GlobalStyle } from "@/styles";

jest.mock("@/assets/icons/mailchimp.svg", () => "src/assets/mailchimp.svg");

describe("Mailchimp Contacts", () => {
  it("should renders a Mailchimp contacts box", () => {
    render(
      <GlobalStyle>
        <List />
      </GlobalStyle>
    );
    const title = screen.getByTestId("title");
    const subTitle = screen.getByTestId("sub-title");
    const logo = screen.getByAltText("Provider logo");

    // assert
    expect(title).toHaveTextContent("Mailchimp");
    expect(subTitle).toHaveTextContent(
      "These Mailchimp contacts will sync to Gmail"
    );
    expect(logo).toHaveAttribute("src", "src/assets/mailchimp.svg");
  });
});
