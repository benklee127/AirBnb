import { useDispatch } from "react-redux";
import './AllSpotsItem.css'
import { NavLink } from "react-router-dom";

function AllSpotsItem({ spot }) {

    // const dispatch = useDispatch();
    console.log("spot  from all spots item", spot);

    let priceDisplay = Math.round(spot.price);
    let ratingDisplay = Math.round(spot.avgRating * 10) / 10;

    return (
        <div className="spot-item">
            <NavLink className="spot-item-link" exact to={`/spots/${spot.id}`}>
                {/* <h1>{spot.name}</h1> */}
                <img src={spot.previewImage} />
                <div className="spot-info">
                    <div>
                        <h3>{spot.city},{spot.state}<i class="fa-solid fa-star"></i>{ratingDisplay}</h3>
                        <h3>${priceDisplay} / night</h3>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default AllSpotsItem;
