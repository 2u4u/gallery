import { Dispatch } from 'redux';
import { getFiles } from '../../api/main';
import { FileType } from '../reducers/appReducer';
import types from '../types';

export interface AppActionType {
  type: string,
  payload?: any,
}

export const showFiles = (files: FileType[]): AppActionType => ({
  type: types.SHOW_FILES,
  payload: files,
});

export const showError = (status: number): AppActionType => ({
    type: types.SHOW_ERROR,
    payload: status,
});

// Show all appartments
export const fetchFiles = () => async (dispatch: Dispatch<AppActionType>): Promise<void | Error> => {
    getFiles()
        .then((files) => dispatch(showFiles(files)))
        .catch((err) => dispatch(showError(err.response.status)));
};