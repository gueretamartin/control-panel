import React from "react";
import Thermometer from "react-thermometer-component";
import '../thermometer.css'

class ThermometerRender extends React.Component {
  render(){
    return (
    <div class="jumbotron">
    <div class="row justify-content-center">
      <h6 class="display-4">Temperature</h6>
      </div>
      <div class="row justify-content-center margin-top"> 
      <Thermometer
        theme="dark"
        value="50"
        max="100"
        steps="3"
        format="°C"
        size="large"
        height="300" 
      /> 
    </div>
    </div>
  )};
};

export default ThermometerRender;
