import React from "react";

function Try2(prop) {
  function changeHandler(event) {
    prop.onChangeTry2(event.target.value);
  }

  return (
    <div>
      <input id="text" type="text" onChange={changeHandler} />
    </div>
  );
}

export default Try2;
