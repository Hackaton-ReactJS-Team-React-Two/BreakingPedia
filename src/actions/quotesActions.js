import { getQuoteByName } from "../api";
import {
	LOADING,
	ERROR,
  GET_BY_CHARACTER,
} from '../types/quotesTypes';
import * as charactersTypes from '../types/charactersTypes'

const { GET_ALL: CHARACTERS_GET_ALL } = charactersTypes

export const getByCharacter = (id) => async (dispatch,getState) => {
  dispatch({
    type: LOADING
  })
  const { characters } = getState().charactersReducer
  const { quotes } = getState().quotesReducer
  try {
    const data = await getQuoteByName(characters[id].name)
    const update_quotes = [
      ...quotes,
      data
    ]
    const quotes_key = update_quotes.length -1
    const update_characters = [...characters]
    update_characters[id] = {
      ...update_characters[id],
      quotes_key
    }
    dispatch({
      type: CHARACTERS_GET_ALL,
      payload: update_characters
    })
    dispatch({
      type: GET_BY_CHARACTER,
      payload: update_quotes
    })
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error
    })
  }
  
}