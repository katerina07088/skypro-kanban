import { DayPicker } from "react-day-picker";
import styled from "styled-components";

export const Calendar = styled.div`
  width: 182px;
  margin-bottom: 20px;

  @media screen and (max-width: 660px) {
    max-width: 340px;
    width: 100%;
  }
  @media screen and (max-width: 660px) {
    width: 100%;
  }
`;

export const StyledDayPicker = styled(DayPicker)`
  margin: 0 0px;
  background-color: #ffffff;
  color: #94a6be;

  --rdp-cell-size: 42px;
  --rdp-accent-color: #94a6be;
  .rdp-nav_button {
  }

  .rdp-caption_label {
    color: #94a6be;
    font-size: 14px;
    line-height: 25px;
    font-weight: 600;
  }

  .rdp-head_cell {
    color: #94a6be;
    font-size: 10px;
    font-weight: 500;
  }

  .rdp-cell {
    height: 22px;
  }
  .rdp-button_reset.rdp-button.rdp-day {
    width: 28px;
    height: 28px;
    font-size: 12px;
  }
  p {
    width: 100%;
  }
  .rdp-day_selected {
    background: #94a6be;
  }
  .rdp-button:disabled {
    opacity: 1;
  }
  @media screen and (max-width: 495px) {
    width: 100%;
  }
`;

export const CalendarContentP = styled.p`
  width: 100px;
  color: #94a6be;
  font-family: Roboto;
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  text-align: left;
  height: 22px;
  margin-top: 14px;
`;

export const SelectedDate = styled.span`
  color: black;
  font-family: Roboto;
`;
