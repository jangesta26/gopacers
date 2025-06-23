'use client'
import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts';

const TrainingChart = () => {
    const chartRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      if (chartRef.current) {
        const chart = echarts.init(chartRef.current);
        const option = {
          animation: false,
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
            },
          },
          legend: {
            data: ["Distance (km)", "Pace (min/km)"],
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
          },
          xAxis: {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          },
          yAxis: [
            {
              type: "value",
              name: "Distance",
              min: 0,
              max: 20,
              interval: 5,
              axisLabel: {
                formatter: "{value} km",
              },
            },
            {
              type: "value",
              name: "Pace",
              min: 4,
              max: 8,
              interval: 1,
              axisLabel: {
                formatter: "{value} min/km",
              },
            },
          ],
          series: [
            {
              name: "Distance (km)",
              type: "bar",
              data: [5.2, 0, 8.5, 4.3, 0, 12.7, 15.1],
            },
            {
              name: "Pace (min/km)",
              type: "line",
              yAxisIndex: 1,
              data: [5.8, 0, 5.5, 5.9, 0, 5.3, 5.1],
            },
          ],
        };
        chart.setOption(option);
        const handleResize = () => {
          chart.resize();
        };
        window.addEventListener("resize", handleResize);
        return () => {
          chart.dispose();
          window.removeEventListener("resize", handleResize);
        };
      }
    }, []);
    return <div ref={chartRef} className="w-full h-[300px]" />;
}

export default TrainingChart
