import React from "react";
import Try2 from "./Try2";

function Try1(prop) {
  function Try2ChnageHandler(data) {
    prop.onChangeTry1(data);
  }

  return <Try2 onChangeTry2={Try2ChnageHandler} />;
}

export default Try1;
