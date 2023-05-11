import { useDispatch } from "react-redux";
import { deleteSpotThunk } from "../../store/spots";
import { useModal } from "../../context/Modal";


function DeleteSpot({ spot }) {
    const dispatch = useDispatch();
    const { closeModal } = useModal();

    const handleDelete = (e) => {
        e.preventDefault();
        return dispatch(deleteSpotThunk(spot.id)).then(closeModal);
    }
    console.log("delete spot", spot.id);

    return (
        <>
            <h1>Confirm Delete</h1>
            <h2>Are you sure you'd like to delete this spot: {spot.name} spot id{spot.id}</h2>
            <button onClick={handleDelete}>Yes (Delete)</button>
            <button onClick={closeModal}>No</button>
        </>
    )
}

export default DeleteSpot;
