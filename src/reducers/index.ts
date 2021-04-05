import { combineReducers } from 'redux';

const AppReducers = combineReducers({});

const rootReducer = (state={}, action:any) => {
    //
  return AppReducers(state, action);
};

export default rootReducer;
