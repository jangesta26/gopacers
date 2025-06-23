'use client'
import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts';

  const PaceDistributionChart = () => {
    const chartRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      if (chartRef.current) {
        const chart = echarts.init(chartRef.current);
        const option = {
          animation: false,
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)",
          },
          legend: {
            orient: "vertical",
            left: 10,
            data: [
              "Easy Runs",
              "Tempo Runs",
              "Intervals",
              "Long Runs",
              "Recovery",
            ],
          },
          series: [
            {
              name: "Training Distribution",
              type: "pie",
              radius: ["50%", "70%"],
              avoidLabelOverlap: false,
              itemStyle: {
                borderRadius: 10,
                borderColor: "#fff",
                borderWidth: 2,
              },
              label: {
                show: false,
                position: "center",
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: 16,
                  fontWeight: "bold",
                },
              },
              labelLine: {
                show: false,
              },
              data: [
                { value: 45, name: "Easy Runs" },
                { value: 15, name: "Tempo Runs" },
                { value: 10, name: "Intervals" },
                { value: 20, name: "Long Runs" },
                { value: 10, name: "Recovery" },
              ],
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
  };

export default PaceDistributionChart
