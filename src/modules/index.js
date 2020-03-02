import { combineReducers } from 'redux';
// import addUserCategoryEntry from './addUserCategoryEntry';
import changeMainContent from './changeMainContent';
// import getCategoryData from './getCategoryData';
import login from './login';
import changeModalState from './changeModalState';
// import logout from './logout';
// import removeUserCategoryEntry from './removeUserCategoryEntry';
// import signup from './signup';

export default combineReducers({
	// addUserCategoryEntry,
	changeMainContent,
	changeModalState,
	// getCategoryData,
	login
	// logout,
	// removeUserCategoryEntry,
	// signup
});
