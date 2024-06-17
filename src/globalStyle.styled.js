import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: border-box;
}
a,
a:visited {
  text-decoration: none;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
  outline: none;
}

ul li {
  list-style: none;
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  color: #000000;
}
`;
export const Wrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #f1f1f1;
`;
export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

export const Orange = css`
  background-color: ${({ theme }) => theme.orangeBg};
  color: ${({ theme }) => theme.orangeText};
`;
export const Green = css`
  background-color: ${({ theme }) => theme.greenBg};
  color: ${({ theme }) => theme.greenText};
`;
export const Purple = css`
  background-color: ${({ theme }) => theme.purpleBg};
  color: ${({ theme }) => theme.purpleText};
`;
export const Gray = css`
  background: ${({ theme }) => theme.greyBg};
  color: ${({ theme }) => theme.greyText};
`;

export const themeColor = ($color) =>css`

  ${() => $color === "Web Design" && Orange};
  ${() => $color === "CopyWriting" && Purple};
  ${() => $color === "Research" && Green};
`

export const Hover01 = css`
  &:hover {
    background-color: #33399b;
  }
`;
export const Hover02 = css`
  &:hover {
    color: #33399b;

    & ::after {
      border-left-color: #33399b;
      border-bottom-color: #33399b;
    }
  }
`;
export const Hover03 = css`
  &:hover {
    background-color: #33399b;
    color: #ffffff;
    &:hover a {
      color: #ffffff;
    }
  }
`;
