import {
	LOADING,
	ERROR,
	GET_BY_CHARACTER
} from '../types/commentsTypes';

const INITIAL_STATE = {
  comments: [],
  load: false,
  error: null
}

export default (state = INITIAL_STATE,action) => {
  switch (action.type) {
    case GET_BY_CHARACTER:
      return { 
        ...state, 
        comments: action.payload,
      }
    case LOADING:
      return { 
        ...state, 
        load: action.payload,
        error: null
      }
    case ERROR:
      return {
        ...state,
        load: false,
        error: action.payload
      }

    default: return state;
  }
}