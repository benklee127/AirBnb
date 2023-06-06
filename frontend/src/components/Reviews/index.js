import { getReviewsThunk } from "../../store/reviews";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import OpenModalButton from "../OpenModalButton";
import DeleteReview from "../DeleteReview";

function Reviews({ reviews, spot, sessionUser }) {
    // const sessionUser = useSelector(state => state.sessionUser);
    console.log('session user1', sessionUser);
    // console.log('reviews', reviews);
    const reviewsObj = useSelector(state => state.reviews.spot);
    let reviewList = Object.values(reviewsObj);
    const dispatch = useDispatch()
    console.log('');
    const monthNames = ['January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


    useEffect(() => {
        dispatch(getReviewsThunk(spot.id))
    }, [dispatch
    ])
    // if (reviewList.length <= 0) {
    //     return (<></>);
    // }
    // let reverseRevList = reviewList.reverse();
    // reviewList = reviewList.reverse();

    console.log('rev added', reviewList.reverse());
    console.log('sessionuser', sessionUser);


    return (
        <div>
            <h2>

            </h2>
            {reviewList.length == 0 && <>Be the first to post a review</>}
            {reviewList.length > 0 && reviewList.map(review => {
                const revMonth = monthNames[parseInt(review.createdAt.substring(5,7))];
                const revYear = review.createdAt.substring(0,4);
                // console.log('review month & year', revMonth, revYear);
                return(
                <div>
                    {/* {console.log('printing review', review)} */}
                    <h3>{review.User && review.User.firstName}</h3>
                    <h4>{}</h4>
                    <h4>{review.review}</h4>
                    {/* <h4>{review.createdAt}</h4> */}
                    <h4>{revMonth} {revYear}</h4>
                    {/* <h2>{review.userId}</h2> */}
                    {/* <h2>{sessionUser}</h2> */}

                    {sessionUser && sessionUser.id == review.userId && < OpenModalButton
                        buttonText="Delete"
                        modalComponent={<DeleteReview review={review.id} />}
                    />}
                </div>
                )
                })}
        </div>
    )
}

export default Reviews;
