// INITIAL STATE
const initialState = {
    dataSource: []
}

// ACTION TYPE
const SET_DATA_SOURCE = 'SET_DATA_SOURCE'
const GET_FROM_LOCAL_STORAGE = 'GET_FROM_LOCAL_STORAGE'



// ACTION CREATORS
export const setToLocalStorage = data => ({ type: SET_DATA_SOURCE, dataSource: data });
export const getFromLocalStorage = data => ({ type: GET_FROM_LOCAL_STORAGE, dataSource: data })


// THUNK MIDDLEWARE
export const DataToLocalStorage = (values) => {
    return dispatch => {
        const { TokenName, TokenTicker, TotalSupply, IssuerName, Template, Country } = values;

        localStorage.setItem('TokenName', TokenName)
        localStorage.setItem('TokenTicker', TokenTicker)
        localStorage.setItem('TotalSupply', TotalSupply)
        localStorage.setItem('IssuerName', IssuerName)
        localStorage.setItem('Template', Template)
        localStorage.setItem('Country', Country)


        dispatch(setToLocalStorage(values));
    };
}



const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA_SOURCE:
            return { ...state, dataSource: [...state.dataSource, action.dataSource] }
        default:
            return state
    }
}

export default dataReducer


