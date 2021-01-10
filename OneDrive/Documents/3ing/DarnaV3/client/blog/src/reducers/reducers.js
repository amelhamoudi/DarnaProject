import {combineReducers } from 'redux'
import SpotReducer from './SpotReducer'
import ActionReducer from './ActionReducer'
import ContactReducer from './ContactReducer';


export default combineReducers ({
   
    SpotData:SpotReducer,
    ActionData:ActionReducer,
    
    ContactData:ContactReducer,
});
