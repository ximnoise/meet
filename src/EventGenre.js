import { setCustomData } from 'atatus-spa';
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
  }

  return (
    <ResponsiveContainer height={400} >
      <PieChart>
        <Pie
          data={data}
          cx='47%'
          cy='50%'
          labelLine={false}
          outerRadius={80}
          fill='#8884d8'
          dataKey='value'
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
        </Pie>
        <Legend layout='horizontal' align='center' verticalAlign='top'></Legend>
      </PieChart>
    </ResponsiveContainer>
  )
}

export default EventGenre;