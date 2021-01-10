import {
   
    FETCH_SPOT_ERROR,
    FETCH_SPOT_LOADING,
    FETCH_SPOT_SUCCESS
} from '../actions/types'


const defaultState = {
    data : [],
    error : null,
    isLoading: false
}

const SpotReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_SPOT_LOADING : return {...state, isLoading: true };
        case FETCH_SPOT_SUCCESS : return {...state, isLoading: false, data: action.payload, error: '' };
        case FETCH_SPOT_ERROR : return { isLoading: false, data:[], error: action.payload};
       
        default : return state;
       

    }
}

export default SpotReducer;

