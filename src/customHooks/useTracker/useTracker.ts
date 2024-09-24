import { useState, useEffect } from "react";

type ColorsType = string[];

interface IUseTracker {
  info: number;
  percent: number;
  stepValue: number;
  colors: ColorsType;
}

type UseTrackerReturnType = {
  calories: number;
  status: string;
  actualPercent: number;
  color: string;
  decreaseClickHandler: () => void;
  increaseClickHandler: () => void;
};

const useTracker = ({ info, percent, stepValue, colors }: IUseTracker): UseTrackerReturnType[] => {
  const startValue: number = (info / 100) * percent;
  const step: number = (info / 100) * stepValue;

  const [calories, setCalories] = useState<number>(startValue);
  const [status, setStatus] = useState<string>("");
  const [color, setColor] = useState<string>("");

  const actualPercent: number = parseFloat(((calories / info) * 100).toFixed(0));

  const calculateStatus = (): void => {
    if (actualPercent < 50) {
      setStatus("легкий");
    }

    if (actualPercent >= 50 && actualPercent < 70) {
      setStatus("средний");
    }

    if (actualPercent >= 70) {
      setStatus("сложный");
    }
  };

  const getActualColor = (): void => {
    if (actualPercent >= 0 && actualPercent <= 20) {
      setColor(colors[0]);
    }

    if (actualPercent > 20 && actualPercent <= 40) {
      setColor(colors[1]);
    }

    if (actualPercent > 40 && actualPercent <= 60) {
      setColor(colors[2]);
    }

    if (actualPercent > 60 && actualPercent <= 80) {
      setColor(colors[3]);
    }

    if (actualPercent > 80 && actualPercent <= 100) {
      setColor(colors[4]);
    }
  };

  useEffect(() => {
    calculateStatus();
    getActualColor();
  }, [calories]);

  const decreaseClickHandler = (): void => setCalories((current) => Math.max(current - step, 0));
  const increaseClickHandler = (): void => setCalories((current) => Math.min(current + step, info));

  return [{ calories, status, actualPercent, color, decreaseClickHandler, increaseClickHandler }];
};

export default useTracker;
