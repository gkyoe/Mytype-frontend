import { handleActions } from 'redux-actions';
import axios from 'axios';

const GET_USER_CATEGORY_LIST = 'GET_USER_CATEGORY_LIST';
const POST_VIDEO_TO_USER_CATEGORY = 'POST_VIDEO_TO_USER_CATEGORY';
const INIT_USER_CATEGORY_LIST = 'INIT_USER_CATEGORY_LIST';
// const POST_DELETE_USER_CATEGORY = 'POST_DELETE_USER_CATEGORY';
// const POST_ADD_USER_CATEGORY = 'POST_ADD_USER_CATEGORY';

axios.defaults.withCredentials = true;

const initialSatate = {
	userCategoryList: []
};

function postAddUserCategoryAPI(data) {
	return axios.post('http://18.191.169.207:3001/user/addCategory', data, {
		headers: {
			authorization: JSON.stringify(localStorage.getItem('token'))
		}
	});
}

function postDeleteUserCategoryAPI(data) {
	return axios.post('http://18.191.169.207:3001/user/deleteCategory', data, {
		headers: {
			authorization: JSON.stringify(localStorage.getItem('token'))
		}
	});
}

function getUserCategoryListAPI() {
	return axios.get('http://18.191.169.207:3001/user/categoryList', {
		headers: {
			authorization: JSON.stringify(localStorage.getItem('token'))
		}
	});
}

function postVideoToUserCategoryAPI(data) {
	return axios.post('http://18.191.169.207:3001/user/addVideo', data, {
		headers: {
			authorization: JSON.stringify(localStorage.getItem('token'))
		}
	});
}

export const getUserCategoryList = () => dispatch => {
	return getUserCategoryListAPI()
		.then(result => {
			if (result.status === 200) {
				dispatch({
					type: GET_USER_CATEGORY_LIST,
					payload: result.data.userCategoryList
				});
			} else if (result.status === 204) {
				dispatch({
					type: GET_USER_CATEGORY_LIST,
					payload: result.data.userCategoryList
				});
			}
		})
		.catch(err => {
			if (err.response.status === 401) {
				return 'need login';
			}
			return;
		});
};

export const postAddUserCategory = data => dispatch => {
	return postAddUserCategoryAPI(data)
		.then(result => {
			if (result.status === 200) {
				return;
			}
		})
		.catch(err => {
			if (err.response.status === 401) {
				return 'need login';
			}
			return;
		});
};
export const initUserCategoryList = () => dispatch => {
	return dispatch({
		type: INIT_USER_CATEGORY_LIST
	});
};

export const postVideoToUserCategory = data => dispatch => {
	return postVideoToUserCategoryAPI(data)
		.then(result => {
			if (result.status === 200) {
				dispatch({
					type: POST_VIDEO_TO_USER_CATEGORY
				});
			}
		})
		.catch(err => {
			if (err.response.status === 401) {
				return 'need login';
			}
			return;
		});
};

export const postDeleteUserCategory = data => dispatch => {
	return postDeleteUserCategoryAPI(data)
		.then(result => {
			if (result.status === 200) {
				return;
			}
		})
		.catch(err => {
			if (err.response.status === 401) {
				return 'need login';
			}
			return;
		});
};

export default handleActions(
	{
		[GET_USER_CATEGORY_LIST]: (state, action) => {
			return {
				...state,
				userCategoryList: action.payload
			};
		},
		[POST_VIDEO_TO_USER_CATEGORY]: (state, action) => {
			alert('추가되었습니다.');
			return {
				...state
			};
		},
		[INIT_USER_CATEGORY_LIST]: (state, action) => {
			return {
				...state,
				userCategoryList: []
			};
		}
	},
	initialSatate
);
