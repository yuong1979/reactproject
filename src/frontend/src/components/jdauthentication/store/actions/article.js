import {getCookie, tokenConfig} from "../Utilities"
import axios from 'axios';
import { GET_ARTICLE_LIST } from './actionTypes'

axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = 'csrftoken';

// GET ARTICLELIST

export const getArticleList = (query) => (dispatch, getState) => {
	let url = '/api/article/';
	if (query)
		url += '?search=' + query;
	axios.get(url, tokenConfig(getState))
	.then(res => {

		dispatch({
			type: GET_ARTICLE_LIST,
			payload: res.data
		})
	})

	.catch(err => {

		console.log(err)

	})

}
