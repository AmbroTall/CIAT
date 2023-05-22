import React from "react";
import {
  XYPlot,
  LineSeries,
  HorizontalGridLines,
  VerticalGridLines,
  XAxis,
  YAxis,
  FlexibleWidthXYPlot,
} from "react-vis";
import "react-vis/dist/style.css";

const Chart = ({ data }) => {
  return (
    <FlexibleWidthXYPlot height={300}>
      <HorizontalGridLines />
      <VerticalGridLines />
      <XAxis title="X-Axis" />
      <YAxis title="Y-Axis" />
      <LineSeries data={data} />
    </FlexibleWidthXYPlot>
  );
};

export default Chart;
