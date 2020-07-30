import React, { useState } from "react";
import Table from "./Table";
import ThermometerRender from "./ThermometerRender";
import Formulario from "./Formulario";

const Section = (props) => {
  const [data, setData] = useState([]);

  function eliminar(index) {
    setData(
      data.filter((fila, i) => {
        return i !== index;
      })
    );
  }

  function handleSubmit(measure) {
    setData([...data, measure]);
  }

  return (
    <section>
      <div className="row justify-content-center" style={{marginTop:'50px'}}>
      <div className="col-lg-6" style={{margin:'10px'}}>
      <ThermometerRender handle={handleSubmit} /> 
      </div>
     
      <div className="jumbotron" style={{margin:'10px'}}>
        <div className="row justify-content-center " > 
      <h3>Logs</h3>
      <Table datos={data} eliminar={eliminar} />    
      </div>
      </div></div>
    </section>
  );
};

export default Section;
