import { bindActionCreators } from '@reduxjs/toolkit';
import allActions from './actions';
import { AppStateType } from './reducers';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(allActions, dispatch);
};
export const useTypedSelector: TypedUseSelectorHook<AppStateType> = useSelector;