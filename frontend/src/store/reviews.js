import { csrfFetch } from "./csrf";

const GET_REVIEWS = "reviews/getReviews";
const CREATE_REVIEW = "reviews/createReview";
const DELETE_REVIEW = "reviews/deleteReview";

const getReviewsAC = (reviews) => {
    return {
        type: GET_REVIEWS,
        payload: reviews
    }
}

const createReviewAC = (review) => {
    return {
        type: CREATE_REVIEW,
        payload: review
    }
}

const deleteReviewAC = (review) => {
    return {
        type: DELETE_REVIEW,
        payload: review
    }
}

export const deleteReviewThunk = (review) => async (dispatch) => {
    const res = await csrfFetch(`/api/reviews/${review}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    })

    if (res.ok) {
        dispatch(deleteReviewAC(review))
    }

}

export const createReviewThunk = ({ spotId, review }) => async (dispatch) => {
    console.log('spotId in create:', spotId);
    const res = await csrfFetch(`/api/spots/${spotId}/reviews`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(review),
    });

    if (res.ok) {
        const reviewObj = await res.json();
        dispatch(createReviewAC(reviewObj))
        return reviewObj;
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

const initialState = { spot: {}, user: {}};

const reviewReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_REVIEWS: {
            newState = { ...state, spot: {}, user: {} };
            console.log('get reviews case', action.payload);
            action.payload.forEach(review => newState.spot[review.id] = review)
            console.log('new state after reviews', newState);
            return newState;
        }
        case CREATE_REVIEW: {
            newState = { ...state, spot: { ...state.spot }, user: {} };
            newState.spot[action.payload.id] = action.payload;
            return newState;
        }
        case DELETE_REVIEW: {
            console.log('state',state);
            newState = { ...state };
            console.log('state spot reviews', newState);
            delete newState.spot[action.payload.id]
            console.log('state2', newState);
            return newState;
        }
        default:
            return state;
    }

}

export default reviewReducer;
