import * as S from "./calendar.styled";
import { format } from "date-fns";
import { ru } from "date-fns/locale/ru";
import "react-day-picker/dist/style.css";

export const Calendar = ({ selected, setSelected, disabled }) => {
  let footer = (
    <S.CalendarContentP> Выберите срок исполнения. </S.CalendarContentP>
  );
  if (selected) {
    footer = (
      <S.CalendarContentP>
        Срок исполнения:{" "}
        <S.SelectedDate>
          {format(selected, "dd.MM.yy", { locale: ru })}.
        </S.SelectedDate>
      </S.CalendarContentP>
    );
  }

  return (
    <S.Calendar>
      <S.StyledDayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
        footer={footer}
        locale={ru}
        disabled={disabled}
      />
    </S.Calendar>
  );
};
