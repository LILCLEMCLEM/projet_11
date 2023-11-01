import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StarRating = ({ rating }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <div>
            <FontAwesomeIcon
              key={index}
              className={index <= rating ? "star-on" : "star-off"}
              icon={faStar}
            />
          </div>
        );
      })}
    </div>
  );
};
export default StarRating;
