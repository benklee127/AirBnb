import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { useState } from "react";
import { createReviewThunk, getReviewsThunk } from "../../store/reviews";
import "./ReviewForm.css";
import { startTransition } from "react";
import { getSpotThunk } from "../../store/spots";

function ReviewForm(spot) {
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const [text, setText] = useState("");
  const [stars, setStars] = useState(0);
  const [curr, setCurr] = useState(stars);
  const [errorsArr, setErrorsArr] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorsArr([]);
    let newErrors = [];

    if (text.length < 6) {
      newErrors = [...newErrors, "Review must be at least 6 characters long."];
      setErrorsArr(newErrors);
    }
    if (stars < 1) {
      newErrors.push("Must select a Star rating.");
      setErrorsArr(newErrors);
    }

    if (newErrors.length > 0) {
      return;
    } else {
      const review = {
        review: text,
        stars: stars,
      };
      console.log("spot in review form", spot.spotId);
      let spotId = spot.spotId;

      return dispatch(createReviewThunk({ spotId, review }))
        .then(dispatch(getReviewsThunk(spotId)))
        .then(dispatch(getSpotThunk(spotId)))
        .then(closeModal);
    }
  };

  return (
    <div className="review-modal">
      <form onSubmit={handleSubmit} className="review-form">
        <div className="review-header">How was your stay?</div>
        {errorsArr.map((err) => (
          <div className="err-msg">{err}</div>
        ))}
        <textarea
          placeholder="Leave your review here"
          autoFocus={true}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="star-rating">
          <div
            className={curr >= 1 ? "filled" : "empty"}
            onMouseEnter={() => setCurr(1)}
            onMouseLeave={() => setCurr(stars)}
            onClick={() => setStars(1)}
          >
            <i className="fa-solid fa-star"></i>
          </div>
          <div
            className={curr >= 2 ? "filled" : "empty"}
            onMouseEnter={() => setCurr(2)}
            onMouseLeave={() => setCurr(stars)}
            onClick={() => setStars(2)}
          >
            <i className="fa-solid fa-star"></i>
          </div>
          <div
            className={curr >= 3 ? "filled" : "empty"}
            onMouseEnter={() => setCurr(3)}
            onMouseLeave={() => setCurr(stars)}
            onClick={() => setStars(3)}
          >
            <i className="fa-solid fa-star"></i>
          </div>
          <div
            className={curr >= 4 ? "filled" : "empty"}
            onMouseEnter={() => setCurr(4)}
            onMouseLeave={() => setCurr(stars)}
            onClick={() => setStars(4)}
          >
            <i className="fa-solid fa-star"></i>
          </div>
          <div
            className={curr >= 5 ? "filled" : "empty"}
            onMouseEnter={() => setCurr(5)}
            onMouseLeave={() => setCurr(stars)}
            onClick={() => setStars(5)}
          >
            <i className="fa-solid fa-star"></i>
          </div>
        </div>
        <button>Submit Your Review</button>
      </form>
    </div>
  );
}

export default ReviewForm;
