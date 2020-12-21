import { INCREAMENT, DECREAMENT, RESET } from "../actions";

const initialState = {
    count: 0,
    history: []
}


const handleCounter = (state = initialState, change: any) => {
    let { count, history } = state;
    return {
        count: count + change,
        history: [count + change, ...history]
    }
}
const counter = (state = initialState, action: any) => {
    switch (action.type) {
        case INCREAMENT:
            return handleCounter(state, 1);
        case DECREAMENT:
            return handleCounter(state, -1);
        case RESET:
            return initialState;
        default:
            return state
    }
}
export default counter;