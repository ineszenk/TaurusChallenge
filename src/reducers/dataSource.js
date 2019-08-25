// INITIAL STATE
const initialState = {
    dataSource: []
};

// ACTION TYPE
const SET_DATA_SOURCE = "SET_DATA_SOURCE";


export const addNewIssues = data => ({
    type: "SET_DATA_SOURCE",
    payload: { data }
});

//REDUCER
const dataReducer = (state = initialState, action) => {
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