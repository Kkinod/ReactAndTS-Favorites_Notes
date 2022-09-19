import { createStore } from 'redux'
import { v4 as uuid } from 'uuid'

interface IPayload {
    id?: string
    title?: string
    content?: string
}

export const addNote = (payload: IPayload) => {
    return {
        type: 'notes/add',
        payload: {
            id: uuid(),
            ...payload,
        },
    }
}

export const removeNote = (payload: IPayload) => {
    return {
        type: 'notes/remove',
        payload,
    }
}

const initialState = {
    notes: [
        {
            id: uuid(),
            title: 'Lorem ipsum',
            content: 'Lorem ipsum dolor sit amet',
        },
    ],
}

// ANY type!!
// const notesReducer = (state = initialState, action: { type: any; payload: { id: string; }; }) => {
const notesReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'notes/add':
            return {
                ...state,
                notes: [...state.notes, action.payload],
            }
        case 'notes/remove':
            return {
                ...state,
                notes: state.notes.filter((note) => note.id !== action.payload.id),
            }
        default:
            return state
    }
}

export const store = createStore(
    notesReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
)
