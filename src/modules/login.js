import { handleActions } from 'redux-actions';
import axios from 'axios';

const POST_LOGIN_SUCCESS = 'POST_LOGIN_SUCCESS';
const POST_LOGIN_FAILURE = 'POST_LOGIN_FAILUER';
const POST_SIGNUP_SUCCESS = 'POST_SIGNUP_SUCCESS';
const POST_SIGNUP_FAILURE = 'POST_SIGNUP_FAILUER';
const INIT_SIGNUP_STATE = 'INIT_SIGNUP_STATE';
const INIT_LOGIN_STATE = 'INIT_LOGIN_STATE';

const LOGOUT = 'LOGOUT';

const initialState = {
	isLogin: false,
	loginResponse: null,
	signupResponse: null
};

function postSignupAPI(data) {
	// return axios.post('http://18.191.169.207:3001/user/signup', data);
	return axios.post('http://localhost:3001/user/signup', data);
}

function postLoginAPI(data) {
	// return axios.post('http://18.191.169.207:3001/user/signin', data);
	return axios.post('http://localhost:3001/user/signin', data);
}

export const postSignup = data => dispatch => {
	return postSignupAPI(data)
		.then(result => {
			if (result.status === 200) {
				dispatch({
					type: POST_SIGNUP_SUCCESS
				});
			}
		})
		.catch(err => {
			console.log(err);
			dispatch({
				type: POST_SIGNUP_FAILURE
			});
		});
};

export const postLogin = data => dispatch => {
	return postLoginAPI(data)
		.then(result => {
			if (result.status === 200) {
				dispatch({
					type: POST_LOGIN_SUCCESS
				});
			}
		})
		.catch(err => {
			console.log(err);
			dispatch({
				type: POST_LOGIN_FAILURE
			});
		});
};

export const initSignupState = () => dispatch => {
	return dispatch({
		type: INIT_SIGNUP_STATE
	});
};

export const initLoginState = () => dispatch => {
	return dispatch({
		type: INIT_LOGIN_STATE
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
		},
		[INIT_SIGNUP_STATE]: (state, action) => {
			return {
				...state,
				signupResponse: null
			};
		},
		[INIT_LOGIN_STATE]: (state, action) => {
			return {
				...state,
				loginResponse: null
			};
		}
	},
	initialState
);
