import React from 'react';
import { BarChart, Bar, ResponsiveContainer, LabelList } from 'recharts';
import styles from '../../styles/Chart.module.css';

const Example = ({ chartAverage, chartUserLetter }) => {

  const data = [
    {
      name: '평균',
      uv: chartAverage?.letters_avg || 0,
      fill: '#EDEFF6'
    },
    {
      name: '나',
      uv: chartUserLetter?.letters || 0,
      fill: '#8D47FF'
    }
  ];
  

  return (
    <ResponsiveContainer width="70%" height="60%">
      <BarChart data={data} className={styles['charStyle']} barCategoryGap={41} barSize={73} maxBarSize={168}>
        <Bar dataKey="uv" radius={8}>
          <LabelList dataKey="uv" position="top" fill='#000' className={styles['labelStyle']} offset={10} formatter={(value) => `${value}개`} />
          <LabelList dataKey="name" position="insideTop" fill='#fff' style={{fontSize:"14px"}} offset={15} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Example;
