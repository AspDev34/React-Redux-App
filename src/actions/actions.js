import axios from 'axios';

export const GET_DATA = 'GET_DATA';

export const get_data = () => dispatch => {
    dispatch({ type: GET_DATA });
    axios
        .get("https://www.balldontlie.io/api/v1/players")
        .then(res => console.log('RESPONSE DATA', res))
        .catch(err => console.error('error retrieving data', err));
};