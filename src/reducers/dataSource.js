// INITIAL STATE
const initialState = {
	dataSource: []
};

// ACTION TYPE
const SET_DATA_SOURCE = 'SET_DATA_SOURCE';
const DELETE_TOKEN = 'DELETE_TOKEN';

export const addNewIssues = (data) => ({
	type: 'SET_DATA_SOURCE',
	payload: { data }
});

export const deleteToken = (key) => ({
	type: 'DELETE_TOKEN',
	payload: { key }
});

//REDUCER
const dataReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_DATA_SOURCE:
			return {
				...state,
				dataSource: [ ...state.dataSource, { ...action.payload.data, key: state.dataSource.length + 1 } ]
			};
		case DELETE_TOKEN:
			return {
				...state,
				dataSource: state.dataSource.filter((data) => data.key !== action.payload.key)
			};

		default:
			return state;
	}
};

export default dataReducer;
