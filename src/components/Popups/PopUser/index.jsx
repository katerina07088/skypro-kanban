import { Link } from "react-router-dom";
import { routes } from "../../../router/routers";
import * as S from "./popUser.styled";
import { useUserContext } from "../../Context/useUserContext";

export const PopUser = () => {
  const { logout } = useUserContext();

  return (
    <S.PopExit id="popExit">
      <S.PopExitContainer>
        <S.PopExitBlock>
          <div>
            <S.PopExitTtl> Выйти из аккаунта?</S.PopExitTtl>
          </div>
          <S.PopExitForm>
            <S.PopExitFormGroup>
              <S.PopExitExitYes onClick={logout}> Да, выйти</S.PopExitExitYes>
              <S.PopExitExitNo>
                <Link to={routes.main}> Нет, остаться</Link>
              </S.PopExitExitNo>
            </S.PopExitFormGroup>
          </S.PopExitForm>
        </S.PopExitBlock>
      </S.PopExitContainer>
    </S.PopExit>
  );
};
