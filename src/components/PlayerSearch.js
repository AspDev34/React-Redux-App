import React from 'react';
import { connect } from 'react-redux';
import { get_data } from '../actions/actions';

const PlayerSearch = (props) => {

    const handleGetData = (event) => {
        event.preventDefault();
        props.get_data();
    };


    return (
        <>
        {!props.isFetchingData ? (<div>!!we are fetching data!!</div>) : (<button onClick={handleGetData}>get data</button>)}
            
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        isFetchingData: state.isFetchingData
    };
};

export default connect(mapStateToProps, { get_data })(PlayerSearch);