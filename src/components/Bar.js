import React from 'react'
import ReactEcharts from 'echarts-for-react';

const option = (data, legend, bar) => {
    return { 
      dataset: {
        source: data,
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      legend: {
        data: legend,
      },
      grid: {
        left: "10%",
        right: "0%",
        top: "20%",
        bottom: "20%",
      },
      xAxis: {
        type: bar === 'up' ? "category" : "value",
      },
      yAxis: {
        type: bar === 'up' ? "value" : "category",
      },
      series: [
        {
          type: "bar",
          stack: "total",
          label: {
            show: true,
          },
        }
      ],
    }
}


export const Bar = ({ data }) => {
    const legend = data && data.question_group.map(v => v.name)
    const barData = data && data.question_group.map((v, i) => [v.name,   v.question.length])
    
    return (
        <div style={{ display: "flex", gap: "10%", flexWrap: "wrap" }}>
            <ReactEcharts option={option(barData, legend, "up")} />
            <ReactEcharts option={option(barData, legend, "right")} />
        </div>
    )
}
