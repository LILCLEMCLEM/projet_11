import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "../styles/depliants.css";
function Depliants({ nom, detailSource }) {
  let [Open, UpdateOpen] = useState(0);

  return (
    <div className="depCon">
      {Open === 0 ? (
        <div className="dep_container">
          <p className="dep_name">{nom}</p>
          <FontAwesomeIcon
            icon={faChevronUp}
            onClick={() => UpdateOpen(Open + 1)}
          />
        </div>
      ) : (
        <div className="decP">
          <div className="dep_container">
            <p className="dep_name">{nom}</p>
            <FontAwesomeIcon
              icon={faChevronDown}
              onClick={() => UpdateOpen(Open - 1)}
            />
          </div>
          <div className="dep_detailed">
            <div className="equipment_container">
              {typeof detailSource === "object" ? (
                detailSource.map((item) => (
                  <p className="equipments_list">{item}</p>
                ))
              ) : (
                <p>{detailSource}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Depliants;
