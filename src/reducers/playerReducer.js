import { GET_PLAYER, UPDATE_PLAYER } from '../actions/actions';

const initialState = {
    player: [],
    allPlayers: [],
    isFetchingData: false
};

export const playerReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_PLAYER:
            return {
                ...state,
                isFetchingData: true,
                allPlayers: action.payload
            };
        case UPDATE_PLAYER:
            return {
                ...state,
                isFetchingData: false,
                player: action.payload

            };
        default: return state;
    };
};