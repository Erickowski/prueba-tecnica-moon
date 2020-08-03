import React from "react";
import { Card } from "./components/Card/Card";

const initialState = [
  {
    title: "Revenue",
    amount: "200.000 €",
    tabletPercent: "60%",
    tabletAmount: "120.000 €",
    smartphonePercent: "40%",
    smartphoneAmount: "80.000 €",
  },
  {
    title: "Impresions",
    amount: "50.000.000",
    tabletPercent: "40%",
    tabletAmount: "20.000.000",
    smartphonePercent: "60%",
    smartphoneAmount: "30.000.000",
  },
  {
    title: "Visits",
    amount: "600.000.000",
    tabletPercent: "80%",
    tabletAmount: "480.000.000",
    smartphonePercent: "20%",
    smartphoneAmount: "120.000.000",
  },
];

export const App = () => {
  return <Card initialState={initialState} />;
};
