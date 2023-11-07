import Header from "../components/Header";
import WideImg from "../components/Wide_img";
import img from "../assets/IMG.png";
import LocationCard from "../components/LocationContainer";
import FootContent from "../components/FootContent";
function App() {
  return (
    <div>
      <Header />
      <WideImg image_src={img} text="Chez vous partout et ailleurs" type="1" />
      <LocationCard />
      <FootContent />
    </div>
  );
}

export default App;
