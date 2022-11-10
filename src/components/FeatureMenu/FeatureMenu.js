import TodoLogo from "../../images/icon-todo.svg";
import CalenderLogo from "../../images/icon-calendar.svg";
import ReminderLogo from "../../images/icon-reminders.svg";
import PlanningLogo from "../../images/icon-planning.svg";
import "./FeatureMenu.css";

const FeatureMenu = (props) => {
  return (
    <ul className={`feature-menu ${props.class}`}>
      <li>
        <img src={TodoLogo} alt="" />
        To Do list
      </li>
      <li>
        <img src={CalenderLogo} alt="" />
        Calender
      </li>
      <li>
        <img src={ReminderLogo} alt="" />
        Reminder
      </li>
      <li>
        <img src={PlanningLogo} alt="" />
        Planning
      </li>
    </ul>
  );
};

export default FeatureMenu;
