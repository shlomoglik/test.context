import { ADD_FIELD } from './types';

const addField = (fieldMap, fieldVal, state) => {
    state.doc[fieldMap] = fieldVal;
    return {...state};
}

export default (state, action) => {
    switch (action.type) {
        case ADD_FIELD:
            return addField(action.fieldMap, action.fieldVal, state)
        default:
            return state;
    }
}