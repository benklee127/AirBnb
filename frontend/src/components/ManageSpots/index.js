import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserSpotsThunk } from "../../store/spots";
import AllSpotsItem from "../AllSpotsItem";
import DeleteSpot from "../DeleteSpotModal";
import OpenModalButton from "../OpenModalButton";

function ManageSpots() {
    const dispatch = useDispatch();
    const userSpots = Object.values(useSelector(state => state.spots.allSpots));

    useEffect(() => {
        dispatch(getUserSpotsThunk())
    }, [dispatch]);

    console.log('users spots in component', userSpots);
    return (
        <div>
            <h2> Manage Spots Page</h2>
            <section>
                {userSpots.map((spot) => (
                    <div>
                        <AllSpotsItem spot={spot} />
                        <OpenModalButton
                            buttonText="Delete"
                            modalComponent={<DeleteSpot spot={spot} />}
                        />
                    </div>
                ))}

            </section>
        </div>
    );
}

export default ManageSpots;
