import { Link, useNavigate } from "react-router-dom";
import { Wrapper } from "../../globalStyle.styled";
import { routes } from "../../router/routers";
import * as S from "./loginPage.styled";
import { useState } from "react";
import { signIn } from "../../api/user";
import { useUserContext } from "../../components/Context/useUserContext";

export const LoginPage = () => {
  const nav = useNavigate();
  const { login } = useUserContext();  
  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    if (formData.login === "") {
      setError("Введите логин");
      return;
    }
    if (formData.password === "") {
      setError("Введите пароль");
      return;
    }
    try {
        await signIn(formData)
        .then((res) => {
        login(res.user)
        nav(routes.main);
        localStorage.setItem("user", JSON.stringify(res));
      });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Wrapper>
      <S.ContainerSignIn>
        <S.Modal>
          <S.ModalBlock>
            <S.ModalTtl>
              <h2>Вход</h2>
            </S.ModalTtl>
            <S.ModalFormLogin onSubmit={handleLogin}>
              <S.ModalInput
                onChange={(e) =>
                  setFormData({ ...formData, login: e.target.value })
                }
                type="text"
                name="login"
                value= {formData.login}
                id="formlogin"
                placeholder="Эл. почта"
              />
              <S.ModalInput
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                type="password"
                name="password"
                value= {formData.password}
                id="formpassword"
                placeholder="Пароль"
              />
              {error && <p> {error}</p>}
              <S.ModaBtnEnter type="submit" id="btnEnter">
                Войти
              </S.ModaBtnEnter>
              <S.ModalFormGroup>
                <p>Нужно зарегистрироваться?</p>
                <Link to={routes.register}>Регистрируйтесь здесь</Link>
              </S.ModalFormGroup>
            </S.ModalFormLogin>
          </S.ModalBlock>
        </S.Modal>
      </S.ContainerSignIn>
    </Wrapper>
  );
};
