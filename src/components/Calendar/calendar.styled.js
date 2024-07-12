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
// export const CalendarTtl = styled.p`
//  margin-bottom: 14px;
//  padding: 0 7px;
// `

// export const CalendarContent = styled.div`
//   margin-bottom: 12px;
//  `

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
    //width: 22px;
    height: 22px;
    //margin: 2px;
   // border-radius: 50%;
    //flex-wrap: nowrap;
    //align-items: center;
    //justify-content: center;
    //color: #94a6be;
    //font-size: 10px;
    //line-height: 1;
    //letter-spacing: -0.2px;
    //cursor: pointer;
  }
  .rdp-button_reset.rdp-button.rdp-day {
    width: 28px;
    height: 28px;
    font-size: 12px;
  }
  p {
    width: 100%;
  }

  /* --rdp-cell-size: 42px;
    --rdp-caption-font-size: 14px;
    --rdp-accent-color: #0000ff;
    --rdp-background-color: #e7edff;
    --rdp-accent-color-dark: #3003e1;
    --rdp-background-color-dark: #180270;
    --rdp-outline: 2px solid var(--rdp-accent-color);
    --rdp-outline-selected: 3px solid var(--rdp-accent-color);
    --rdp-selected-color: #fff; */
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
  `