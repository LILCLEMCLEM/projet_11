import Logement from "../data/logements.json";
import "../styles/components/LocationContainer.css";

function LocationCard() {
  return (
    <div className="container">
      {Logement.map((elem, index) => (
        <a
          key={index}
          href={`/logement?id=${elem.id}`}
          className="card_container"
        >
          <img src={elem.cover} alt={elem.id}></img>
          <p className="card_title">{elem.title}</p>
        </a>
      ))}
    </div>
  );
}

export default LocationCard;
