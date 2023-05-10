import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserSpotsThunk } from "../../store/spots";
import AllSpotsItem from "../AllSpotsItem";

function ManageSpots() {
    const dispatch = useDispatch();
    const userSpots = Object.values(useSelector(state => state.spots.allSpots));

    useEffect(() => {
        dispatch(getUserSpotsThunk())
    }, [dispatch]);

    console.log('users spots in component', userSpots);
    return (
        <div>
            Manage Spots Page
            <section>
                {userSpots.map((spot) => (
                    <AllSpotsItem spot={spot} />
                ))}

            </section>
        </div>
    );
}

export default ManageSpots;
