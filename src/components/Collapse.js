import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "../styles/components/Collapse.css";
function Collapse({ nom, children }) {
  const [open, SetOpen] = useState(false);

  return (
    <div className="depCon">
      {open === false ? (
        <div className="dep_container" onClick={() => SetOpen(true)}>
          <p className="dep_name">{nom}</p>
          <FontAwesomeIcon icon={faChevronUp} />
        </div>
      ) : (
        <div className="decP">
          <div className="dep_container" onClick={() => SetOpen(false)}>
            <p className="dep_name">{nom}</p>
            <FontAwesomeIcon icon={faChevronDown} />
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
