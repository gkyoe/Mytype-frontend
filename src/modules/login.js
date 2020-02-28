import { handleActions } from 'redux-actions';
import axios from 'axios';

const POST_LOGIN_SUCCESS = 'POST_LOGIN_SUCCESS';
const POST_LOGIN_FAILURE = 'POST_LOGIN_FAILUER';
const POST_SIGNUP_SUCCESS = 'POST_SIGNUP_SUCCESS';
const POST_SIGNUP_FAILURE = 'POST_SIGNUP_FAILUER';
const LOGOUT = 'LOGOUT';

const initialState = {
	isLogin: false,
	loginResponse: null,
	signupResponse: null
};

function postSignupAPI(data) {
	return axios.post('http://18.191.169.207:3001/user/signup', data);
}

function postLoginAPI(data) {
	return axios.post('http://18.191.169.207:3001/user/signin', data);
}

export const postSignup = data => dispatch => {
	return postSignupAPI(data).then(result => {
		if (result.status === 200) {
			dispatch({
				type: POST_SIGNUP_SUCCESS
			});
		} else {
			dispatch({
				type: POST_SIGNUP_FAILURE
			});
		}
	});
};

export const postLogin = data => dispatch => {
	return postLoginAPI(data).then(result => {
		if (result.status === 200) {
			dispatch({
				type: POST_LOGIN_SUCCESS
			});
		} else {
			dispatch({
				type: POST_LOGIN_FAILURE
			});
		}
	});
};

export default handleActions(
	{
		[POST_SIGNUP_SUCCESS]: (state, action) => {
			return {
				...state,
				signupResponse: true
			};
		},
		[POST_SIGNUP_FAILURE]: (state, action) => {
			return {
				...state,
				signupResponse: false
			};
		},
		[POST_LOGIN_SUCCESS]: (state, action) => {
			return {
				...state,
				isLogin: true,
				loginResponse: true
			};
		},
		[POST_LOGIN_FAILURE]: (state, action) => {
			return {
				...state,
				loginResponse: false
			};
		}
	},
	initialState
);
