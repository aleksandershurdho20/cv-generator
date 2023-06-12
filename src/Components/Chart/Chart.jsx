import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Legend,
  Cell,
} from "recharts";
export default function Chart({ title, data, dataKey, grid, type }) {
  const parsePieOutPut = (value) => {
    if (value === "rejected") return "Refuzuar";
    else if (value === "applied") return "Aplikuar";
    else if (value === "shortlisted") return "Perzgjedhur"
    else return "Ska te dhena!";
  };
  const COLORS = ["#61bf93","#4285F4","#FF0000"];

  return (
    <>
      {type === "bar " ? (
        <ResponsiveContainer width="90%" height={300}>
          <BarChart margin={{ top: 50 }} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            {/* "date" came from jobs-controller.js (after mapping the monthlyApplications,
            we returned {date, count}. Here we use date as a dataKey */}
            <XAxis dataKey="date" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar fill="#39B5E0" barSize={75} dataKey={dataKey} />
          </BarChart>
        </ResponsiveContainer>
      ) : type === "area" ? (
        <ResponsiveContainer width="90%" height={300}>
          <AreaChart
            margin={{
              top: 50,
            }}
            data={data}
          >
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="date" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Area
              type="monotone"
              stroke="#39B5E0"
              fill="#C0DEFF"
              dataKey={dataKey}
            />
          </AreaChart>
        </ResponsiveContainer>
      ) : type === "pie" ? (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart height={300} margin={{ top: 15 }}>
            {/* <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              dataKey={dataKey}
              label={({
                cx,
                cy,
                midAngle,
                innerRadius,
                outerRadius,
                value,
                index,
              }) => {
                console.log("handling label?");
                const RADIAN = Math.PI / 180;
                // eslint-disable-next-line
                const radius = 25 + innerRadius + (outerRadius - innerRadius);
                // eslint-disable-next-line
                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                // eslint-disable-next-line
                const y = cy + radius * Math.sin(-midAngle * RADIAN);

                return (
                  <>
                  <text
                    x={x}
                    y={y}
                    fill="#8884d8"
                    textAnchor={x > cx ? "start" : "end"}
                    dominantBaseline="central"
                  >
                    {parsePieOutPut(data[index]._id)} ({value})
                  </text>
                  </>
                );
              }}
            /> */}

            <Pie
              data={data}
              color="#000000"
              dataKey={dataKey}
              nameKey="_id"
              cx="50%"
              cy="50%"
              outerRadius={120}
              fill="#8884d8"
            >
              {data?.map((entry, index) => (
                <>
                <Cell
                  key={`cell-${index}`}
                  fill={entry._id == "applied" ? COLORS[1] : entry._id == "shortlisted" ? COLORS[0] : COLORS[2]  }
                />
                
                </>
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      ) : (
        "Dicka shkoi gabim!"
      )}
    </>
  );
}
