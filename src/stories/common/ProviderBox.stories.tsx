import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { ProviderBox } from "@/common/ProviderBox";
import { GlobalStyle } from "@/styles";

export default {
  title: "Common/ProviderBox",
  component: ProviderBox,
} as ComponentMeta<typeof ProviderBox>;

const Template: ComponentStory<typeof ProviderBox> = ({ ...args }) => (
  <GlobalStyle>
    <ProviderBox {...args} />
  </GlobalStyle>
);

export const Default: ComponentStory<typeof ProviderBox> = props => {
  const Box = Template.bind({});
  return (
    <Box {...props}>
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "grey",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Children
      </div>
    </Box>
  );
};

Default.args = {
  logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
  title: "Title",
  subTitle: "This is an example",
};
