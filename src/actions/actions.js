import axios from 'axios';

export const GET_PLAYER = 'GET_PLAYER';
export const UPDATE_PLAYER = 'UPDATE_PLAYER';

export const get_data = () => dispatch => {
    // dispatch({ type: GET_PLAYER });
    axios
        .get("https://www.balldontlie.io/api/v1/players")
        .then(res => { 
            console.log('RESPONSE DATA', res.data.data);
            dispatch({ type: GET_PLAYER, payload: res.data.data}); 
        })
        .catch(err => console.error('error retrieving data', err));
};


export const update_player = (ID) => dispatch => {
    // dispatch({ type: UPDATE_PLAYER });
    axios
        .get(`https://www.balldontlie.io/api/v1/players/${ID}`)
        .then(res => { 
            console.log('RESPONSE DATA', res);
            dispatch({ type: UPDATE_PLAYER, payload: res.data}); 
        })
        .catch(err => console.error('error retrieving data', err));
};