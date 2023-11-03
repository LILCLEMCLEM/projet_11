import { useState } from "react";
import "../styles/MediaPlayer.css";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Media({ source }) {
  let [index, updateIndex] = useState(0);
  const mediaList = source.map((element) => {
    return element;
  });
  return (
    <div className="preview_container">
      {mediaList.length > 1 ? (
        <FontAwesomeIcon
          icon={faChevronLeft}
          onClick={() =>
            updateIndex(index - 1 < 0 ? mediaList.length - 1 : index - 1)
          }
        />
      ) : null}

      <img src={mediaList[index]} alt="img" className="img_preview"></img>
      <p className="counter">
        {mediaList.length > 1 ? `${index + 1}/${mediaList.length}` : null}
      </p>
      {mediaList.length > 1 ? (
        <FontAwesomeIcon
          icon={faChevronRight}
          onClick={() =>
            updateIndex(index + 1 >= mediaList.length ? 0 : index + 1)
          }
        />
      ) : null}
    </div>
  );
}

export default Media;
