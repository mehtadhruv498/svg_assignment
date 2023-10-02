import { useState } from 'react'
import './App.css'
import MyCanvas from './components/one'
import CircleWithInput from './components/two'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/navbar';
import SvgWithEvents from './components/three';
import AnimatedShape from './components/four';
import MouseCoordinatesTracker from './components/five';
import CurvePath from './components/six';
import BasicLayout from './components/layout';

function App() {

  return (
    <>
      <CircleWithInput />
      <MyCanvas circleX={100} circleY={100} rectX={200} rectY={150} />
      <SvgWithEvents />
      <AnimatedShape />
      <MouseCoordinatesTracker />
      <CurvePath />
      <BasicLayout /> 
    </>
  )
}

export default App
