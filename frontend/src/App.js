import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  PolarSeries,
  LineSeries,
  ScatterSeries,
  Category,
  DataLabel,
} from "@syncfusion/ej2-react-charts";
import React, { useState, useEffect } from "react";
import { sampleData2 } from "./data";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/app.scss";
import { Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import logo from "./images/logo.jpeg";
// import data

function App() {
  const [data, setData] = useState([]);
  const [active, setActive] = useState(false);
  const [update, setUpdate] = useState(false);
  const primaryxAxis = {
    title: "Month",
    minimum: 0,
    maximum: 360,
    startAngle: 90,
    valueType: "Double",
  };
  const primaryyAxis = {
    minimum: 0,
    maximum: 2.5,
    interval: 0.5,
  };
  useEffect(() => {}, [update]);
  const submitHandler = () => {
    const url = active
      ? "http://127.0.0.1:5000/"
      : "http://127.0.0.1:5000/chart";
    axios.get(url).then((response) => {
      console.log(response.data.data);
      const newData = response.data.data.map((e, idx) => ({
        x: (idx / response.data.data.length) * 360,
        y: e,
      }));
      console.log(newData);
      setData(newData);
    });
  };
  // useEffect(() => {}, [update]);
  // const submitHandler = () => {

  //   const url = active
  //     ? "http://127.0.0.1:5000/"
  //     : "http://127.0.0.1:5000/chart";
  //   axios.get(url).then((response) => {
  //     console.log(response.data.data);
  //     const newData = response.data.data.map((e, idx) => ({
  //       x: (idx / response.data.data.length) * 360,
  //       y: e,
  //     }));
  //     console.log(newData);
  //     setData(newData);
  //   });
  // };
  // let i = 0;
  // let t = 1;
  // newData.map(() => {
  //   setTimeout(() => {
  //     setData(newData.slice(0, i + 1));
  //     i = i + 1;
  //   }, t * 1000);
  //   t = t + 0.3;
  //   return data;
  // });
  return (
    <Row>
      <Col className="content" xs={6}>
        <h2 className="title">RPM 8000</h2>
        <a onClick={submitHandler} href="javascript:void(0);">
          Start
        </a>
        <a
          on
          onClick={() => {
            setUpdate(!update);
            setData([]);
          }}
          href="javascript:void(0);"
        >
          Reset
        </a>
      </Col>
      <Col xs={1}>
        <img src={logo} onClick={() => setActive(!active)} />
        {active ? <span style={{ fontSize: "8px" }}></span> : <span>.</span>}
      </Col>
      <Col className="chart" xs={5}>
        <ChartComponent primaryYAxis={primaryyAxis} primaryXAxis={primaryxAxis}>
          <Inject services={[PolarSeries, ScatterSeries, DataLabel]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              xName="x"
              yName="y"
              type="Polar"
              name="Department"
              drawType="Scatter"
              dataSource={data}
            ></SeriesDirective>
          </SeriesCollectionDirective>
        </ChartComponent>
      </Col>
    </Row>
  );
}

export default App;
