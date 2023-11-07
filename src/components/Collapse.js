import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "../styles/Collapse.css";
function Collapse({ nom, children }) {
  const [open, SetOpen] = useState(false);

  return (
    <div className="depCon">
      {open === false ? (
        <div className="dep_container">
          <p className="dep_name">{nom}</p>
          <FontAwesomeIcon icon={faChevronUp} onClick={() => SetOpen(true)} />
        </div>
      ) : (
        <div className="decP">
          <div className="dep_container">
            <p className="dep_name">{nom}</p>
            <FontAwesomeIcon
              icon={faChevronDown}
              onClick={() => SetOpen(false)}
            />
          </div>
          <div className="dep_detailed">
            <div className="equipment_container">{children}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Collapse;
