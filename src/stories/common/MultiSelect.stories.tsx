import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { MultiSelect } from "@/common/MultiSelect";
import { GlobalStyle } from "@/styles";

export default {
  title: "Common/MultiSelect",
  component: MultiSelect,
} as ComponentMeta<typeof MultiSelect>;

const style = { width: "250px" };

const Template: ComponentStory<typeof MultiSelect> = args => (
  <GlobalStyle>
    <div style={style}>
      <MultiSelect {...args} />
    </div>
  </GlobalStyle>
);

export const Default = Template.bind({});
Default.args = {};
