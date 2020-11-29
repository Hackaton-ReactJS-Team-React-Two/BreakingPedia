import {
	LOADING,
	ERROR,
  GET_BY_CHARACTER,
  ADD
} from '../types/commentsTypes';
import * as charactersTypes from '../types/charactersTypes'

const { GET_ALL: CHARACTERS_GET_ALL } = charactersTypes

export const getByCharacter = (id) => async (dispatch,getState) => {
  dispatch({
    type: LOADING
  })
  const { characters } = getState().charactersReducer
  const { comments } = getState().commentsReducer
  try {
    const update_comments = [
      ...comments,
      []
    ]
    const comments_key = update_comments.length -1
    const update_characters = [...characters]
    update_characters[id] = {
      ...update_characters[id],
      comments_key
    }
    dispatch({
      type: CHARACTERS_GET_ALL,
      payload: update_characters
    })
    dispatch({
      type: GET_BY_CHARACTER,
      payload: update_comments
    })
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error
    })
  }
}

export const add = (id,comment) => (dispatch,getState) => {
  const { comments } = getState().commentsReducer
  const update_comments = [...comments]
  update_comments[id].push(comment)
  dispatch({
    type: ADD,
    payload: update_comments
  })
}