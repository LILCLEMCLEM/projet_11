import Logement from "../data/logements.json";
import "../styles/LocationContainer.css";

function LocationContainer() {
  return (
    <div className="container">
      {Logement.map((elem) => (
        <a href={`/logement?id=${elem.id}`} className="card_container">
          <img src={elem.cover} alt={elem.id}></img>
          <p className="card_title">{elem.title}</p>
        </a>
      ))}
    </div>
  );
}

export default LocationContainer;
