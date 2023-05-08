import React from "react";
import useButtonEvent from "../hooks/useButtonEvent";
import { useFetchPlaceHolder } from "../hooks/useFetchPlaceHolder";

function MyComponent() {
  const clickCount = useButtonEvent();
  const data = useFetchPlaceHolder();

  if (data) {
    return (
      <div>
        <button id="my-counter">Counter</button>
        <button id="my-fetch">Fetch</button>
        <p>You've clicked the button {clickCount} times.</p>
        <p>
          JSON:
          {data.map((element) => {
            return <p>{element.title}</p>;
          })}
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <button id="my-counter">Counter</button>
        <button id="my-fetch">Fetch</button>
        <p>You've clicked the button {clickCount} times.</p>
      </div>
    );
  }
}

export default MyComponent;
