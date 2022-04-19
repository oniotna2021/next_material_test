import * as React from "react";
import F1grid from "./components/f1grid";
import F2grid from "./components/f2grid";
import Navbar from "./components/navbar";
import Table from "./components/table";
import Spinners from "./components/spinners";
import Image from "./components/image"
import Acordion from "./components/accordion"
import Container from "./components/container"
import Step from './components/step'
import Ready from './components/ready'
import Container2 from './components/container2'

export default function Home() {

  return (
    <div>
      <h1 data-testid="container1">NextJS TRAINING</h1>
      <h2>Material Library</h2>
      <h3>Testing React Library</h3>

      <F1grid />

      <F2grid />

      <Navbar />
      
      <Table />

      <h1>SPINNERS</h1>
      <Spinners />

      <h1>IMAGE CONTAINER</h1>
      <Image />

      <h1>ACCORDIONS</h1>
      <Acordion />

      <h1>CONTAINER</h1>
      <Container />

      <Step />

      <h1>SNACK BAR FOR STATUS</h1>
      <Ready />

      <h1>CONTAINER 2</h1>
      <Container2 />

    </div>
  );
}

