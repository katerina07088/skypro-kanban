import { Link } from "react-router-dom";
import { routes } from "../../../router/routers";
import * as S from "./popUser.styled";
import { useUserContext } from "../../Context/useUserContext";

export const PopUser = () => {
  const { logout } = useUserContext();
  // const nav = useNavigate();
  // const handleLogout = () => {
  //   setUser (false)
  //   nav(routes.login)
  // }

  return (
    <S.PopExit id="popExit">
      <S.PopExitContainer>
        <S.PopExitBlock>
          <div>
            <S.PopExitTtl> Выйти из аккаунта?</S.PopExitTtl>
          </div>
          <S.PopExitForm id="formExit" action="#">
            <S.PopExitFormGroup>
              <S.PopExitExitYes id="exitYes" onClick={logout}>
                {" "}
                Да, выйти
              </S.PopExitExitYes>
              <S.PopExitExitNo id="exitNo">
                <Link to={routes.main}> Нет, остаться</Link>
              </S.PopExitExitNo>
            </S.PopExitFormGroup>
          </S.PopExitForm>
        </S.PopExitBlock>
      </S.PopExitContainer>
    </S.PopExit>
  );
};
