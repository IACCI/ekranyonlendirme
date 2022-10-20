import React from "react";
import { useNavigate } from "react-router-dom";

function Creatingcv() {

let Navigate = useNavigate();

    return (
        <form className="row g-3">
            <div className="text-center">  
    <h1 style={{ color: 'green' }}> CREATE a CV <span className="badge bg-secondary"></span></h1>
    </div>
  <div className="col-md-6">
    <p></p>
    <label className="form-label">Name Surname</label>
    <input className="form-control"/>
  </div>
  <div className="col-md-6">
    <p></p>
    <label className="form-label">Phone Number</label>
    <input className="form-control"/>
  </div>
  <div className="col-12">
    <label className="form-label">Education Information</label>
    <textarea  className="form-control"/>
  </div>
  <div className="col-12">
    <label className="form-label">Experiance</label>
    <textarea className="form-control"/>
  </div>
  <div className="col-md-6">
    <label className="form-label">E-Mail</label>
    <input className="form-control"/>
  </div>
  <div className="col-md-4">
    <label className="form-label">Mail Address</label>
    <select className="form-select">
      <option selected>@gmail.com</option>
      <option>@hotmail.com</option>
      <option>@outlook.com</option>
      <option>@tein.com</option>
    </select>
  </div>
  <div className="container">
    <label className="form-label">Professional Knowledge and Skills</label>
    <textarea className="form-control"/>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" />
      <label className="form-check-label">    
      Verify Information
      </label>
    </div>
  </div>
  <div className="col-12">
    <div className="text-center">
    <button className="btn btn-outline-success btn-lg" onClick={() => {
        Navigate("/UserLogin/Creatingcv/Congratulations");
    }} href="/UserLogin/Creatingcv/Congratulations">SAVE</button>
  </div>
  </div>
</form>
    
    )
}
export default Creatingcv;
