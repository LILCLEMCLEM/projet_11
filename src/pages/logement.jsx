import Header from "../components/Header";
import data from "../data/logements.json";
import { useSearchParams } from "react-router-dom";
import Media from "../components/MediaPlayer";
import "../styles/Logement.css";
import fetchData from "../utils/queryParams";
import LogementDesc from "../components/LogementDesc";

function Logement() {
  const [searchParams] = useSearchParams();
  let Logement_data = fetchData(data, searchParams.get("id"));

  return (
    <div>
      <Header />
      <div>
        {Logement_data.map((items) => (
          <Media source={items.pictures} />
        ))}
        {Logement_data.map((items) => (
          <LogementDesc source={items} />
        ))}
      </div>
    </div>
  );
}

export default Logement;
