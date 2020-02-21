import React from 'react';
import { connect } from 'react-redux';
import { get_data, update_player } from '../actions/actions';

const PlayerSearch = (props) => {

    const handleGetData = (event) => {
        event.preventDefault();
        props.get_data();
    };

    const handleById = (event) => {
        event.preventDefault();
        props.update_player(1);
    };


    return (
        <>
        {props.isFetchingData ? (<div>!!we are fetching data!!</div>) : (<button onClick={handleGetData}>get player</button>)}

        {props.isFetchingData ? (<div>!!we are fetching data!!</div>) : (<button onClick={handleById}>get player by id</button>)}
            
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        isFetchingData: state.isFetchingData
    };
};

export default connect(mapStateToProps, { get_data, update_player })(PlayerSearch);