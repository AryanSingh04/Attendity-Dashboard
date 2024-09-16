import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import CustomTooltip from './CustomTooltip';

const LineChartComponent = ({ className }) => {
  // Data for late arrivals and absences over 4 weeks
  const data = [
    { week: 'Week 1', late_arrivals: 64, absences: 40 },
    { week: 'Week 2', late_arrivals: 48, absences: 24 },
    { week: 'Week 3', late_arrivals: 66, absences: 46 },
    { week: 'Week 4', late_arrivals: 49, absences: 20 },
    // { week: 'Week 5', late_arrivals: 68, absences: 46 },
  ];

  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
        
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 30,
            bottom: 5,
          }}
        >
        
          <XAxis dataKey="week" axisLine={false} tickLine={false}/>
          <YAxis  axisLine={false} tickLine={false} />
         
          <Tooltip content={<CustomTooltip />} />
       
          <Line type="monotone" dataKey="late_arrivals" stroke="#8884d8"  strokeWidth={6} activeDot={{ r: 8 }} dot={false} />
          <Line type="monotone" dataKey="absences" stroke="#82ca9d" strokeWidth={6} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
