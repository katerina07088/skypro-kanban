import styled from "styled-components";
import { Gray, Hover01, Hover03, themeColor } from "../../../globalStyle.styled";

export const PopBrowse = styled.div`
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
  @media screen and (max-width: 660px) {
    top: 70px;
  }
`;

export const PopBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  @media screen and (max-width: 660px) {
    padding: 0;
    justify-content: flex-start;
  }
`;
export const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;

  @media screen and (max-width: 660px) {
    border-radius: 0;
  }

  @media screen and (max-width: 495px) {
    padding: 20px 16px 32px;
  }
`;
export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;
  .categories__theme {
    opacity: 1;
  }
  .theme-down {
    display: none;
    margin-bottom: 20px;
  }
  .theme-top {
    display: block;
  }

  @media screen and (max-width: 495px) {
    .theme-down {
      display: block;
      margin-bottom: 20px;
    }
    .pop-browse__content .theme-top {
      display: none;
    }
  }
`;

export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;
export const PopBrowseTtl = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;


export const CategoriesTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
  //display: block;

  ${({ $color }) => themeColor($color)};

   p {
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
} 
`;

export const PopBrowseStatus = styled.div`
   margin-bottom: 11px;
`;
export const PopBrowseStatusTtl = styled.p`
   margin-bottom: 14px;
   color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const StatusThemes = styled.div`
 display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StatusTheme = styled.div` 
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94A6BE;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  p {
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
}
`;

export const StatusThemeOriginal = styled.div` 
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94A6BE;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
   ${Gray}
  p {
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
}
`;

export const PopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media screen and (max-width: 660px) {
    display: block;
  }
`;
export const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FormBrowseArea = styled.area`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #eaeef6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  ::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
    ::placeholder {
      font-weight: 400;
      font-size: 14px;
      line-height: 1px;
      color: #94a6be;
      letter-spacing: -0.14px;
    }
  }
  @media screen and (max-width: 495px) {
    max-width: 100%;
    height: 37px;
  }
`;
export const BtnBrowse = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  margin-right: 8px;

  @media screen and (max-width: 495px) {
    width: 100%;
    margin-right: 0px;
  }
`;
export const PopBrowseForm = styled.div`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
  @media screen and (max-width: 495px) {
    max-width: 100%;
  }
`;
export const BntGroup = styled.div`
  margin-bottom: 20px;
  .button {
  margin-right: 8px;
}

  @media screen and (max-width: 495px) {
    width: 100%;
    margin-right: 0px;
  }
  
`;

export const Btn= styled.button`
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
  margin-right: 8px;
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  color: #565eef;
  a {
    color: #565eef;
  }
  ${Hover03}

  @media screen and (max-width: 495px) {
    width: 100%;
    height: 40px;
    }
`;


export const BtnClose = styled.button`
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
  margin-right: 8px;

  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;
  a {
    color: #ffffff;
  }
  ${Hover01}
`;
