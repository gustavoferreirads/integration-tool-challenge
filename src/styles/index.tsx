import React from "react";
import { createGlobalStyle, css, ThemeProvider } from "styled-components";

import NotoSansMedium from "@/assets/fonts/noto-sans/NotoSans-Medium.ttf";
import NotoSansRegular from "@/assets/fonts/noto-sans/NotoSans-Regular.ttf";

import Background from "@/assets/icons/background.svg";
import Checked from "@/assets/icons/checked.svg";
import Uncheck from "@/assets/icons/uncheck.svg";

import theme from "@/styles/theme";

export const fontFaces = css`
  @font-face {
    font-family: ${theme.fontFamily.primary};
    src: url(${NotoSansRegular});
  }

  @font-face {
    font-family: ${theme.fontFamily.secondary};
    src: url(${NotoSansMedium});
  }
`;

const Style = createGlobalStyle`
${fontFaces}
*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html {
  font-family: ${theme.fontFamily.primary};
  font-size: ${theme.fontSize.secondary};
}

html,
body {
  height: 100%;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  background-image: url(${Background});
  background-position: center;
  background-repeat: no-repeat;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

#root {
  isolation: isolate;
  height: 100%;
}

.container {
  display: block;
  position: relative;
  padding-left: 32px;
  margin-bottom: 10px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #33475b;
}

.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 4px;
  left: 0;
  height: 16px;
  width: 16px;
  border-radius: 3px;
  content: url(${Uncheck});
}

.container:hover input ~ .checkmark {
  background-color: #7C99B6;
}

.container input:checked ~ .checkmark {
  content:  url(${Checked});
}

::-webkit-scrollbar {
  width: 3px;
  border-radius: 10px;
  height:   39px;

}

/* Track */
::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0);
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: ${theme.color.grey};
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: ${theme.color.hover};
}
`;

interface Props {
  children?: React.ReactNode;
}

export const GlobalStyle: React.FC<Props> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Style />
    {children}
  </ThemeProvider>
);
