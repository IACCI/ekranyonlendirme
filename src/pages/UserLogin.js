import React from "react";
import { useNavigate } from "react-router-dom";

function UserLogin() {

let navigate = useNavigate();

    return (
        <div className="container">
        <form> 
        <h1 className="text-center">User Login </h1>
        <div>
        <label className="form-label">Username : </label>
        <input className="form-control"/>
        </div>
        <div>
        <label  className="form-label">Username Password : </label>
        <input className="form-control" type="password"/>
        </div>
        <p></p>
        <div className="text-center">
        <button onClick={() => {
        navigate("/UserLogin/Creatingcv");
    }}
        className="btn btn-outline-success btn-lg">
        OK</button>
        </div>
        </form>
        </div>
    
    )
}

export default UserLogin;