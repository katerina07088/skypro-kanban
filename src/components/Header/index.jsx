import { useState } from "react";
import * as S from "./header.styled.js";
import { Container } from "../../globalStyle.styled.js";
import { routes } from "../../router/routers.js";
import { Link } from "react-router-dom";
import { useUserContext } from "../Context/useUserContext.js";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUserContext();

  const toggleOpenUser = () => {
    setIsOpen(!isOpen);
  };

  // const onChangeTheme = () => {
  //   setChangeTheme(changeTheme === "light" ? "dark" : "light");
  // };
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
            <Link to={routes.add}>
              <S.HeaderBtnMainNew id="btnMainNew">
                Создать новую задачу
              </S.HeaderBtnMainNew>
            </Link>

            <S.HeaderUser onClick={toggleOpenUser}>{user.name}</S.HeaderUser>
            {isOpen && (
              <S.HeaderPopUserSet readOnly id="user-set-target">
                {/* <!-- <a href="">x</a> --> */}
                <S.PopUserSetName>{user.name}</S.PopUserSetName>
                <S.PopUserSetMail>{user.email}</S.PopUserSetMail>
                <S.PopUserSetTheme>
                  {/* <p>Темная тема</p>
                  <input
                    defaultChecked={changeTheme === "dark"}
                    onClick={onChangeTheme}
                    type="checkbox"
                    className="checkbox"
                    name="checkbox"
                  /> */}
                </S.PopUserSetTheme>
                <S.BtnExit>
                  <Link to={routes.exit}> Выйти </Link>
                </S.BtnExit>
              </S.HeaderPopUserSet>
            )}
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.Header>
  );
};
