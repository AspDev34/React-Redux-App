import React from 'react';
import { connect } from 'react-redux';

const PlayerSearch = (props) => {
    return (
        <>
        {!props.isFetchingData ? <div>we are fetching data</div> : <button>get data</button>}
            
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        isFetchingData: state.isFetchingData
    };
};

export default connect(mapStateToProps, {})(PlayerSearch);