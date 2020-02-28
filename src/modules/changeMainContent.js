import { handleActions } from 'redux-actions';

import axios from 'axios';

const CHANGE_MAIN_CONTENT = 'CHANGE_MAIN_CONTENT';
const CHANGE_MAIN_VIDEO = 'CHANGE_MAIN_VIDEO';

const initialState = {
	mainVideo: null,
	videoList: null
};

function getVideosAPI(id) {
	// 배포시 수정할 url
	return axios.get(`http://localhost:3001/videos/${id}`);
}

export const getVideos = (id, callback) => dispatch => {
	return getVideosAPI(id).then(result => {
		dispatch({
			type: CHANGE_MAIN_CONTENT,
			payload: result.data
		});
		callback && callback();
	});
};

// export const getVideosAndChangePage = id => dispatch => {
// 	getVideos(id)

// }

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
				videoList: action.payload
			};
		},
		[CHANGE_MAIN_VIDEO]: (state, action) => {
			return {
				...state,
				mainVideo: action.payload
			};
		}
	},
	initialState
);
