import style from "./status.module.css";
import cn from "classnames";

interface IStatus {
  status: string;
}

function Status({ status }: IStatus) {
  return <span className={cn(style.tracker__status)}>Уровень: {status}</span>;
}

export default Status;
