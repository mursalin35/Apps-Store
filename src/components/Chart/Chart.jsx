import React from 'react';
import { Bar, BarChart, Tooltip, Legend, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const Chart = ({ ratings }) => {
    // const { name, count } = rating;

    // data processing for the chart 
    const ratingChartData = ratings.map(rating => ({
        name: rating.name,
        count: rating.count
    }));

    return (
        // BarChart Container 
        <div className=''>
            <h4 className='font-semibold text-[1.3rem] mb-3 '>Ratings</h4>

            {/* BarChart  */}
            <ResponsiveContainer width="100%" height={350}>
                <BarChart data={ratingChartData} layout="vertical"
                // margin={{ top: 20, right: 30, left: 50, bottom: 10 }}
                >
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip cursor={{ fill: 'transparent' }} />
                    <Legend />
                    <Bar dataKey="count" fill="#FF8811" barSize={25}  style={{ cursor: 'pointer' }}/>
                </BarChart>
            </ResponsiveContainer>

        </div>
    );
};

export default Chart;