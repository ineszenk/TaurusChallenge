const initialState = {
    itemSearched: ''
}


const appReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'SET_ITEM_SEARCHED':
            return { ...state, path: payload.itemSearched }
        default:
            return state
    }
}

export default appReducer