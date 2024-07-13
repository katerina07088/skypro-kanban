import { Link, useNavigate } from "react-router-dom";
import { Calendar } from "../../Calendar/index.jsx";
import * as S from "./popNewCard.styled.js";
import { routes } from "../../../router/routers.js";
import { useState } from "react";
import { useTaskContext } from "../../Context/useTaskContext.js";
import { addTask } from "../../../api/tasks.js";
import { useUserContext } from "../../Context/useUserContext.js";


export const PopNewCard = () => {
  const { user } = useUserContext();
  const { setTasks } = useTaskContext();
  const nav = useNavigate();
  const [error, setError] = useState("");
  const [date] = useState(new Date)
  const [checked, setChecked] = useState(false);

  const handleChecked = ()=>{
    setChecked(!checked)
  }

  const [newTaskData, setNewTaskData] = useState({
    title: "",
    topic:"",
    description: "",
    status: "",
  });

  const newCard = {      
    title:newTaskData.title,
    topic: newTaskData.topic,
    status:newTaskData.status,
    description: newTaskData.description.trim() || '',
    date: date.toISOString(),    // ???
  };

  const addNewTask = async (e) => {
    e.preventDefault();

    if (newTaskData.title === "") {
      setError("Введите название задачи");
      return;
    }
    if (newTaskData.description === "") {
      setError("Введите описание задачи");
      return;
    }
    if (newTaskData.date === "") {
      setError("Выберите срок исполнения");
      return;
    }
    if (newTaskData.status === "") {
      setError("Выберите статус задачи");
      return;
    }
    try {
      await addTask(newCard, user.token).then((res) => {
        setTasks(res.tasks);
        nav(routes.main);
      });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <S.PopNewCard id="popNewCard">
      <S.PopNewCardContainer>
        <S.PopNewCardBlock>
          <S.PopNewCardContent>
            <S.PopNewCardTtl>Создание задачи</S.PopNewCardTtl>
            <Link to={routes.main}>
              <S.PopNewCardClose>&#10006;</S.PopNewCardClose>
            </Link>
            <S.PopNewCardWrap>
              <S.PopNewCardForm id="formNewCard" action="#">
                <S.FormNewBlock>
                  <S.SubTtl htmlFor="formTitle">Название задачи</S.SubTtl>
                  <S.FormNewInput
                    onChange={(e) =>
                      setNewTaskData({ ...newTaskData, title: e.target.value })
                    }
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    value={newTaskData.title}
                    autoFocus
                  />
                </S.FormNewBlock>
                <S.FormNewBlock>
                  <S.SubTtl htmlFor="textArea">Описание задачи</S.SubTtl>
                  <S.FormNewArea
                    onChange={(e) =>
                      setNewTaskData({ ...newTaskData, description: e.target.value })
                    }
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={newTaskData.description}
                  ></S.FormNewArea>
                </S.FormNewBlock>
              </S.PopNewCardForm>

              <Calendar />
            
            </S.PopNewCardWrap>
            <S.Categories>
              <S.CategoriesSubTtl>Категория</S.CategoriesSubTtl>  
                          
             
              <S.CategoriesThemes>
               
                <S.CategoriesThemeOrange  onChange={(e) => setNewTaskData({ ...newTaskData, status: e.target.value })}
                name="topic"
                type="radio"
                value="Web Design"
                id = "orangeTopic" 
                 
                />   
                <S.TopicOrange htmlFor="orangeTopic"> Web Design </S.TopicOrange>

                <S.CategoriesThemeGreen onChange={(e) =>
                  setNewTaskData({ ...newTaskData, status: e.target.value })
                }
                name="topic"
                type="radio" 
                value="Research"
                id = "greenTopic" 
               />
                   <S.TopicGreen htmlFor="greenTopic"> Research </S.TopicGreen>

                <S.CategoriesThemePurple onChange={(e) =>
                  setNewTaskData({ ...newTaskData, status: e.target.value })
                }
                name="topic"
                type="radio"
                value="Copywriting"
                id = "purpleTopic"
                />
                <S.TopicPurple htmlFor="purpleTopic"> Copywriting </S.TopicPurple>
              


              </S.CategoriesThemes>
            </S.Categories>
            {error && <p> {error}</p>}
            <S.FormNewCreate onClick={addNewTask} id="btnCreate">
              Создать задачу
            </S.FormNewCreate>
          </S.PopNewCardContent>
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCard>
  );
};
