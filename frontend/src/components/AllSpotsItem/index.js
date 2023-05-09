import { useDispatch } from "react-redux";
import './AllSpotsItem.css'

function AllSpotsItem({ spot }) {

    // const dispatch = useDispatch();


    return (
        <li>
            <img src={spot.previewImage} />
            <h2>{spot.city}</h2>
            <h2>{spot.state}</h2>
            <h2>{spot.avgRating}</h2>
            <h2>{spot.price}</h2>
        </li>
    )
}

export default AllSpotsItem;
