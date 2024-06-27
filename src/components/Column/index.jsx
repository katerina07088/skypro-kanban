//import { useState } from "react";
import { Card } from "../Card/index.jsx";
import * as S from "./column.styled.js"


export const Column = ({ title, cards }) =>{
  return (
    <S.MainColumn>
      <S.ColumnTitle>
        <p> {title} </p>
      </S.ColumnTitle>
      <S.Cards>
        {cards.map((card) => {
          return < Card 
          key = {card.id} 
          id = {card.id}
          title = {card.title} 
          topic = {card.topic}
          date = {card.date} 
          />
        })}
      </S.Cards>
    </S.MainColumn>
  );
};
