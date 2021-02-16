import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import rootReducer from '@src/reducers';
import { IState, IAction } from '@src/types/redux';


const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk as ThunkMiddleware<IState, IAction>)
  )
);

export default store;
