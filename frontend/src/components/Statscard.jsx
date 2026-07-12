
import CountUp from "react-countup";

function Statscard({
  title,
  value,
  color,
  icon: Icon,
  trend,
  trendType
}) {

  return (

    <div
      className="stat-card"
      style={{
        borderTop: `5px solid ${color}`
      }}
    >

      <div className="stat-header">

        <div
          className="stat-icon"
          style={{ background: color }}
        >

          {Icon && <Icon size={24} color="white" />}

        </div>

        <span
          className={`trend ${trendType}`}
        >

          {trend}

        </span>

      </div>

      <h3>{title}</h3>

      <h1>

        <CountUp
          end={Number(value)}
          duration={2}
        />

      </h1>

    </div>

  );

}

export default Statscard;