import React from 'react';
import ReactEcharts from 'echarts-for-react';

const option = (category, value) =>{
    return {
    xAxis: {
        type: 'category',
        data: category
        },
        yAxis: {
        type: 'value'
        },
        series: [
        {
            data: value,
            type: 'line'
        }
        ]
    };
}

export const Line = ({data}) => {
    const category = data && data.question_group.map(v => v.name)
    const values = data && data.question_group.map((v, i) => v.question.length)
    
    return (
        <ReactEcharts option={option(category, values)} />
    )
}