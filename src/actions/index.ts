export const INCREAMENT = 'INCREAMENT';
export const DECREAMENT = 'DECREAMENT';
export const RESET = 'RESET';
export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE'

export const increaseCount = ({
    type: INCREAMENT
})
export const decreaseCount = ({
    type: DECREAMENT
})
export const resetCount = ({
    type: RESET
})
export const addNote = (note: string) => ({
    type: ADD_NOTE,
    payload: note
})

export const deleteNote = (note: string) => ({
    type: DELETE_NOTE,
    payload: note
})