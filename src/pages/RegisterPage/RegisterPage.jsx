import { Link, useNavigate } from "react-router-dom";
import { Wrapper } from "../../globalStyle.styled";
import { routes } from "../../router/routers";
import * as S from "./registerPage.styled";
import { useState } from "react";
import { signUp } from "../../api/registerNewUser";

export const RegisterPage = () => {
  const nav = useNavigate()
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    login:"", 
    password:"",
    name:"",
  })

	const handleRegister = async(e) => {
    e.preventDefault()
    if (formData.login === '') {
			setError('Введите почту')
			return
		}
		if (formData.password === "") {
					setError('Введите пароль')
			return
		}
		if (formData.name === "") {
					setError('Введите имя')
			return
		}
    signUp(formData)
		nav(routes.main)
		.catch((error)=>{
			setError(error.message)
		})
  }
  return (
    <Wrapper>
      <S.ContainerSignUp>
        <S.Modal>
          <S.ModalBlock>
            <S.ModalTtl>
              <h2>Регистрация</h2>
            </S.ModalTtl>
            <S.ModalFormLogin onSubmit={handleRegister} id="formLogUp">
              <S.ModalInput onChange={ (e)=> setFormData({...formData, name: e.target.value})}
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Имя"
              />
              <S.ModalInput onChange={ (e)=> setFormData({...formData, login: e.target.value})}
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
              />
              <S.ModalInput onChange={ (e)=> setFormData({...formData, password: e.target.value})}
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
              />
              {error && <p>{error}</p>}
              <S.ModalBtnSignUpEnt id="SignUpEnter"> Зарегистрироваться
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

