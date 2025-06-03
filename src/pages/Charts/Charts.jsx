
import React from 'react';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';


const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const Charts = ({ appointment }) => {

    const doctorsData = appointment.map(doctorData => (
        {
        name: doctorData.name,
        fees: doctorData.consultation_fee,
    }
));


    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };


    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div className='bg-white' style={{ width: '100%', height: '400px' }}>
            <BarChart
                width={800}
                height={400}
                data={doctorsData}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 70,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                    dataKey="name" 
                    angle={-45} 
                    textAnchor="end"
                    height={70}
                />
                <YAxis 
                    domain={[0, 1800]}
                    label={{ value: 'Fee (USD)', angle: -90, position: 'insideLeft' }}
                />
                <Tooltip formatter={(value) => [`$${value}`, 'Consultation Fee']} />
                <Bar 
                    dataKey="fees" 
                    name="Consultation Fee"
                    shape={<TriangleBar />}
                    label={{ position: 'top' }}
                >
                    {doctorsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};

export default Charts;