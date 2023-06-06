import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { useState } from "react";
import { createReviewThunk, getReviewsThunk } from "../../store/reviews";
import './ReviewForm.css'
import { startTransition } from "react";

function ReviewForm(spot) {
    const dispatch = useDispatch();
    const { closeModal } = useModal();

    const [text, setText] = useState("");
    const [stars, setStars] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const review = {
            review: text,
            stars: stars
        }
        console.log('spot in review form', spot.spotId);
        let spotId = spot.spotId;

        return dispatch(createReviewThunk({ spotId, review })).then(dispatch(getReviewsThunk(spotId))).then(closeModal);

    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>How was your stay?</h2>
            <textarea
                placeholder="Leave your review here"
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <div className="star-rating">
                <div className={stars >= 1 ? "filled" : "empty"}
                onMouseEnter={()=> setStars(1)} onMouseLeave={()=> setStars(stars)} onClick={() => setStars(1)}>
                    {stars > 1 ? <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i>}
                </div>
                <div className={stars >= 2 ? "filled" : "empty"}
                 onMouseEnter={()=> setStars(2)} onMouseLeave={()=> setStars(stars)} onClick={() => setStars(2)}>
                    {stars > 1 ? <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i>}
                </div>
                <div className={stars >= 3 ? "filled" : "empty"}
                onMouseEnter={()=> setStars(3)} onMouseLeave={()=> setStars(stars)} onClick={() => setStars(3)}>
                    {stars > 1 ? <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i>}
                </div>
                <div className={stars >= 4 ? "filled" : "empty"}
                onMouseEnter={()=> setStars(4)} onMouseLeave={()=> setStars(stars)} onClick={() => setStars(4)}>
                    {stars > 1 ? <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i>}
                </div>
                <div className={stars >= 5 ? "filled" : "empty"}
                onMouseEnter={()=> setStars(5)} onMouseLeave={()=> setStars(stars)} onClick={() => setStars(5)}>
                    {stars > 1 ? <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i>}
                </div>
            </div>
            <button>Submit</button>
        </form>
    )

}

export default ReviewForm;
