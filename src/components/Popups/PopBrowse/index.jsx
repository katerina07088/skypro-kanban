import { Link, useNavigate, useParams } from "react-router-dom";
import { routes } from "../../../router/routers";
import { Calendar } from "../../Calendar";
import * as S from "./popBrowse.styled";
import { useEffect, useState } from "react";
import { deleteCard, editCard } from "../../../api/tasks";
import { useUserContext } from "../../Context/useUserContext";
import { useTaskContext } from "../../Context/useTaskContext";

export const PopBrowse = () => {
  //const [date, setDate]  = useState(New Date())
  const { id } = useParams();
  const { user } = useUserContext();
  const { setTasks, tasks } = useTaskContext();
  const nav = useNavigate();
  const [error, setError] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [selected, setSelected] = useState(null);

  const [editTaskData, setEditTaskData] = useState({
    status: "",
    description: "",
    title: "",
    topic: "",
  });

  useEffect(() => {
    if (tasks.length) {
      const task = tasks.find((t) => t._id === id);
      if (!task) {
        return nav(routes.main);
      }
      console.log(task);
      setEditTaskData({
        ...editTaskData,
        title: task.title,
        topic: task.topic,
        description: task.description,
        status: task.status,
      });
      setSelected(new Date(task.date));
    }
  }, [tasks]);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const addEditTask = async (e) => {
    e.preventDefault();
    try {
      await editCard(user.token, id, { editTaskData }).then((res) => {
        setTasks(res.tasks);
        nav(routes.main);
      });
    } catch (error) {
      setError(error.message);
    }
  };

  const deleteTask = async (e) => {
    e.preventDefault();
    try {
      await deleteCard(user.token, id).then((res) => {
        setTasks(res.tasks);
        nav(routes.main);
      });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <S.PopBrowse id="popBrowse">
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            <S.PopBrowseTopBlock>
              <S.PopBrowseTtl
                onChange={(e) =>
                  setEditTaskData({
                    ...editTaskData,
                    title: e.target.value,
                  })
                }
                type="text"
                name="name"
                value={editTaskData.title}
                // readOnly={!isEdit}
              >
                {editTaskData.title}{" "}
              </S.PopBrowseTtl>

              <S.CategoriesTheme $color={editTaskData.topic}>
                <p>{editTaskData.topic}</p>
              </S.CategoriesTheme>
            </S.PopBrowseTopBlock>
            <S.PopBrowseStatus>
              <S.PopBrowseStatusTtl>Статус</S.PopBrowseStatusTtl>
              {isEdit ? (
                <S.StatusThemes>
                  <S.StatusTheme
                    $active={editTaskData.status === "Без статуса"}
                    htmlFor="noStatus"
                  >
                    Без статуса
                    <S.StatusInput
                      onChange={(e) =>
                        setEditTaskData({
                          ...editTaskData,
                          status: e.target.value,
                        })
                      }
                      name="status"
                      type="radio"
                      value="Без статуса"
                      id="noStatus"
                    />
                  </S.StatusTheme>

                  <S.StatusTheme
                    $active={editTaskData.status === "Нужно сделать"}
                    htmlFor="needToDo"
                  >
                    Нужно сделать
                    <S.StatusInput
                      onChange={(e) =>
                        setEditTaskData({
                          ...editTaskData,
                          status: e.target.value,
                        })
                      }
                      name="status"
                      type="radio"
                      value="Нужно сделать"
                      id="needToDo"
                    />
                  </S.StatusTheme>

                  <S.StatusTheme
                    $active={editTaskData.status === "В работе"}
                    htmlFor="inWork"
                  >
                    В работе
                    <S.StatusInput
                      onChange={(e) =>
                        setEditTaskData({
                          ...editTaskData,
                          status: e.target.value,
                        })
                      }
                      name="status"
                      type="radio"
                      value="В работе"
                      id="inWork"
                    />
                  </S.StatusTheme>

                  <S.StatusTheme
                    $active={editTaskData.status === "Тестирование"}
                    htmlFor="testing"
                  >
                    Тестирование
                    <S.StatusInput
                      onChange={(e) =>
                        setEditTaskData({
                          ...editTaskData,
                          status: e.target.value,
                        })
                      }
                      name="status"
                      type="radio"
                      value="Тестирование"
                      id="testing"
                    />
                  </S.StatusTheme>

                  <S.StatusTheme
                    $active={editTaskData.status === "Готово"}
                    htmlFor="ready"
                  >
                    Готово
                    <S.StatusInput
                      onChange={(e) =>
                        setEditTaskData({
                          ...editTaskData,
                          status: e.target.value,
                        })
                      }
                      name="status"
                      type="radio"
                      value="Готово"
                      id="ready"
                    />
                  </S.StatusTheme>
                </S.StatusThemes>
              ) : (
                <S.StatusThemes>
                  <S.StatusThemeOriginal>
                    <p>{editTaskData.status}</p>
                  </S.StatusThemeOriginal>
                </S.StatusThemes>
              )}
            </S.PopBrowseStatus>

            <S.PopBrowseWrap>
              <S.PopBrowseForm>
                <S.FormBrowseBlock>
                  <S.TextArea>Описание задачи</S.TextArea>
                  <S.FormBrowseArea
                    onChange={(e) =>
                      setEditTaskData({
                        ...editTaskData,
                        description: e.target.value,
                      })
                    }
                    value={editTaskData.description}
                    readOnly={!isEdit}
                    name="text"
                    placeholder="Введите описание задачи..."
                  ></S.FormBrowseArea>
                </S.FormBrowseBlock>
              </S.PopBrowseForm>

              <Calendar
                selected={selected}
                setSelected={setSelected}
                disabled={!isEdit}
              />
            </S.PopBrowseWrap>

            {!isEdit ? (
              <S.BtnBrowse>
                <S.BntGroup>
                  <S.Btn onClick={handleEdit}> Редактировать задачу</S.Btn>
                  <S.Btn onClick={deleteTask}> Удалить задачу </S.Btn>
                </S.BntGroup>
                <S.BtnClose>
                  <Link to={routes.main}>Закрыть</Link>
                </S.BtnClose>
                {error && <p> {error}</p>}
              </S.BtnBrowse>
            ) : (
              <S.BtnBrowse className="pop-browse__btn-edit ">
                <S.BntGroup>
                  <S.Btn onClick={addEditTask}> Сохранить </S.Btn>
                  <S.Btn onClick={handleEdit}> Отменить </S.Btn>
                  <S.Btn onClick={deleteTask}>Удалить задачу</S.Btn>{" "}
                </S.BntGroup>
                <S.BtnClose>
                  <Link to={routes.main}>Закрыть</Link>
                </S.BtnClose>
              </S.BtnBrowse>
            )}
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowse>
  );
};
