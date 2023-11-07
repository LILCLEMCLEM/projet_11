import Collapse from "./Collapse";
import StarRating from "./starring";

function LogementDesc({ source }) {
  return (
    <div>
      <div className="desc_container">
        <div className="title_container">
          <p className="desc_title">{source.title}</p>
          <p className="desc_location">{source.location}</p>
          <div className="desc_tags">
            {source.tags.map((items, index) => (
              <p key={index}>{items}</p>
            ))}
          </div>
        </div>
        <div className="desc_user">
          <div className="user_info">
            <p className="desc_name">{source.host.name}</p>
            <img src={source.host.picture} alt="user"></img>
          </div>
          <div className="desc_star">
            <StarRating rating={source.rating} />
          </div>
        </div>
      </div>
      <div className="desc_foot">
        <Collapse nom="Description">
          <p>{source.description}</p>
        </Collapse>
        <Collapse nom="Equipements">
          <ul className="equipments_list">
            {source.equipments.map((item, index) => (
              <li className="equipments_item" key={index}>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}

export default LogementDesc;
