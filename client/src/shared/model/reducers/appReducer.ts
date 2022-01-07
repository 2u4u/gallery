import types from '../types';
import { AppActionType } from '../actions/appAction';

export interface FileType {
    _id: string,
    type: string,
    name: string,
    url: string,
    duration: string,
    date: Date,
}

export interface AppReducerType {
    files: FileType[];
    error?: number;
}

const initialState: AppReducerType = {
    files: [],
    error: undefined,
};

type Action = AppActionType;

const messagesReducer = (state = initialState, action: Action): AppReducerType => {
  switch (action.type) {
    case types.SHOW_FILES:
        return {
            ...state,
            files: action.payload as [],
        };
    case types.SHOW_ERROR:
        return {
            ...state,
            error: action.payload,
        };
    default:
        return state;
  }
};

export default messagesReducer;
