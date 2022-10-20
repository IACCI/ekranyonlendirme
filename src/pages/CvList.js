import React from "react";


function CvList () {
    return(
        
        <div className="container">
        <div className="col-12">
          <div className="list-group">
            <a className="list-group-item list-group-item-action" href="/AdminLogin/CvList/Cv1">ahmet can ceylan</a>
            <a className="list-group-item list-group-item-action" href="/AdminLogin/CvList/Cv2">mustafa ceylan</a>
            <a className="list-group-item list-group-item-action" href="/AdminLogin/CvList/Cv3">esra akar</a>
            <a className="list-group-item list-group-item-action" href="/AdminLogin/CvList/Cv4">busra guler</a>
          </div>
        </div>
      </div>
    )
}

export default CvList;