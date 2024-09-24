import style from "./info.module.css";
import cn from "classnames";

interface IInfo {
  info: number;
  calories: number;
}

function Info({ info, calories }: IInfo) {
  return (
    <span className={cn(style.tracker__info)}>
      {calories} / {info}
    </span>
  );
}

export default Info;
