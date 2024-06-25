import { Link } from "react-router-dom";
import { Wrapper } from "../../globalStyle.styled";
import { routes } from "../../router/routers";
import * as S from "./registerPage.styled";

export const RegisterPage = () => {
  return (
    <Wrapper>
      <S.ContainerSignUp>
        <S.Modal>
          <S.ModalBlock>
            <S.ModalTtl>
              <h2>Регистрация</h2>
            </S.ModalTtl>
            <S.ModalFormLogin id="formLogUp" action="#">
              <S.ModalInput
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Имя"
              />
              <S.ModalInput
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
              />
              <S.ModalInput
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
              />
              <S.ModalBtnSignUpEnt id="SignUpEnter">
                <a href="../main.html">Зарегистрироваться</a>{" "}
              </S.ModalBtnSignUpEnt>
              <S.ModalFormGroup>
                <p>
                  Уже есть аккаунт?<Link to={routes.login}>Войдите здесь</Link>
                </p>
              </S.ModalFormGroup>
            </S.ModalFormLogin>
          </S.ModalBlock>
        </S.Modal>
        /
      </S.ContainerSignUp>
    </Wrapper>
  );
};
