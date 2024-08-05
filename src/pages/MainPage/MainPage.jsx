import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Wrapper } from "../../globalStyle.styled";
import { Main } from "../../components/Main";
import { Outlet } from "react-router-dom";
import { getTasks } from "../../api/tasks";
import { Loader } from "../../components/Loader";
import { useUserContext } from "../../components/Context/useUserContext";
import { useTaskContext } from "../../components/Context/useTaskContext";

export const MainPage = ({ changeTheme, setChangeTheme }) => {
  const { user, setUser } = useUserContext();
  const { tasks, setTasks } = useTaskContext();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTasks(user.token)
      .then((res) => {
        setTasks(res.tasks);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [setTasks, user]);

  return (
    <Wrapper>
      <Outlet />
      <Header
        setUser={setUser}
        setChangeTheme={setChangeTheme}
        changeTheme={changeTheme}
      />
      {isLoading ? (
        <Loader />
      ) : error ? (
        <p> {error} </p>
      ) : (
        <Main cards={tasks} />
      )}
    </Wrapper>
  );
};
