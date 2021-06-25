import {BEGIN_UPDATE, DECREMENT_COUNTER, INCREMENT_COUNTER} from "../actions/counterActions";

let initialState = {
    isUpdating: false,
    value: 0
};


export default function counterReducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {isUpdating: false, value: state.value + 1};
        case DECREMENT_COUNTER:
            if (state.value === 0) {
                return {...state, isUpdating: false};
            }
            return {isUpdating: false, value: state.value - 1};
        case BEGIN_UPDATE:
            return {...state, isUpdating: true};
        default:
            return state;
    }
}