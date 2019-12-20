import React from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar'

export default class indexBarData extends React.Component{
   initCharts = ()=>{
    var option = {
      dataset: {
          source: [
              ['number', 'name'],
              [119, '呼损量'],
              [307, '取号未呼量'],
              [389, '漏接量'],
              [151, '业务办理量'],
              [455, '接触量'],
              [667,  '接通量'],
              [940, '外呼量'],
          ]
      },
      grid: {containLabel: true},
      xAxis:{
          type: 'value',
          axisTick: {
              show: false
          },
          axisLine: {
              lineStyle: {
                  color: '#666'
              }
          },
          interval: 100
      },
      yAxis: {
          type: 'category',
          axisTick: {
              show: false
          },
          axisLine: {
              show: false
          }
      },
      series: [
          {
              type: 'bar',
              barMaxWidth: 13,
              itemStyle: {
                  color: '#9dcce4',
                  barBorderRadius: 20,
                  },
              label:  {
                  show: true,
                  position: 'right',
                  color: '#000'
              },
              encode: {
                  // Map the "amount" column to X axis.
                  x: 'number',
                  // Map the "product" column to Y axis
                  y: 'name'
              }
          }
      ]
  };
  echarts.init(document.getElementById('main')).setOption(option);
  }

  componentDidMount(){
    this.initCharts()
  }

  componentDidUpdate(){
    this.initCharts()
  }

  render(){
    return (
      <div id='main' style = {{height: 400, width: 700}}></div>
    )
  }
}
