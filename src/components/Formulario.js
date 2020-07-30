import React, { useState } from "react";

function Formulario(props) {
  
  const [data, setData] = useState({
    date: "",
    temperaturec: "",
    temperaturef:""
  });

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.measure(data)
  }

  return (
    <form onSubmit={handleSubmit} style={{maxWidth:'500px',margin:'50px'}}>
      <div className="form-group">
        <div className="form-group row">
          <legend>Form!</legend>
          <input
            className="form-control"
            type="date"
            placeholder="Date"
            value={data.date}
            name="date"
            onChange={handleChange}
          ></input>
          <input
            type="text"
            className="form-control"
            placeholder="Temperature ºC"
            value={data.temperaturec}
            name="temperaturec"
            onChange={handleChange}
          ></input>
          <input
            type="text"
            className="form-control"
            placeholder="Temperature ºF"
            value={data.temperaturef}
            name="temperaturef"
            onChange={handleChange}
          ></input>
          <input className="btn btn-secondary" type="submit" value="Submit" />
        </div>
      </div>
    </form>
  );
}

export default Formulario;
