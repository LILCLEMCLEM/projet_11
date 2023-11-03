import Header from "../components/Header";
import data from "../data/logements.json";
import { Navigate, useSearchParams } from "react-router-dom";
import Media from "../components/MediaPlayer";
import "../styles/Logement.css";
import fetchData from "../utils/queryParams";
import LogementDesc from "../components/LogementDesc";
import FootContent from "../components/FootContent";

function Logement() {
  const [searchParams] = useSearchParams();
  let Logement_data = fetchData(data, searchParams.get("id"));
  console.log(Logement_data);
  return (
    <div>
      {Logement_data.length === 0 ? (
        <Navigate to="/Error" replace />
      ) : (
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
          <FootContent />
        </div>
      )}
    </div>
  );
}

export default Logement;
