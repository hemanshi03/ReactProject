import "./Purple.css";
function Purple(props) {
  const concate = "purple " + props.className;

  return <div className={concate}> {props.children}</div>;
}

export default Purple;
