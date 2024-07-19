import * as S from "./calendar.styled";
import { format } from "date-fns";
import { ru } from "date-fns/locale/ru";
import "react-day-picker/dist/style.css";

//import { DayPicker } from "react-day-picker";

// export function MyDatePicker() {
//   const [selected, setSelected] = useState();
//   return <DayPicker mode="single" selected={selected} onSelect={setSelected} />;
// }

export const Calendar = ({ selected, setSelected }) => {
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
      />
    </S.Calendar>
  );
};
