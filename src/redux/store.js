import { createStore,combineReducers } from "redux";
import Safi from './reducer'


export const Rootreducer = combineReducers({
   user: Safi
});