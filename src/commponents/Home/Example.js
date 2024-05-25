import React, { PureComponent } from 'react';
import { BarChart, Bar, ResponsiveContainer, LabelList } from 'recharts';
import styles from '../../styles/Chart.module.css';

const data = [
  {
    name: '평균',
    uv: 8,
    fill: '#EDEFF6'
  },
  {
    name: '나',
    uv: 12,
    fill: '#8D47FF'
  }
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/tiny-bar-chart-35meb';

  render() {
    return (
      <ResponsiveContainer width="70%" height="60%">
        <BarChart data={data} className={styles['charStyle']} barCategoryGap={41} barSize={73} maxBarSize={168}>
          <Bar dataKey="uv" radius={8}>
            <LabelList dataKey={({uv}) => `${uv}개`} position="top" fill='#000' className={styles['labelStyle']} offset={10}/>
            <LabelList dataKey="name" position="insideTop" fill='#fff' style={{fontSize:"14px"}} offset={15}/>
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

// import React, { PureComponent } from 'react';
// import { BarChart, Bar, ResponsiveContainer, LabelList } from 'recharts';
// import styles from '../../styles/Chart.module.css';

// const data = [
//   {
//     name: '평균',
//     uv: 8,
//     fill: '#EDEFF6'
//   },
//   {
//     name: '나',
//     uv: 12,
//     fill: '#8D47FF'
//   }
// ];

// export default class Example extends PureComponent {
//   static demoUrl = 'https://codesandbox.io/s/tiny-bar-chart-35meb';

//   render() {
//     return (
//       <ResponsiveContainer width="70%" height="60%">
//         <BarChart data={data} className={styles['charStyle']} barCategoryGap={41} barSize={73} maxBarSize={168}>
//           <Bar dataKey="uv" radius={8}>
//             <LabelList
//               dataKey={({ uv }) => `${uv}개`}
//               position="top"
//               fill='#000'
//               style={{ fontWeight: "bold", fontSize: "14px" }}
//               offset={10}
//             />
//             <LabelList
//               dataKey="name"
//               position="insideTop"
//               fill={(entry) => entry.name === '평균' ? '#B8BBC7' : '#ffffff'} // 평균일 때만 색 변경
//               style={{ fontSize: "14px" }}
//               offset={15}
//             />
//           </Bar>
//         </BarChart>
//       </ResponsiveContainer>
//     );
//   }
// }
