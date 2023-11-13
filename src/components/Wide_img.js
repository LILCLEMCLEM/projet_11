import "../styles/components/Wide_img.css";

function WideImg({ image_src, text, type }) {
  return (
    <div className="imgC">
      {type === "1" ? (
        <img src={image_src} alt="wide comp" className="img_container" />
      ) : (
        <img src={image_src} alt="wide comp" className="img_container_h"></img>
      )}

      {(text !== "") || (window.innerWidth > 720) ? (
        <p className="img_text">{text}</p>
      ) : (
        <p className="img_text">
          Chez vous
          <br /> partout et ailleurs
        </p>
      )}
    </div>
  );
}

export default WideImg;
