import React, {useState,useEffect} from "react";
import Thermometer from "react-thermometer-component";
import "../thermometer.css";

const ThermometerRender = (props) => {
  
  const [data, setData] = useState({
    date: "",
    temperaturec: "",
    temperaturef:""
  });

  useEffect(() =>{
    
    function tick(){

      const temp  = Math.round(Math.random() * 100);      
      setData({ date: new Date().toLocaleTimeString(),
                temperaturec : temp,
                temperaturef: temp * 72 });
      
      //Return data to parent (Section)
      props.handle(data);
              
    }
    
    const timerId = setInterval(() => tick(), 2000)

    return function cleanUp(){  
      clearInterval(timerId);
    }

  })
 
 
 
  // // componentDidMount() {
  //   this.timerId = setInterval(() => this.tick(), 1000);
  // }
  
  // componentWillUnmount() {
  //   clearInterval(this.timerId);
  // }

  // tick() {
  //   this.setState({
  //     temperature: Math.round(Math.random() * 100),
  //     date: new Date().toLocaleDateString,
  //   });
  // }
  
  
    return (
      <div className="jumbotron">
        <div className="row justify-content-center">
          <h6 className="display-4">Temperature</h6>
        </div>
        <div className="row justify-content-center margin-top">
          <Thermometer
            theme="dark"
            value={data.temperaturec}
            max="100"
            steps="3"
            format="°C"
            size="large"
            height="300"
          />
        </div>
      </div>
    );
  }
 

export default ThermometerRender;
