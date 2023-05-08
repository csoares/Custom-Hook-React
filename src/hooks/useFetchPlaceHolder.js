import { useState, useEffect } from "react";

export function useFetchPlaceHolder() {
  const [data, setData] = useState("");

  useEffect(() => {
    function handleClick() {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
        })
        .catch((error) => console.log(error));
    }

    const buttonRef = document.getElementById("my-fetch");
    buttonRef.addEventListener("click", handleClick);

    // return () => {
    //   button.removeEventListener("click", handleClick);
    // };
  }, [data]);

  return data;
}
