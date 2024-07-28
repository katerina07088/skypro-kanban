import { Link, useNavigate } from "react-router-dom";
import { Wrapper } from "../../globalStyle.styled";
import { routes } from "../../router/routers";
import * as S from "./registerPage.styled";
import { useState } from "react";
import { signUp } from "../../api/user";

export const RegisterPage = () => {
  const nav = useNavigate();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    login: "",
    password: "",
    name: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      if (formData.login === "") {
        setError(
          "Введенные вами данные не корректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку."
        );
        return;
      }
      if (formData.password === "") {
        setError(
          "Введенные вами данные не корректны.Чтобы завершить регистрацию, заполните все поля в форме."
        );
        return;
      }
      if (formData.name === "") {
        setError(
          "Введенные вами данные не корректны.Чтобы завершить регистрацию, заполните все поля в форме."
        );
        return;
      }
      await signUp(formData).then(() => {
        nav(routes.login);
      });
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <Wrapper>
      <S.ContainerSignUp>
        <S.Modal>
          <S.ModalBlock>
            <S.ModalTtl>
              <h2>Регистрация</h2>
            </S.ModalTtl>
            <S.ModalFormLogin onSubmit={handleRegister} id="formLogUp">
              <S.ModalInput
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Имя"
                $isError={error}
              />
              <S.ModalInput
                onChange={(e) =>
                  setFormData({ ...formData, login: e.target.value })
                }
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
                $isError={error}
              />
              <S.ModalInput
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
                $isError={error}
              />
              {error && <S.ErroP>{error}</S.ErroP>}
              <S.ModalBtnSignUpEnt> Зарегистрироваться </S.ModalBtnSignUpEnt>
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
