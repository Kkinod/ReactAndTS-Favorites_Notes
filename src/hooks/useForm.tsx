import { useReducer } from 'react'

interface IReducerState {
    name: string
    attendance: string
    average: string
    consent: boolean
    error: string
}

interface CounterAction {
    type: string
    field: string
    value: string
    initialValues: IReducerState
    errorValue: string
}

const actionTypes = {
    inputChange: 'INPUT CHANGE',
    clearValues: 'CLEAR VALUES',
    consentToggle: 'CONSENT TOGGLE',
    throwError: 'THROW ERROR',
}

// Because i define a type for "action" i have to add rest of the values to the functions in "useForm", such as: initialValues, errorValue: ', field: '',

const reducer = (state: IReducerState, action: CounterAction) => {
    switch (action.type) {
        case actionTypes.inputChange:
            return {
                ...state,
                [action.field]: action.value,
            }
        case actionTypes.clearValues:
            return {
                ...action.initialValues,
            }
        case actionTypes.consentToggle:
            return {
                ...state,
                consent: !state.consent,
            }
        case actionTypes.throwError:
            return {
                ...state,
                error: action.errorValue,
            }
        default:
            return state
    }
}

export const useForm = (initialValues: IReducerState) => {
    const [formValues, dispatch] = useReducer(reducer, initialValues)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: actionTypes.inputChange,
            field: e.target.name,
            value: e.target.value,
            initialValues,
            errorValue: '',
        })
    }

    const handleClearForm = (initialValues: IReducerState) => {
        dispatch({
            type: actionTypes.clearValues,
            initialValues,
            field: '',
            value: '',
            errorValue: '',
        })
    }

    const handleThrowError = (errorMessage: string) => {
        dispatch({
            type: actionTypes.throwError,
            errorValue: errorMessage,
            field: '',
            value: '',
            initialValues,
        })
    }

    const handleToggleConsent = () => {
        dispatch({
            type: actionTypes.consentToggle,
            field: '',
            value: '',
            initialValues,
            errorValue: '',
        })
    }

    return {
        formValues,
        handleInputChange,
        handleClearForm,
        handleThrowError,
        handleToggleConsent,
    }
}
