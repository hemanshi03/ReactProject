import React, { useState } from "react";
import "./ButtonAlert.css";

// don't change the Component name "App"
function ButtonAlert() {
  const [visible, setVisible] = useState(false);
  function proceedHandler() {
    setVisible(false);
  }
  function alertHandler() {
    console.log(visible);
    setVisible(true);
  }
  if (visible === true) {
    return (
      <div>
        <div id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={proceedHandler}>Proceed</button>
        </div>
        <button onClick={alertHandler}>Delete</button>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={alertHandler}>Delete</button>
      </div>
    );
  }
}

export default ButtonAlert;
