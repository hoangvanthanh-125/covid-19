import { Grid } from "@material-ui/core";
import React from "react";
import HighLightCard from "./HighLightCard";

function HightLight({ report }) {
  const data = report && report.length ? report[report.length - 1] : {};
  const sumary = [
    {
      title: "Số ca nhiễm",
      count: data.Confirmed,
      color: "red",
    },
    {
      title: "Khỏi",
      count: data.Recovered,
      type: "recovered",
      color: "green",
    },
    {
      title: "Tử vong",
      count: data.Deaths,
      type: "death",
      color: "gray",
    },
  ];
  return (
    <Grid style={{ marginTop: 30 }} container spacing={3}>
      {sumary.map((item) => (
        <Grid key={item.color} item sm={4} xs={12}>
          <HighLightCard
            color={item.color}
            title={item.title}
            count={item.count}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default HightLight;
