import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { List as GmailContacts } from "@/features/gmail/views/index";
import { GlobalStyle } from "@/styles";

export default {
  title: "Features/GmailContactsList",
  component: GmailContacts,
} as ComponentMeta<typeof GmailContacts>;

const Template: ComponentStory<typeof GmailContacts> = args => (
  <GlobalStyle>
    <GmailContacts {...args} />
  </GlobalStyle>
);

export const Default = Template.bind({});
Default.args = {};
