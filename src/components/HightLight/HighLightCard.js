import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";

function HighLightCard({ title, count = 0, color }) {
  return (
    <Card style={{ borderLeft: `5px solid ${color}` }}>
      <CardContent>
        <Typography component="p" variant="body2">
          {title}
        </Typography>
        <Typography
          style={{ fontWeight: "bold" }}
          component="span"
          variant="body2"
        >
          {count}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default HighLightCard;
