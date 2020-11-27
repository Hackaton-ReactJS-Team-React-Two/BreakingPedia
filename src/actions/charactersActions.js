import { getCharacters, getCharacterById } from "../api";
import commentsReducer from "../reducers/commentsReducer";
import quotesReducer from "../reducers/quotesReducer";
import {
	LOADING,
	ERROR,
  GET_ALL,
  INCREMENT_COUNT,
  GET_BY_ID
} from '../types/charactersTypes';

export const getAll = (count) => async (dispatch, getState) => {
  dispatch({
    type: LOADING
  })
  dispatch({
    type: INCREMENT_COUNT,
    payload: count
  })
  const { characters } = getState().charactersReducer
  let data = await getCharacters(count,8)
  for (let i = 0; i < characters.length; i++) {
    let index =  data.findIndex(element => {
      return element.char_id === characters[i].char_id
    })
    if(index !== -1) {
      data.splice(index,1,characters[i])
      characters.splice(i,1)
      i--
    }
  }
  const updateCharacters = characters.concat(data)
  updateCharacters.sort((c1,c2) => c1.char_id - c2.char_id)
  dispatch({
    type: GET_ALL,
    payload: updateCharacters
  })
}
export const getById = (id) => async (dispatch,getState) => {
  dispatch({
    type:LOADING
  })
  const { characters } = getState().charactersReducer
  try {
    const data = await getCharacterById(id)
    characters.push(data)
    characters.sort((c1,c2) => c1.char_id - c2.char_id)
    dispatch({
      type: GET_BY_ID,
      payload: characters
    })
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error
    })
  }
  
}