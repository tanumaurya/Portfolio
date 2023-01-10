import React from 'react';
import {connect} from 'react-redux';

function CounterRedux(prop){
    let count = prop.count;
    return(
        <>
             <div >Counter Redux</div>
             <button onClick= {prop.increment}>  + </button>
             <span> Count: {count}</span>
             <button onClick= {prop.decrement}> - </button>        
        </>
    )
}
function mapStateToProps(state){
    return state;
}
function mapDispatchToProps(dispatch){
    return{
        increment: () => {
            dispatch({type : "increment"})
        },
        decrement: () => {
            dispatch({type : "decrement"})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CounterRedux);