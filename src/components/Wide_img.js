import "../styles/Wide_img.css";

function WideImg({ image_src, text, type }) {
  return (
    <div className="imgC">
      {type === "1" ? (
        <img src={image_src} alt="wide comp" className="img_container" />
      ) : (
        <img src={image_src} alt="wide comp" className="img_container_h"></img>
      )}

      {text !== "" ? <p className="img_text">{text}</p> : null}
    </div>
  );
}

export default WideImg;
