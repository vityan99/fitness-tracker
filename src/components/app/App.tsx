import style from "./app.module.css";
import cn from "classnames";

import Tracker from "../tracker/Tracker";

function App() {
  return (
    <div className={cn(style.container)}>
      <Tracker
        title={"Бег"}
        info={1000}
        percent={30}
        type={"run"}
        stepValue={5}
        colors={["#24FF00", "#DBFF00", "#FFF500", "#FFB800", "#FF0000"]}
      />
      <Tracker
        title={"Ходьба"}
        info={2000}
        percent={50}
        type={"walking"}
        stepValue={20}
        colors={["#24FF00", "#DBFF00", "#FFF500", "#FFB800", "#FF0000"]}
      />
      <Tracker
        title={"Калории"}
        info={7000}
        percent={70}
        type={"calories"}
        stepValue={10}
        colors={["#24FF00", "#DBFF00", "#FFF500", "#FFB800", "#FF0000"]}
      />
    </div>
  );
}

export default App;
