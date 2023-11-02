import Depliants from "./depliants";
import StarRating from "./starring";

function LogementDesc({ source }) {
  return (
    <div>
      <div className="desc_container">
        <div className="title_container">
          <p className="desc_title">{source.title}</p>
          <p className="desc_location">{source.location}</p>
          <div className="desc_tags">
            {source.tags.map((items) => (
              <p>{items}</p>
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
        <Depliants nom="Description" detailSource={source.description} />
        <Depliants nom="Equipements" detailSource={source.equipments} />
      </div>
    </div>
  );
}

export default LogementDesc;
