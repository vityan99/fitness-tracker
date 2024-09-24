import style from "./tracker.module.css";
import cn from "classnames";

import Info from "../info/Info";
import Button from "../button/Button";
import Status from "../status/Status";
import Percent from "../percent/Percent";

import useTracker from "../../customHooks/useTracker/useTracker";

interface ITracker {
  title: string;
  info: number;
  percent: number;
  type: string;
  stepValue: number;
  colors: ColorsType;
}

type ColorsType = string[];

function Tracker({ title, info, percent, type, stepValue, colors }: ITracker) {
  const [{ calories, status, actualPercent, color, decreaseClickHandler, increaseClickHandler }] = useTracker({
    info,
    percent,
    stepValue,
    colors,
  });

  return (
    <div className={cn(style.tracker, style[`tracker--${type}`])}>
      <h2 className={cn(style.tracker__title)}>{title}</h2>
      <Info info={info} calories={calories} />
      <Status status={status} />
      <Percent actualPercent={actualPercent} color={color} />

      <div className={cn(style.tracker__btns)}>
        <Button title="Убавить" clickHandler={decreaseClickHandler} />
        <Button title="Прибавить" clickHandler={increaseClickHandler} />
      </div>
    </div>
  );
}

export default Tracker;
