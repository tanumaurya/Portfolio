// inbuilt function creatStore -> input : reducer
import { createStore, combineReducers, applyMiddleware } from "redux";
import CounterReducer from "./CounterReducer";
import BatReducer from "./BatReducer";
import userReducer from "./user/userReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
     count: CounterReducer,
     Bat: BatReducer,
     User: userReducer
});
const store = createStore(rootReducer,
     applyMiddleware(thunk));
export default store;