import styled from "styled-components";
import { Green, Hover01, Orange, Purple } from "../../../globalStyle.styled";

export const PopNewCard = styled.div`
  //display:none;
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;
  @media screen and (max-width: 660px) {
    top: 70px;
  }
`;

export const PopNewCardContainer = styled.div`
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

export const PopNewCardBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
  @media screen and (max-width: 660px) {
    border-radius: 0;
  }
`;
export const PopNewCardContent = styled.div`
  display: block;
  text-align: left;
`;

export const PopNewCardTtl = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
`;

export const PopNewCardClose = styled.span`
  position: absolute;
  top: 20px;
  right: 30px;
  color: #94a6be;
  cursor: pointer;
  /* border-color: transparent;
  background-color: transparent; */
  :hover {
    color: #000000;
  }
`;
export const PopNewCardWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media screen and (max-width: 660px) {
    display: block;
  }
`;
export const PopNewCardForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;
export const FormNewBlock = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SubTtl = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;
export const FormNewInput = styled.input`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin: 20px 0;
  font-family: "Roboto";

  ::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
  ::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;

export const FormNewArea = styled.textarea`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  max-width: 370px;
  margin-top: 14px;
  height: 200px;
  font-family: "Roboto";

  ::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
  ::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;
export const FormNewCreate = styled.button`
  width: 132px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #ffffff;
  float: right;
  ${Hover01}
`;

export const Categories = styled.div`
  margin-bottom: 20px;
`;

export const CategoriesSubTtl = styled.p`
  margin-bottom: 14px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const CategoriesThemes = styled.form`
  display: flex;
  align-items: center;
  //justify-content: space-between;
  //flex-wrap: nowrap;
  //align-items: flex-start;
  justify-content: flex-start;
`;
export const CategoriesThemeOrange = styled.input`
  display: inline-block;
  display: none;
`;
export const CategoriesThemeGreen = styled.input`
  display: inline-block;
  display: none;
`;
export const CategoriesThemePurple = styled.input`
  display: inline-block;
  display: none;
`;

export const TopicPurple = styled.label`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
  ${Purple};
  opacity: ${({ active }) => (active ? 1 : 0.4)};
`;

export const TopicOrange = styled.label`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
  font-size: 14px;
  font-weight: 600;
  line-height: 14.21px;
  white-space: nowrap;
  ${Orange};
  opacity: ${({ active }) => (active ? 1 : 0.4)};
`;

export const TopicGreen = styled.label`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
  ${Green};
  opacity: ${({ active }) => (active ? 1 : 0.4)};
`;

/* ${({ $topicColor }) => $topicColor === "Web Design" && Orange}
  ${({ $topicColor }) => $topicColor === "Copywriting" && Green}
  ${({ $topicColor }) => $topicColor === "Research" && Purple} */
