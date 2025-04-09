import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { userActions } from './slice/userSlice';

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(userActions, dispatch);
};