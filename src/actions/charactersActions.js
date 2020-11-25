import { getCharacters } from "../api";

export const GetAll = (count) => async (dispatch, getState) => {
  dispatch({
    type: "loading",
    payload: true
  })
  const { characters } = getState().charactersReducer
  if(characters.length) {
    let data = null
    let l = 0
    let length = 0
    if(count*8 >= 63) {
      length = 63
    } else {
      length = count*8
    }
    for (let i = (count-1)*8; i < length; i++) {
      if(i%8 === 0) {
        l = 0
      }
      if(!characters[i] || characters[i].char_id != i+1) {
        if(data === null) {
          try {
            data = await getCharacters(count,8)
          } catch (error) {
            dispatch({
              type: "error",
              payload: error
            })
          }
        }
        characters.splice(i,0,data[l])
      }
      l++
    }
    dispatch({
      type: "loading",
      payload: false
    })
    dispatch({
      type: "get_characters",
      payload: characters
    })
  } else {
    try {
      const data = await getCharacters(count,8)
      dispatch({
        type: "get_characters",
        payload: data
      })
      dispatch({
        type: "loading",
        payload: false
      })
    } catch (error) {
      dispatch({
        type: "error",
        payload: error
      })
    }
  }
}
export const getById = (id) => async (dispatch,getState) => {
  const { characters } = getState().charactersReducer
  
}