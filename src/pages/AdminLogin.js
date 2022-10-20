import React from "react";
import { useNavigate } from "react-router-dom";



function AdminLogin() {

    let navigate = useNavigate();

    return (
        <div className="container">
        <form> 
        <h1 className="text-center">Yönetici Girişi </h1>
        <div>
        <label className="form-floating">Yönetici Adı: </label>
        <input className="form-control"/>
        </div>
        <div>
        <label  className="form-label">Yönetici sifresi: </label>
        <input className="form-control" type="password"/>
        </div>
        <p></p>
        <div className="text-center">
        <button onClick={() => {
        navigate("/AdminLogin/CvList");
    }} href="/AdminLogin/CvList"
        className="btn btn-outline-success btn-lg">
       Giriş</button>
        </div>
        </form>
        </div>
    
    );
}

export default AdminLogin;