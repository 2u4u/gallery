import { combineReducers } from 'redux';
import appReducer, { AppReducerType } from './appReducer';

export interface AppReducerState {
  appStore: AppReducerType,
}

export default combineReducers<AppReducerState>({
  appStore: appReducer,
});
