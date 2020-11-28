import {
	LOADING,
	ERROR,
	GET_BY_CHARACTER
} from '../types/quotesTypes';

const INITIAL_STATE = {
  quotes: [],
  load: false,
  error: null
}

export default (state = INITIAL_STATE,action) => {
  switch (action.type) {
    case GET_BY_CHARACTER:
      return { 
        ...state, 
        quotes: action.payload,
        load: false
      }
    case LOADING:
      return { 
        ...state, 
        load: true,
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