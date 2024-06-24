import { Link } from "react-router-dom"
import { Wrapper } from "../../globalStyle.styled"
import { routes } from "../../router/routers"
import   * as S  from "./LoginPage.styled"

export const LoginPage = () => {
    return(
<Wrapper>
        <S.ContainerSignIn>
            <S.Modal>
				<S.ModalBlock>
					<S.ModalTtl>
						<h2>Вход</h2>
					</S.ModalTtl>
					<S.ModalFormLogin id="formLogIn" action="#">
						<S.ModalInput type="text" name="login" id="formlogin" placeholder="Эл. почта"/>
						<S.ModalInput type="password" name="password" id="formpassword" placeholder="Пароль"/>
						<S.ModaBtnEnter id="btnEnter"><a href="../main.html">Войти</a></S.ModaBtnEnter>
						<S.ModalFormGroup>
							<p>Нужно зарегистрироваться?</p>
							<Link to = {routes.register}>Регистрируйтесь здесь</Link>
						</S.ModalFormGroup>
					</S.ModalFormLogin>
				</S.ModalBlock>
            </S.Modal>
        </S.ContainerSignIn>
    </Wrapper>

    )
}