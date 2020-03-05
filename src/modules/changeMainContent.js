import { handleActions } from 'redux-actions';

import axios from 'axios';

const CHANGE_MAIN_CONTENT = 'CHANGE_MAIN_CONTENT';
const CHANGE_MAIN_VIDEO = 'CHANGE_MAIN_VIDEO';
const CHANGE_USER_CATEGORY = 'CHANGE_USER_CATEGORY';
const CHANGE_IS_EDITING_FALSE = 'CHANGE_IS_EDITING_FALSE';
const CHANGE_IS_EDITING_TRUE = 'CHANGE_IS_EDITING_TRUE';
const CHANGE_USER_CATEGORY_FAIL = 'CHANGE_USER_CATEGORY_FAIL';

axios.defaults.withCredentials = true;

const initialState = {
	mainVideo: null,
	videoList: null,
	isUserCategory: false,
	isEditing: false,
	selectedUserCategory: null
};
// 'http://localhost:3001'
// 'http://18.191.169.207:3001'
const url = 'http://localhost:3001';

function getVideosAPI(id) {
	return axios.get(`${url}/videos/${id}`);
}

function postSearchDataAPI(data) {
	return axios.post(`${url}/videos/search`, data);
}

function postUserCategoryVideosAPI(data) {
	return axios.post(`${url}/user/category`, data, {
		headers: {
			authorization: JSON.stringify(localStorage.getItem('token'))
		}
	});
}

export const postSearchData = data => dispatch => {
	return postSearchDataAPI(data).then(result => {
		dispatch({
			type: CHANGE_MAIN_CONTENT,
			payload: result.data
		});
	});
};

export const getVideos = (id, callback) => dispatch => {
	return getVideosAPI(id).then(result => {
		dispatch({
			type: CHANGE_MAIN_CONTENT,
			payload: result.data
		});
		callback && callback();
	});
};

export const postUserCategoryVideos = data => dispatch => {
	return postUserCategoryVideosAPI(data)
		.then(result => {
			if (result.status === 200) {
				dispatch({
					type: CHANGE_USER_CATEGORY,
					payload: {
						videoList: result.data.videoList,
						categoryName: data.categoryName
					}
				});
			} else if (result.status === 204) {
				dispatch({
					type: CHANGE_USER_CATEGORY_FAIL
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

export const changeIsEditingFalse = () => dispatch => {
	return dispatch({
		type: CHANGE_IS_EDITING_FALSE
	});
};

export const changeIsEditingTrue = () => dispatch => {
	return dispatch({
		type: CHANGE_IS_EDITING_TRUE
	});
};

export const changeMainVideo = video => dispatch => {
	return dispatch({
		type: CHANGE_MAIN_VIDEO,
		payload: video
	});
};

export default handleActions(
	{
		[CHANGE_MAIN_CONTENT]: (state, action) => {
			return {
				...state,
				mainVideo: action.payload[0],
				videoList: action.payload,
				isUserCategory: false
				// selectedUserCategory: action.payload.categoryName
			};
		},
		[CHANGE_MAIN_VIDEO]: (state, action) => {
			return {
				...state,
				mainVideo: action.payload
			};
		},
		[CHANGE_USER_CATEGORY]: (state, action) => {
			return {
				...state,
				mainVideo: action.payload.videoList[0],
				videoList: action.payload.videoList,
				isUserCategory: true,
				selectedUserCategory: action.payload.categoryName
			};
		},
		[CHANGE_IS_EDITING_FALSE]: (state, action) => {
			return {
				...state,
				isEditing: false
			};
		},
		[CHANGE_IS_EDITING_TRUE]: (state, action) => {
			return {
				...state,
				isEditing: true
			};
		},
		[CHANGE_USER_CATEGORY_FAIL]: (state, action) => {
			return {
				...state,
				mainVideo: 'nonExist',
				videoList: 'nonExist',
				isUserCategory: true,
				isEditing: false
			};
		}
	},
	initialState
);
