import { ADD_NOTE, DELETE_NOTE } from "../actions";

const initialState = {
    notes: []
}
const notesReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_NOTE:
            return { ...state, notes: [...state.notes, action.payload] }
        case DELETE_NOTE:
            return { notes: [...state.notes.slice(0, state.notes.length - 1)] }
        default:
            return state;
    }
}

export default notesReducer;