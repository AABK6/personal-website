"use client";

import { useMemo } from "react";
import { Html } from "@react-three/drei";
import { AreaClosed, LinePath } from "@visx/shape";
import { curveMonotoneX } from "@visx/curve";
import { scaleTime, scaleLinear } from "@visx/scale";
import { GridRows, GridColumns } from "@visx/grid";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { useTheme } from "next-themes";
import { CSV_DATA } from "@/lib/data";

const parseCSV = (csvText: string) => {
  const lines = csvText.trim().split('\n');
  const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
  const data = [];
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',');
    const obj: { [key: string]: string } = {};
    headers.forEach((header, index) => {
      let value = values[index] ? values[index].trim() : '';
      obj[header] = value;
    });
    data.push(obj);
  }
  return data;
};

const chartData = parseCSV(CSV_DATA)
  .filter(d => d.Entity === 'World' && d['Population (historical estimates and future projections)'])
  .map(d => ({
    year: new Date(parseInt(d.Year, 10), 0, 1),
    population: parseInt(d['Population (historical estimates and future projections)'], 10)
  }))
  .sort((a, b) => a.year.getFullYear() - b.year.getFullYear());

const getX = (d: { year: Date; }) => d.year;
const getY = (d: { population: number; }) => d.population;

export default function PopulationScene() {
  const { theme } = useTheme();

  const width = 800;
  const height = 500;
  const margin = { top: 20, right: 30, bottom: 30, left: 40 };

  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  const xScale = useMemo(
    () =>
      scaleTime<number>({
        range: [0, xMax],
        domain: [new Date(-10000, 0, 1), new Date(2100, 0, 1)],
      }),
    [xMax],
  );

  const yScale = useMemo(
    () =>
      scaleLinear<number>({
        range: [yMax, 0],
        domain: [0, 11000000000],
        nice: true,
      }),
    [yMax],
  );

  return (
    <Html center>
      <svg width={width} height={height}>
        <rect x={0} y={0} width={width} height={height} fill="#111" />
        <GridRows scale={yScale} width={xMax} stroke="#888" strokeDasharray="2,2" />
        <GridColumns scale={xScale} height={yMax} stroke="#888" strokeDasharray="2,2" />
        <AreaClosed
          data={chartData}
          x={(d) => xScale(getX(d)) ?? 0}
          y={(d) => yScale(getY(d)) ?? 0}
          yScale={yScale}
          strokeWidth={1}
          stroke="url(#area-gradient)"
          fill="url(#area-gradient)"
          curve={curveMonotoneX}
        />
        <LinePath
          data={chartData}
          x={(d) => xScale(getX(d)) ?? 0}
          y={(d) => yScale(getY(d)) ?? 0}
          stroke="#fff"
          strokeWidth={2}
          curve={curveMonotoneX}
        />
        <AxisBottom top={yMax} scale={xScale} numTicks={width > 520 ? 10 : 5} />
        <AxisLeft scale={yScale} />
        <defs>
          <linearGradient id="area-gradient" from="#4c51bf" to="#4c51bf" toOpacity={0.1} />
        </defs>
      </svg>
    </Html>
  );
}