import {
  REGISTER,
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  GET_PROFILE,
  REGISTER_SUCCESS,
  GET_PROFILE_SUCCESS,
  REGISTER_FAIL,
  GET_PROFILE_FAIL,
  USER_LOGOUT,
  GET_ALL_USERS,
  UPDATE_USER,
  GET_PASSWORD,
} from "../actionTypes/userActionTypes";

const init = {
  usersList: null,
  users: null,
  loading: false,
  errors: null,
  isAuth: false,
  token: null,
};
const userReducer = (state = init, { type, payload }) => {
  switch (type) {
    case REGISTER:
    case LOGIN:
    case GET_PROFILE:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: payload,
        errors: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: null,
        users: payload.user,
        token: payload.token,
        isAuth: true,
      };
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: null,
        users: payload,
        isAuth: true,
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case GET_PROFILE_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    case USER_LOGOUT:
      return {
        ...state,
        isAuth: false,
        users: null,
      };
    case GET_ALL_USERS:
      return { ...state, loading: false, error: null, usersList: payload };
    case GET_PASSWORD:
      return {
        ...state,
        loading: false,
        error: null,
        users: payload,
      };
    case UPDATE_USER:
      return {
        ...state,
        usersList: state.usersList.map((el) =>
          el._id === payload._id ? payload : el
        ),
      };

    default:
      return state;
  }
};
export default userReducer;
