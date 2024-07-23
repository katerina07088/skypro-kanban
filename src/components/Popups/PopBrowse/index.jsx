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
  const [selected, setSelected] = useState(null)

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

   const [editTaskData, setEditTaskData] = useState({
    status: "",
    description: "",
    title: "",
    topic: ""
  });


  const addEditTask = async (e) => {
        e.preventDefault();
    try {
      await editCard (user.token, editTaskData ).then((res) => {
       setTasks(res);
       nav(routes.main);
      });
    } catch (error) {
      setError(error.message);
    }
  };

  const deleteTask = async (e) => {
    e.preventDefault();
    try {
      await deleteCard( user.token, id ).then((res) => {
        setTasks(res.tasks);
        nav(routes.main);
      });
    } catch (error) {
      setError(error.message);
    }
  };


  useEffect(() => {
if (tasks.length) {
 const task = tasks.find(t => t._id === id);
 if(!task) {
 return nav(routes.main)
 }
 console.log(task)
setEditTaskData({
  ...editTaskData, title:task.title,
  topic: task.topic,
  description:task.description,
  status: task.status
})
setSelected(new Date(task.date))
}}, [tasks])



  return (
    <S.PopBrowse id="popBrowse">
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            <S.PopBrowseTopBlock>
              <S.PopBrowseTtl> {editTaskData.title} </S.PopBrowseTtl>

              <S.CategoriesTheme $color={editTaskData.topic}>
                <p>{editTaskData.topic}</p>
              </S.CategoriesTheme>

            </S.PopBrowseTopBlock>
            <S.PopBrowseStatus>
              <S.PopBrowseStatusTtl>Статус</S.PopBrowseStatusTtl>
              {isEdit ? (
                <S.StatusThemes>
                  <S.StatusTheme>
                    <p>Без статуса</p>
                  </S.StatusTheme>
                  <S.StatusTheme>
                    <p>Нужно сделать</p>
                  </S.StatusTheme>
                  <S.StatusTheme>
                    <p>В работе</p>
                  </S.StatusTheme>
                  <S.StatusTheme>
                    <p>Тестирование</p>
                  </S.StatusTheme>
                  <S.StatusTheme>
                    <p>Готово</p>
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
              <S.PopBrowseForm
                className="pop-browse__form form-browse"
                id="formBrowseCard"
                action="#"
              >
                <S.FormBrowseBlock>
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  <S.FormBrowseArea  onChange={(e) =>
                    setEditTaskData({ ...editTaskData, description: e.target.value })
                  }
                  name="text"
                  value={editTaskData.description}
                  id="textArea01"
                  readOnly = {!isEdit}
                    placeholder="Введите описание задачи..."
                  ></S.FormBrowseArea>
                </S.FormBrowseBlock>
              </S.PopBrowseForm>

              <Calendar selected={selected} setSelected={setSelected} />
            </S.PopBrowseWrap>

            {/* <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__theme _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </div> */}

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
                  <S.Btn onClick={addEditTask} > Сохранить </S.Btn>
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
