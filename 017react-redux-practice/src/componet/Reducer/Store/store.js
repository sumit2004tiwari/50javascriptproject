
// import { createStore } from 'redux';
import { legacy_createStore as createStore} from 'redux'
import myReducer from '../Reducers/reducer'

const store  = createStore(myReducer)
export default store;