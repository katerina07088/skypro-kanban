import { Link, useNavigate } from "react-router-dom"
import { routes } from "../../../router/routers"
import * as S from "./popUser.styled"

export const PopUser = ({setUser}) => {
  
  const nav = useNavigate()
  const handleLogout = () => {
    setUser (false)
    nav(routes.login)
  }

    return (
        <S.PopExit id="popExit">
        <S.PopExitContainer>
          <S.PopExitBlock>
            <S.PopExitTtl>
              <h2>Выйти из аккаунта?</h2>
            </S.PopExitTtl>
            <form className="pop-exit__form" id="formExit" action="#">
              <S.PopExitFormGroup>
                <S.PopExitExitYes id="exitYes">
                  <a onClick={handleLogout}> Да, выйти </a>
                </S.PopExitExitYes>
                <S.PopExitExitNo id="exitNo">
                  <Link to= {routes.main}> Нет, остаться</Link>
                </S.PopExitExitNo>
              </S.PopExitFormGroup>
            </form>
          </S.PopExitBlock>
        </S.PopExitContainer>
      </S.PopExit>
    )
}