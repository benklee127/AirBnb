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
    console.log('spotimages', spot.SpotImages);
    for (let e in spot.SpotImages) {
        spotImageUrls.push(spot.SpotImages[e].url)
    }
    let mainImg = spotImageUrls[0];
    // console.log('main img', mainImg);
    // console.log('array: spoturlimg:', spotImageUrls);
    // // console.log(spotImageUrls[0].url);
    // // // spot.SpotImages.forEach(e => spotImageUrls.push(e[].url));
    // // console.log("spotimages", spot.SpotImages.length);
    // console.log('review info in singlespot', reviews);

    let reviewList = Object.values(reviews);
    // console.log('reviews list', reviewList);
    // console.log('session user', reviewList.find(review => review.userId === sessionUser.id));
    // console.log('session user', sessionUser.id);
    // console.log('spot.Owner', spot.Owner && spot.Owner.firstName);

    return (
        <div>
            <div className="spot-section">
                < div className="gallery" >
                    <img src={mainImg} className="main-img"></img>
                    <div>{
                        spotImageUrls.map(url => (
                            <img src={url} className="preview-img"></img>
                        ))
                    }
                    </div>

                </div >
                <div className="single-spot-info-box">
                    <div className="name-desc-box">
                        <h2>Hosted by firstName</h2>

                        <h3 className='desc'>{spot.description}</h3>
                    </div>
                    <div>
                        <h2 className='price'>${spot.price} / night</h2>
                    </div>
                </div>
            </div>

            <div className='review-section'>
                <div>
                    {
                        sessionUser && spot.Owner && sessionUser.id !== spot.Owner.id && !reviewList.find(review => review.userId === sessionUser.id) && <OpenModalButton
                            buttonText="Create review"
                            modalComponent={<ReviewForm spotId={spot.id}></ReviewForm>} />
                    }

                    {/* <div>{reviewList.map(review => (
                <h3>{review.User.firstName}
                    {review.review}</h3>
            ))}</div> */}
                    <Reviews reviews={reviewList} spot={spot} sessionUser={sessionUser} />


                </div >
            </div>
        </div>
    )
}

export default SingleSpot;
