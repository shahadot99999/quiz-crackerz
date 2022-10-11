import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {

    const data = [
        {
            name: "React",
            total: 8,
            pv: 2400,
            amt: 2400
        },
        {
            name: "JavaScript",
            total: 9,
            pv: 1398,
            amt: 2210
        },
        {
            name: "CSS",
            total: 8,
            pv: 9800,
            amt: 2290
        },
        {
            name: "Git",
            total: 11,
            pv: 3908,
            amt: 2000
        }

    ];

    return (
        <div>
            <LineChart width={500} height={400} data={data}>
                <Line type="monotone" dataKey="total" stroke="#8884d8" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default Statistics;