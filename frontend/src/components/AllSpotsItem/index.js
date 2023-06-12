import { useDispatch } from "react-redux";
import "./AllSpotsItem.css";
import { NavLink } from "react-router-dom";

import tempimg from "../../assets/tempimg.png";

function AllSpotsItem({ spot }) {
  // const dispatch = useDispatch();
  console.log("spot  from all spots item", spot);

  let priceDisplay = Math.round(spot.price);

  let rating = Math.round(Number(spot.avgRating) * 10) / 10;
  let ratingDisplay = rating.toFixed(1);
  // console.log('rdisplay', ratingDisplay);
  if (ratingDisplay == 0) {
    // console.log('rating', ratingDisplay);
    // console.log('no reviews yet');
    ratingDisplay = "new";
  } else {
    // ratingDisplay = (Number(ratingDisplay)).toFixed(1);
  }

  return (
    <div title={spot.name} className="spot-item">
      <NavLink className="spot-item-link" exact to={`/spots/${spot.id}`}>
        {/* <h1>{spot.name}</h1> */}
        <img
          alt={spot.name}
          src={
            spot.previewImage === "No preview image found"
              ? tempimg
              : spot.previewImage
          }
        />
        {/* <img src={tempimg}></img> */}
        {/* {spot.previewImage} */}
        <div className="spot-info">
          <div className="spot-info-row1">
            <h3>
              {spot.city},{spot.state}
            </h3>
            <h3>
              <i class="fa-solid fa-star"></i>
              {ratingDisplay}
            </h3>
          </div>
          <h4>
            <strong>${priceDisplay}</strong> night
          </h4>
        </div>
      </NavLink>
    </div>
  );
}

export default AllSpotsItem;
