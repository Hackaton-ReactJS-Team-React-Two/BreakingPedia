import { act } from 'react-dom/test-utils';
import {
	LOADING,
	ERROR,
  GET_ALL,
  GET_BY_ID,
  INCREMENT_COUNT,
  UPDATE
} from '../types/charactersTypes';

const INITIAL_STATE = {
  characters: [],
  load: false,
  error: null,
  count: 1
}

export default (state = INITIAL_STATE,action) => {
  switch (action.type) {
    case INCREMENT_COUNT: 
      return {
        ...state,
        count: action.payload
      }
    case GET_ALL:
      return { 
        ...state, 
        characters: action.payload,
        load: false
      }
    case UPDATE: 
      return {
        ...state,
        characters: action.payload,
      }
    case GET_BY_ID:
      return { 
        ...state, 
        characters: action.payload,
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