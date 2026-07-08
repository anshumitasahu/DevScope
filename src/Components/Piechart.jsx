import { Pie, PieChart } from 'recharts';

export default function LanguageChart({ data }) {
    console.log(data)
    return (
        <PieChart
            width={500} height={300} >

            <Pie
                data={data}
                nameKey="name"
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius="60%"
                outerRadius="80%"
                fill="#517fdb"
                label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                }
            />
            {/* <Tooltip defaultIndex={defaultIndex} /> */}
            {/* <RechartsDevtools /> */}
        </PieChart>
    );
}