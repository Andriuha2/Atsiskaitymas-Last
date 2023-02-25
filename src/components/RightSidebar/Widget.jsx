import React from "react";
import "./RightSidebar.css";
import comment from "../../assets/message-solid.svg";
import pen from "../../assets/pen-solid.svg";
import blackLogo from "../../assets/stackoverflow-16.png";

const Widget = () => {
  return (
    <div className="widget">
      <h4>The overflow blog</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width="18" />
          <p>
            Shorten the distance between production data and insight (Ep. 541)
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width="18" />
          <p>
            Shorten the distance between production data and insight (Ep. 541)
          </p>
        </div>
      </div>
      <h4>Featured on Meta</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={comment} alt="comment" width="18" />
          <p>
            Shorten the distance between production data and insight (Ep. 541)
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={comment} alt="comment" width="18" />
          <p>
            Shorten the distance between production data and insight (Ep. 541)
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={blackLogo} alt="blackLogo" width="18" />
          <p>
            Shorten the distance between production data and insight (Ep. 541)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Widget;
