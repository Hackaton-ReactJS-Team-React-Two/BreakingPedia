const INITIAL_STATE = {
  characters: [],
  load: false,
  error: null
}

export default (state = INITIAL_STATE,action) => {
  switch (action.type) {
    case 'get_characters':
      return { 
        ...state, 
        characters: action.payload,
      }
    case 'loading':
      return { 
        ...state, 
        load: action.payload,
        error: null
      }
    case 'error':
      return {
        ...state,
        load: false,
        error: action.payload
      }

    default: return state;
  }
}