import "./Chart.css";
import ChartBar from "./ChartBar";
function Chart(props) {
  const dataPoints = props.data.map((x) => x.value);
  const maxValue = Math.max(...dataPoints);

  return (
    <div className="chart">
      {props.data.map((x) => (
        <ChartBar
          value={x.value}
          label={x.label}
          max_value={maxValue}
          key={x.label}
        />
      ))}
    </div>
  );
}
export default Chart;
