import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const EventGenre = ({ events }) => {
  const [ data, setData ] = useState([]);

  useEffect(() => {
    setData(() => getData());
  }, [events]);


  const getData = () => {
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
    const data = genres.map((genre) => {
      const value = events.filter(({ summary }) => summary.split(' ').includes(genre)).length;
      return { name: genre, value };
    })
    return data;
  };

  const colors = ['#e1f7d5', '#ffbdbd', '#c9c9ff', '#ffffff', '#f1cbff'];

  return (
    <ResponsiveContainer height={400} >
      <PieChart>
        <Pie
          data={data}
          cy={150}
          labelLine={false}
          outerRadius={60}
          fill='#c51f5d'
          dataKey='value'
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={colors[index % colors.length]}
              name={entry.name}
            />
          ))}
        </Pie>
        <Legend layout='horizontal' align='center' verticalAlign='top'></Legend>
      </PieChart>
    </ResponsiveContainer>
  )
}

export default EventGenre;