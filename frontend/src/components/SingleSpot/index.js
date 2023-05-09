import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpotThunk } from "../../store/spots";
import './Spots.css';
import { useParams } from "react-router-dom"

function SingleSpot() {
    const { spotId } = useParams();
    const spot = useSelector(state => state.spots.singleSpot);
    console.log("hi from single spot", spot);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSpotThunk(spotId))
    }, [dispatch]);

    console.log("spotimages", spot.SpotImages);
    return (
        <section>
            <h1>hi from single spot page</h1>
            <h2>{spot.name}</h2>
            <h2>{spot.city}, {spot.state}, {spot.country}</h2>
            <h3>{spot.description}</h3>
            <h2>{spot.price}</h2>
            <h2>images</h2>
            <ul>
                {spot.SpotImages.map((imgobj) => (
                    <li>{imgobj.url}</li>
                ))}
            </ul>
            <h2>reviews</h2>

        </section>
    )
}

export default SingleSpot;
