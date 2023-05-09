import { csrfFetch } from "./csrf";


const GET_ALLSPOTS = "spots/getAllSpots";


//action creator for AllSpots
const getAllSpotsAC = (spots) => {
    return {
        type: GET_ALLSPOTS,
        payload: spots,
    }
}

export const getAllSpotsThunk = () => async (dispatch) => {
    const res = await csrfFetch("/api/spots");

    const spots = await res.json();
    dispatch(getAllSpotsAC(spots));
}

const initialState = { allSpots: {} }

const spotReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_ALLSPOTS: {
            newState = { ...state }
            newState.allSpots = action.payload;
            return newState;
        }
        default:
            return state;
    }
}

export default spotReducer;
