import React from 'react';
import { connect } from 'react-redux';

const PlayerList = (props) => {
    // console.log('PROPS DATA', props);
    console.log(props)
    return (

        <>

            {props.allPlayers.map(item => (
                <div>{item.first_name}</div>
            ))}
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        player: state.player,
        allPlayers: state.allPlayers,
        data: state
    };
};

export default connect(mapStateToProps, {})(PlayerList);