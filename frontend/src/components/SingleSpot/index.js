import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpotThunk } from "../../store/spots";
import "./Spots.css";
import { useParams } from "react-router-dom";
import { getReviewsThunk } from "../../store/reviews";
import Reviews from "../Reviews";
import ReviewForm from "../ReviewForm";
import OpenModalButton from "../OpenModalButton";
import placeholderImg from "../../assets/tempimg.png";

function SingleSpot() {
  const sessionUser = useSelector((state) => state.session.user);
  const { spotId } = useParams();
  const spot = useSelector((state) => state.spots.singleSpot);
  const reviews = useSelector((state) => state.reviews.spot);
  const state = useSelector((state) => state);
  console.log("state in singlespot", state);
  console.log("hi from single spot", spot);

  const dispatch = useDispatch();

  useEffect(
    () => {
      console.log("single spot useeffect");
      dispatch(getSpotThunk(spotId));
      dispatch(getReviewsThunk(spotId));
    },
    dispatch
    // reviews
  );

  let spotImageUrls = [];

  // console.log(spot.SpotImage.length);
  // for (let i = 0; i < spot.SpotImages.length; i++) {
  //     spotImageUrls.push(spot.SpotImages[i].url);
  // }
  console.log("spotimages", spot.SpotImages);
  for (let e in spot.SpotImages) {
    spotImageUrls.push(spot.SpotImages[e].url);
  }
  let mainImg = spotImageUrls[0];

  let galleryImages = new Array(4).fill(placeholderImg);
  console.log("galleryimage place", galleryImages);
  for (let i = 1; i < 5; i++) {
    if (spotImageUrls[i]) galleryImages[i - 1] = spotImageUrls[i];
  }

  console.log("galleryimages", galleryImages);
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
  let ratingDisplay = spot.avgStarRating
    ? spot.avgStarRating.toFixed(1)
    : " New";

  return (
    <div className="single-spot-wrapper">
      <div className="spot-header">
        <h1>{spot.name}</h1>
        <p>
          {spot.city}, {spot.state}, {spot.country}
        </p>
      </div>
      <div className="spot-details">
        <div className="gallery">
          <img src={mainImg} className="main-img"></img>
          <div className="gallery-image-wrapper">
            {galleryImages.map((url) => (
              <img src={url} className="gallery-image"></img>
            ))}
          </div>
        </div>
        <div className="single-spot-info-box">
          <div className="name-desc-box">
            <h2>
              Hosted by {spot.Owner ? spot.Owner.firstName : "firstName"}
              {spot.Owner ? " " + spot.Owner.lastName : " lastName"}
            </h2>
            {console.log("spot in spot details", spot)}
            <p className="desc">{spot.description}</p>
          </div>
          <div className="callout-wrapper">
            <div className="callout-info">
              <div className="callout-price">
                <div className="callout-price-num">${spot.price}</div>
                &nbsp;night
              </div>
              <div className="callout-rating-review">
                <div className="callout-rating-num">
                  <i className="fa-solid fa-star"></i> {ratingDisplay}
                </div>
                {reviewList.length > 0 && (
                  <div className="callout-dot">&nbsp;·&nbsp;</div>
                )}
                <div>
                  {reviewList.length > 0 &&
                    "" +
                      reviewList.length +
                      " review" +
                      (reviewList.length > 1 ? "s" : "")}
                </div>
              </div>
            </div>
            <button onClick={() => alert("Feature coming soon.")}>
              Reserve
            </button>
          </div>
        </div>
      </div>

      <div className="review-section">
        <div className="review-summary">
          <h3>
            <i className="fa-solid fa-star"></i> {ratingDisplay}
          </h3>
          <h3>{reviewList.length > 0 && " · "}</h3>
          <h3>
            {reviewList.length > 0 &&
              "" +
                reviewList.length +
                " review" +
                (reviewList.length > 1 ? "s" : "")}
          </h3>
        </div>
        {sessionUser &&
          spot.Owner &&
          sessionUser.id !== spot.Owner.id &&
          !reviewList.find((review) => review.userId === sessionUser.id) && (
            <OpenModalButton
              buttonText="Post Your Review"
              modalComponent={<ReviewForm spotId={spot.id}></ReviewForm>}
            />
          )}

        {/* <div>{reviewList.map(review => (
                <h3>{review.User.firstName}
                    {review.review}</h3>
            ))}</div> */}
        <Reviews reviews={reviewList} spot={spot} sessionUser={sessionUser} />
      </div>
    </div>
  );
}

export default SingleSpot;
