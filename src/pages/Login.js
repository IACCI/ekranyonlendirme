import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {

let navigate = useNavigate();

    return (
        <div className="container">
    <form>
    <p></p>
        <h1 className="text-center"> Select Entry !</h1>
        <p></p>
   <div className="text-center">
    <><button className="btn btn-outline-success btn-lg" onClick={() => {
        navigate("/UserLogin");
    }}  href="/UserLogin"> User Login </button>
    <p></p>
    <button className="btn btn-outline-success btn-lg" onClick={() => {
        navigate("/AdminLogin");
    }} href="/AdminLogin"> Admin Login </button></>
    <p className="mt-5 mb-3 text-muted"> © 2022</p>
    </div>
    </form>
    </div>
    );
}
export default Login;