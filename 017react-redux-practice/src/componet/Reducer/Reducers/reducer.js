import {INCREMENT, DECREMENT ,INCREMENT5} from '../../Reducer/Actions/actionType'
const initialState = 0

function myReducer(state=initialState, aciton){
    switch(aciton.type){
        case INCREMENT:
           return state+1
        
        case DECREMENT:
            return state -1   ;

        case INCREMENT5:
            return state +5
    }
}

export default myReducer;