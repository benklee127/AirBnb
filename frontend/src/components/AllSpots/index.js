import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSpotsThunk } from "../../store/spots";
import './AllSpots.css';
import AllSpotsItem from "../AllSpotsItem";



function AllSpots() {
    const allSpots = Object.values(useSelector(state => state.spots.allSpots));
    console.log(allSpots);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllSpotsThunk())
    }, [dispatch]);

    return (
        <section>
            {allSpots.map((spot) => (
                <AllSpotsItem spot={spot} />
            ))}
        </section>
    )
}

export default AllSpots;
