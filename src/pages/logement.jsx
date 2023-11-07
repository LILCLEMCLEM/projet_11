import Header from "../components/Header";
import data from "../data/logements.json";
import { Navigate, useSearchParams } from "react-router-dom";
import SlideShow from "../components/SlideShow";
import "../styles/Logement.css";
import fetchData from "../utils/queryParams";
import LogementDesc from "../components/LogementDesc";
import FootContent from "../components/FootContent";

function Logement() {
  const [searchParams] = useSearchParams();
  let Logement_data = fetchData(data, searchParams.get("id"));
  return (
    <div>
      {Logement_data.length === 0 ? (
        <Navigate to="/Error" replace />
      ) : (
        <div>
          <Header />
          <div>
            {Logement_data.map((items, index) => (
              <SlideShow key={index} source={items.pictures} />
            ))}
            {Logement_data.map((items, index) => (
              <LogementDesc key={index} source={items} />
            ))}
          </div>
          <FootContent />
        </div>
      )}
    </div>
  );
}

export default Logement;
