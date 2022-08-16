import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { MultiSelect } from "@/common/MultiSelect";
import { SyncButton } from "@/common/SyncButton";
import { GlobalStyle } from "@/styles";

export default {
  title: "Common/SyncButton",
  component: SyncButton,
  argTypes: { onClick: { action: "handleClick" } },
} as ComponentMeta<typeof SyncButton>;

const Template: ComponentStory<typeof MultiSelect> = args => (
  <GlobalStyle>
    <SyncButton {...args} />
  </GlobalStyle>
);

export const Default = Template.bind({});
Default.args = {};
