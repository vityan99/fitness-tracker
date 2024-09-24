import style from "./button.module.css";
import cn from "classnames";

interface IButton {
  title: string;
  clickHandler: () => void;
}

function Button({ title, clickHandler }: IButton) {
  return (
    <button className={cn(style.btn)} onClick={clickHandler}>
      {title}
    </button>
  );
}

export default Button;
