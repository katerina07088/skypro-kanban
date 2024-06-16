import { useState } from "react";
import * as S from "./header.styled.js";
import { Container } from "../../globalStyle.styled.js";

export const Header = ({ addCard }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpenUser = () => {
    setIsOpen(!isOpen);
  };
  return (
    <S.Header>
      <Container>
        <S.HeaderBlock>
          <S.HeaderLogoLight>
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </S.HeaderLogoLight>
          <S.HeaderLogoDark>
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </S.HeaderLogoDark>
          <S.HeaderNav>
            <S.HeaderBtnMainNew onClick={addCard} id="btnMainNew">
              <a>Создать новую задачу</a>
            </S.HeaderBtnMainNew>
            <S.HeaderUser onClick={toggleOpenUser}>Ivan Ivanov</S.HeaderUser>
            {isOpen && (
              <S.HeaderPopUserSet id="user-set-target">
                {/* <!-- <a href="">x</a> --> */}
                <S.PopUserSetName>Ivan Ivanov</S.PopUserSetName>
                <S.PopUserSetMail>ivan.ivanov@gmail.com</S.PopUserSetMail>
                <S.PopUserSetTheme>
                  <p>Темная тема</p>
                  <input type="checkbox" name="checkbox" />
                </S.PopUserSetTheme>
                <S.BtnExit>
                  <a href="#popExit">Выйти</a>
                </S.BtnExit>
              </S.HeaderPopUserSet>
            )}
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.Header>
  );
};
