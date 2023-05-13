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
} from "recharts";
export default function Chart({ title, data, dataKey, grid, type }) {
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
      ) : (
        "Dicka shkoi gabim!"
      )}
    </>
  );
}
