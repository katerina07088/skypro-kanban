import { Link, useNavigate, useParams } from "react-router-dom";
import { routes } from "../../../router/routers";
import { Calendar } from "../../Calendar";
import * as S from "./popBrowse.styled";
import { useState } from "react";
import { deleteCard } from "../../../api/tasks";
import { useUserContext } from "../../Context/useUserContext";
import { useTaskContext } from "../../Context/useTaskContext";

export const PopBrowse = ({ selected, setSelected, topic }) => {
  //const [date, setDate]  = useState(New Date())
  const { id } = useParams();
  const { user } = useUserContext();
  const { setTasks } = useTaskContext();
  //const { setTask } = useTaskContext();
  const nav = useNavigate();
  const [error, setError] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };



   const [editCard, setEditCard] = useState({
    status: "",
    description: "",
    date: "",
  });

  const editedCard = {
    title: editTaskData.title,
   // topic: editTaskData.topic,
    status: editTaskData.status,
    description: editTaskData.description.trim() || "",
    date: selected,
  };


  // const editTask = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await editCard({id,
  //     token: user.token,
  //     title: editedTask.title,
  //     topic: editedTask.topic,
  //     status: editedTask.status,
  //     description: editedTask.description,
  //     date: selected,
  //     }).then((res) => {
  //       returnTasks(res.taskData);
  //       nav(routes.main);
  //     });
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };



  // if (cards.length) {
  //   cardtitle = cards.find((card) => card._id === cardId).title;
  //   cardtopic = cards.find((card) => card._id === cardId).topic;
  //   cardstatus = cards.find((card) => card._id === cardId).status;
  //   carddescription = cards.find((card) => card._id === cardId).description;
  //   carddate = cards.find((card) => card._id === cardId).date;
  // }


  // const settheTask = async (e) => {
  //   try {
  //    await  getCardById(id, user.token).then((res) => {
  //   const task =  {
  //   title: res.title,
  //   topic: res.topic,
  //   date: selected,
  //   description: res.description,
  //   status: res.status,
  //   }
  //      // setTask(res.task)
  //     });
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };

  // const card = cards.find(card => card._id === id);



  const deleteTask = async (e) => {
    e.preventDefault();
    try {
      await deleteCard({ id }, user.token).then((res) => {
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
              <S.PopBrowseTtl> Название задачи {id} </S.PopBrowseTtl>

              <S.CategoriesTheme $color={topic}>
                <p>Web design</p>
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
                    <p>Без статуса</p>
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
                  <S.FormBrowseArea
                    name="text"
                    id="textArea01"
                    //readOnly
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
                  <S.Btn> Сохранить </S.Btn>
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
