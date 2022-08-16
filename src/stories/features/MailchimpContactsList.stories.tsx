import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { List as MailchimpContacts } from "@/features/mailchimp/views/index";
import { GlobalStyle } from "@/styles";

export default {
  title: "Features/MailchimpContactsList",
  component: MailchimpContacts,
} as ComponentMeta<typeof MailchimpContacts>;

const Template: ComponentStory<typeof MailchimpContacts> = args => (
  <GlobalStyle>
    <MailchimpContacts {...args} />
  </GlobalStyle>
);

export const Default = Template.bind({});
Default.args = {};
