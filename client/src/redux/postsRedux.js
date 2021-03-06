import axios from "axios";
import { API_URL } from "../config";
import { BASE_URL } from "../config";

/* SELECTORS */
export const getPosts = ({ posts }) => posts.data;
export const getSinglePost = ({ posts }) => posts.singlePost;
export const counterPosts = ({ posts }) => posts.data.length;
export const getRequest = ({ posts }) => posts.request;
export const getPages = ({ posts }) =>
  Math.ceil(posts.amount / posts.postsPerPage);
export const presentPage = ({ posts }) => posts.presentPage;

/* ACTIONS */
// action name creator
const reducerName = "posts";
const createActionName = name => `app/${reducerName}/${name}`;

export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });
export const loadPosts = payload => ({ payload, type: LOAD_POSTS });
export const loadSinglePost = payload => ({ payload, type: LOAD_SINGLE_POST });
export const resetRequest = () => ({ type: RESET_REQUEST });
export const loadPostsByPage = payload => ({ payload, type: LOAD_POSTS_PAGE });

export const LOAD_POSTS = createActionName("LOAD_POSTS");
export const LOAD_POSTS_PAGE = createActionName("LOAD_POSTS_PAGE");
export const LOAD_SINGLE_POST = createActionName("LOAD_SINGLE_POST");
export const START_REQUEST = createActionName("START_REQUEST");
export const END_REQUEST = createActionName("END_REQUEST");
export const ERROR_REQUEST = createActionName("ERROR_REQUEST");
export const RESET_REQUEST = createActionName("RESET_REQUEST");

/* INITIAL STATE */
const initialState = {
  data: [],
  request: {
    pending: false,
    error: null,
    success: null
  },
  singlePost: [],
  amount: 0,
  postsPerPage: 5,
  presentPage: 1
};

/* THUNKS */
//load all Posts
export const loadPostsRequest = () => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      let res = await axios.get(`${BASE_URL}${API_URL}/posts`);
      //await new Promise((resolve, reject) => setTimeout(resolve, 2000));;
      dispatch(loadPosts(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

//Load single Post
export const loadSinglePostRequest = id => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      let res = await axios.get(`${BASE_URL}${API_URL}/posts/${id}`);
      //await new Promise((resolve, reject) => setTimeout(resolve, 2000));
      dispatch(loadSinglePost(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

//add Post
export const addPostRequest = post => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      await axios.post(`${BASE_URL}${API_URL}/posts`, post);
      //await new Promise((resolve, reject) => setTimeout(resolve, 2000));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const loadPostsByPageRequest = (page, postsPerPage) => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      //const postsPerPage = 5;

      const startAt = (page - 1) * postsPerPage;
      const limit = postsPerPage;

      let res = await axios.get(
        `${BASE_URL}${API_URL}/posts/range/${startAt}/${limit}`
      );

      const payload = {
        posts: res.data.posts,
        amount: res.data.amount,
        postsPerPage,
        presentPage: page
      };

      dispatch(loadPostsByPage(payload));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

/* REDUCER */
export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case LOAD_POSTS:
      return { ...statePart, data: action.payload };
    case LOAD_POSTS_PAGE:
      return {
        ...statePart,
        postsPerPage: action.payload.postsPerPage,
        presentPage: action.payload.presentPage,
        amount: action.payload.amount,
        data: [...action.payload.posts]
      };
    case LOAD_SINGLE_POST:
      return { ...statePart, singlePost: action.payload };
    case START_REQUEST:
      return {
        ...statePart,
        request: { pending: true, error: null, success: null }
      };
    case END_REQUEST:
      return {
        ...statePart,
        request: { pending: false, error: null, success: true }
      };
    case RESET_REQUEST:
      return {
        ...statePart,
        request: { pending: false, error: null, success: null }
      };
    case ERROR_REQUEST:
      return {
        ...statePart,
        request: { pending: false, error: action.error, success: false }
      };
    default:
      return statePart;
  }
}
