import { csrfFetch } from "./csrf";


const GET_ALLSPOTS = "spots/getAllSpots";
const GET_SPOT = "spots/getSpot";

//action creator for AllSpots
const getAllSpotsAC = (spots) => {
    return {
        type: GET_ALLSPOTS,
        payload: spots,
    }
}

//ac for single spot
const getSpotAC = (spot) => {
    return {
        type: GET_SPOT,
        payload: spot,
    }
}

export const getSpotThunk = (spotId) => async (dispatch) => {
    const res = await csrfFetch(`/api/spots/${spotId}`);
    console.log('hi from spot  thunk');
    const spot = await res.json();
    dispatch(getSpotAC(spot));
}

export const getAllSpotsThunk = () => async (dispatch) => {
    const res = await csrfFetch("/api/spots");
    const spots = await res.json();
    const allSpotsObj = {};
    spots.forEach(spot => allSpotsObj[spot.id] = spot);
    console.log(allSpotsObj);
    dispatch(getAllSpotsAC(allSpotsObj));
}

const initialState = { allSpots: {}, singleSpot: {} }

const spotReducer = (state = initialState, action) => {
    console.log("Action: ", action);
    console.log('Spot reducer running');
    let newState;
    switch (action.type) {
        case GET_ALLSPOTS: {
            console.log("get all spots case")
            newState = { ...state }
            newState.allSpots = action.payload;
            return newState;
        }
        case GET_SPOT: {
            console.log("get spot case");
            newState = { ...state };
            newState.singleSpot = action.payload;
            return newState;
        }
        default:
            console.log("default case")
            return state;
    }
}

export default spotReducer;
