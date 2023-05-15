import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpotThunk } from "../../store/spots";
import './Spots.css';
import { useParams } from "react-router-dom"
import { getReviewsThunk } from "../../store/reviews";
import Reviews from '../Reviews'
import ReviewForm from '../ReviewForm'
import OpenModalButton from "../OpenModalButton";

function SingleSpot() {
    const sessionUser = useSelector(state => state.session.user);
    const { spotId } = useParams();
    const spot = useSelector(state => state.spots.singleSpot);
    const reviews = useSelector(state => state.reviews.spot);
    console.log("hi from single spot", spot);

    const dispatch = useDispatch();


    useEffect(() => {
        console.log('single spot useeffect');
        dispatch(getSpotThunk(spotId));
        dispatch(getReviewsThunk(spotId));
    }, [dispatch]);

    let spotImageUrls = [];

    // console.log(spot.SpotImage.length);
    // for (let i = 0; i < spot.SpotImages.length; i++) {
    //     spotImageUrls.push(spot.SpotImages[i].url);
    // }

    for (let e in spot.SpotImages) {
        spotImageUrls.push(spot.SpotImages[e].url)
    }
    console.log('array: spoturlimg:', spotImageUrls);
    // console.log(spotImageUrls[0].url);
    // // spot.SpotImages.forEach(e => spotImageUrls.push(e[].url));
    // console.log("spotimages", spot.SpotImages.length);
    console.log('review info in singlespot', reviews);

    let reviewList = Object.values(reviews);
    console.log('reviews list', reviewList);
    console.log('session user', reviewList.find(review => review.userId === sessionUser.id));


    return (
        <section>
            {/* <h1>hi from single spot page</h1> */}
            {spotImageUrls.map(url => (
                <img src={url} className="preview-img"></img>
            ))}
            <h2 className='spot-name'>{spot.name}</h2>
            <h2 className='location'>{spot.city}, {spot.state}, {spot.country}</h2>
            <h3 className='desc'>{spot.description}</h3>
            <h2 className='price'>${spot.price} / night</h2>
            {/* <h2>images</h2> */}
            {/* <ul>
                {spotImageUrls.map(url => (
                    <li>{url}</li>
                ))}
            </ul> */}
            <h2>reviews</h2>

            <OpenModalButton
                buttonText="Create review"
                modalComponent={<ReviewForm spotId={spot.id}></ReviewForm>} />

            {/* <div>{reviewList.map(review => (
                <h3>{review.User.firstName}
                    {review.review}</h3>
            ))}</div> */}
            <Reviews reviews={reviewList} />


        </section>
    )
}

export default SingleSpot;
