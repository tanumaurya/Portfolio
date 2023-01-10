let initialState = {
    batCount : 10,
}
function BatReducer(state= initialState, action){
    switch(action.type){
        case "sellbat":
            return {
                batCount:
                  state.batCount - action.payload
            };
        default:
            return state;    
    }
}
export default BatReducer;