import { deleteReviewThunk } from "../../store/reviews";
import { getSpotThunk } from "../../store/spots";
import { useModal } from "../../context/Modal";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function DeleteReview({ review }) {
    const dispatch = useDispatch();
    const { closeModal } = useModal();
    console.log('review in delete', review);
    const handleDelete = (e) => {
        e.preventDefault();
        return dispatch(deleteReviewThunk(review))
            .then(closeModal);
    }
    console.log('delete review', review);

    
    return (
        <>
            <h1>Confirm Delete</h1>
            <h2>Are you sure you'd like to delete this review?</h2>
            <button onClick={handleDelete}>Yes (Delete)</button>
            <button onClick={closeModal}>No</button>
        </>
    )

}

export default DeleteReview;
