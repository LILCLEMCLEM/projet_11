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
      <FontAwesomeIcon
        icon={faChevronLeft}
        onClick={() =>
          updateIndex(index - 1 < 0 ? mediaList.length - 1 : index - 1)
        }
      />
      <img src={mediaList[index]} alt="img" className="img_preview"></img>
      <FontAwesomeIcon
        icon={faChevronRight}
        onClick={() =>
          updateIndex(index + 1 >= mediaList.length ? 0 : index + 1)
        }
      />
    </div>
  );
}

export default Media;
