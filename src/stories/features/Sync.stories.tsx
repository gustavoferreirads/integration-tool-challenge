import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { SyncContactsSection } from "@/features/sync";
import { GlobalStyle } from "@/styles";

export default {
  title: "Features/SyncContactsSection",
  component: SyncContactsSection,
} as ComponentMeta<typeof SyncContactsSection>;

const Template: ComponentStory<typeof SyncContactsSection> = args => (
  <GlobalStyle>
    <SyncContactsSection {...args} />
  </GlobalStyle>
);

export const Default = Template.bind({});
Default.args = {};
