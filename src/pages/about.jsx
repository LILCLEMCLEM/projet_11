import Header from "../components/Header";
import Depliants from "../components/depliants";
import "../styles/About.css";
import wide_image from "../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";
import WideImg from "../components/Wide_img";
import FootContent from "../components/FootContent";
function About() {
  return (
    <div className="About">
      <Header />
      <WideImg image_src={wide_image} type="1" />
      <Depliants
        nom="Fiabilité"
        detailSource="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
      régulièrement vérifiées par nos équipes."
      />
      <Depliants
        nom="Respect"
        detailSource="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
      perturbation du voisinage entraînera une exclusion de notre plateforme."
      />
      <Depliants
        nom="Service"
        detailSource="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
      perturbation du voisinage entraînera une exclusion de notre plateforme."
      />
      <Depliants
        nom="Sécurité"
        detailSource="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
      correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
      locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
      également des ateliers sur la sécurité domestique pour nos hôtes."
      />

      <FootContent />
    </div>
  );
}

export default About;
