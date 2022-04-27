import React from 'react'
import ReactEcharts from 'echarts-for-react';

const option = (data) => {
  return {
    title: {
      text: '',
      subtext: '',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'bottom'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
}

export const Pie = ({ data }) => {
  const pieData = data && data.question_group.map(v => {
    return { value: v.question.length, name: v.name }
  })

  return (
    <ReactEcharts option={option(pieData)} />
  )
}