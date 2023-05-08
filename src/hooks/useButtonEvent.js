import { useState, useEffect } from "react";

export default function useButtonEvent() {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    function handleClick() {
      setClickCount(clickCount + 1);
    }

    const buttonRef = document.getElementById("my-counter");
    buttonRef.addEventListener("click", handleClick);

    return () => {
      buttonRef.removeEventListener("click", handleClick);
    };
  }, [clickCount]);

  return clickCount;
}
