// INITIAL STATE
const initialState = {
    dataSource: []
};

// ACTION TYPE
const SET_DATA_SOURCE = "SET_DATA_SOURCE";
const GET_FROM_LOCAL_STORAGE = "GET_FROM_LOCAL_STORAGE";

// ACTION CREATORS
export const setToLocalStorage = data => ({
    type: SET_DATA_SOURCE,
    dataSource: data
});
export const getFromLocalStorage = data => ({
    type: GET_FROM_LOCAL_STORAGE,
    dataSource: data
});

export const addNewIssues = data => ({
    type: "SET_DATA_SOURCE",
    payload: { data }
});

//REDUCER
const dataReducer = (state = initialState, action) => {
    console.log("-------------");
    switch (action.type) {
        case SET_DATA_SOURCE:
            console.log(state.dataSource, action);
            return {
                ...state,
                dataSource: [...state.dataSource, action.payload.data]
            };
        default:
            return state;
    }
};

export default dataReducer;