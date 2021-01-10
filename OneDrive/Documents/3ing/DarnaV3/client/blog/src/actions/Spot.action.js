

import axios from 'axios'



import {
   
    FETCH_SPOT_ERROR,
    FETCH_SPOT_LOADING,
    FETCH_SPOT_SUCCESS,
   
} from './types'



export const fetechSpotSuccess =  about => {
    return {
        type : FETCH_SPOT_SUCCESS,
        payload : about
        
    }
}
export const fetechSpotLoading = () => {
    return {
        type : FETCH_SPOT_LOADING,
    }
}
export const fetechSpotError = error => {
    return {
        type : FETCH_SPOT_ERROR,
        payload : error,
    }
}



export const fetchAbout = () => {
   
    return (dispatch) => {
        dispatch(fetechSpotLoading)
        axios.get('http://localhost:9094/')
        .then(response => { 
          const about = response.data;
          dispatch(fetechSpotSuccess(about))
        })
        .catch( error => {
            const errorMsg = error.message;
            dispatch (fetechSpotError(errorMsg))

        })
    
    }
}
