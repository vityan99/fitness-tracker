import style from "./percent.module.css";
import cn from "classnames";

interface IPercent {
  actualPercent: number;
  color: string;
}

function Percent({ actualPercent, color }: IPercent) {
  const percentComponentStyle = {
    backgroundColor: color,
    width: `${actualPercent}%`,
  };

  return (
    <div className={cn(style.tracker__percent)}>
      <div className={cn(style["tracker__percent-value"])} style={percentComponentStyle}>
        {`${actualPercent}%`}
      </div>
    </div>
  );
}

export default Percent;
