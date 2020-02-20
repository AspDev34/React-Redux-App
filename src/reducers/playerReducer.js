import { GET_DATA } from '../actions/actions';

const initialState = {
    player: [],
    isFetchingData: false
};

export const playerReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_DATA:
            return {
                ...state,
                isFetchingData: true
            };
        default: return state;
    };
};