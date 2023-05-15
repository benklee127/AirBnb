import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { useState } from "react";
import { createReviewThunk } from "../../store/reviews";


function ReviewForm(spot) {
    const dispatch = useDispatch();
    const { closeModal } = useModal();

    const [text, setText] = useState("");
    const [stars, setStars] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const review = {
            review: text,
            stars: 4
        }
        console.log('spot in review form', spot.spotId);
        let spotId = spot.spotId;
        return dispatch(createReviewThunk({ spotId, review })).then(closeModal);

    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>How was your stay?</h2>
            <textarea
                placeholder="Leave your review here"
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button>Submit</button>
        </form>
    )

}

export default ReviewForm;
