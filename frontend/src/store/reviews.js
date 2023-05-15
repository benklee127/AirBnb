import { csrfFetch } from "./csrf";

const GET_REVIEWS = "reviews/getReviews";

const getReviewsAC = (reviews) => {
    return {
        type: GET_REVIEWS,
        payload: reviews
    }
}

export const getReviewsThunk = (spotId) => async (dispatch) => {
    console.log('called get reviews');
    const res = await csrfFetch(`/api/spots/${spotId}/reviews`);

    if (res.ok) {
        const reviews = (await res.json()).Reviews;
        console.log('reviews', reviews);
        dispatch(getReviewsAC(reviews));
        return reviews;
    }
}

const initialState = { spot: {}, user: {} };

const reviewReducer = (state = initialState, action) => {
    let newState = { ...state, spot: {}, user: {} };;

    switch (action.type) {
        case GET_REVIEWS: {
            console.log('get reviews case', action.payload);
            action.payload.forEach(review => newState.spot[review.id] = review)
            console.log('new state after reviews', newState);
            return newState;
        }
        default:
            return state;
    }

}

export default reviewReducer;
