import React from "react";
import Try1 from "./Try1";

function Try() {
  let arr = [];

  console.log(arr);

  function Try1ChnageHandler(data1) {
    arr = [...arr, data1];
    console.log(arr);
  }

  return <Try1 onChangeTry1={Try1ChnageHandler} />;
}

export default Try;
