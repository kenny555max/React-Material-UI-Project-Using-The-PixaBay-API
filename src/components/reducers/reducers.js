
const initialState = {
    images: []
}

export function reducer (state = initialState, action) {
  switch (action.type) {
    case 'FETCH_IMAGES':
        return { ...state, images: [...action.payload] }
    default:
      return state;
  }
}

export default reducer;