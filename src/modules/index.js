import { combineReducers } from 'redux';
import changeMainContent from './changeMainContent';
import login from './login';
import changeModalState from './changeModalState';
import userCategoryData from './userCategoryData';

export default combineReducers({
	changeMainContent,
	changeModalState,
	login,
	userCategoryData
});
