import React from "react";
import { Main, CardContainer } from "./styles";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const Card = ({ initialState }) => {
  const stateLength = initialState.length;
  let content = [];
  for (let index = 0; index < stateLength; index++) {
    let color;
    if (index === 0) color = "green";
    if (index === 1) color = "blue";
    if (index === 2) color = "orange";
    content.push(
      <CardContainer key={index + 1} color={color}>
        <section>
          <h1>{initialState[index].title}</h1>
          <h2>{initialState[index].amount}</h2>
          <AreaChart
            width={200}
            height={60}
            data={data}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
            <Area type="monotone" dataKey="uv" stroke={color} fill={color} />
          </AreaChart>
        </section>
        <section>
          <div>
            <h3>Tablet</h3>
            <h3>Smartphone</h3>
          </div>
          <div>
            <div>
              <p>{initialState[index].tabletPercent}</p>
              <p>{initialState[index].tabletAmount}</p>
            </div>
            <div>
              <p>{initialState[index].smartphonePercent}</p>
              <p>{initialState[index].smartphoneAmount}</p>
            </div>
          </div>
        </section>
      </CardContainer>
    );
  }
  return <Main>{content}</Main>;
};
