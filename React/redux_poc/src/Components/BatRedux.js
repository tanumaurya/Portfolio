import React, {useState} from 'react'
import {connect} from 'react-redux';
function BatRedux(props) {
    const [value, setVal] = useState("");
    const bat = props.batCount;
    const buyBat = props.buyBat;
    return (
       <>
            <h1>Bat Example</h1>,
            <input value ={value} onChange={(e)=> setVal(e.target.value)}></input>
            <button onClick= {()=>{
                buyBat(value);
                setVal("");
            }}>BuyBat</button>      
       </>
    )
}
function mapStateToProps(state){
    return state.Bat;
}
function mapDispatchToProps(dispatch){
    return {
        buyBat: (value) => {
            dispatch({action: "sellbat", payload: value})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BatRedux);
