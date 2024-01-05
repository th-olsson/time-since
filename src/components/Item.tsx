import dayjs from "dayjs";
import { useState } from "react";
import { useInterval } from "../hooks/useInterval";

type Props = {
  label: string;
};

export function Item({ label }: Props) {
  const [start, setStart] = useState(dayjs());
  const [time, setTime] = useState<number>(0);

  useInterval(() => setTime(-1 * start.diff(dayjs(), "seconds")), 0);

  function reset() {
    setStart(dayjs());
  }

  return (
    <div className="item">
      <div>
        <p>{`${label}: ${time} seconds`}</p>
      </div>
      <button onClick={reset}>Start again</button>
      <p>Start time: {start.toISOString()}</p>
    </div>
  );
}
