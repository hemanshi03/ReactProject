import "./Bold.css";

function Bold(props) {
  return <p className={"bold " + props.className}>{props.children}</p>;
}

export default Bold;
