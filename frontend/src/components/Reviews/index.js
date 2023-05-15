import { getReviewsThunk } from "../../store/reviews";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import OpenModalButton from "../OpenModalButton";
import DeleteReview from "../DeleteReview";

function Reviews({ reviews }) {
    const sessionUser = useSelector(state => state.sessionUser);
    console.log('reviews', reviews);

    if (reviews.length <= 0) {
        return (<></>);
    }

    return (
        <div>
            <h2>

            </h2>
            {reviews.map(review => (
                <div>
                    <h3>{review.User.firstName}</h3>
                    <h4>{review.review}</h4>
                    {sessionUser && sessionUser.id === review.userId && <OpenModalButton
                        buttonText="Delete"
                        modalComponent={<DeleteReview review={review} />}
                    />}
                </div>
            ))}
        </div>
    )
}

export default Reviews;
