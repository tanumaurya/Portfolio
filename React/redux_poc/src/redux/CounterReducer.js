let initialState = {
    count:0
    // color: "red"
}
// when state is not passed -> initial state -> 0
function CounterReducer(state = initialState, action){
    switch(action.type){
        case "increment":
            return {count: state.count + 1};
        case "decrement":
            return {count: state.count - 1};   
        default:
            return state;
    }
}
export default CounterReducer;