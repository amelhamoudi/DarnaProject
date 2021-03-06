import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import { fetchMembers } from './actions/member.actions';
import rootReducer from './reducers/reducers';
import {composeWithDevTools} from 'redux-devtools-extension'
import MemberReducer from './reducers/MemberReducer';
import RubriqueReducer from './reducers/RubriqueReducer'
import reducer from './reducers/reducers'



const store = createStore(reducer, 
    composeWithDevTools(applyMiddleware(logger, thunk)));


store.subscribe(() => {console.log("Stooooooooore",store.getState())})
// store.dispatch(fetchMembers);



export default store;