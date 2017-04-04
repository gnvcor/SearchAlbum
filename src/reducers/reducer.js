const initialState = {
    reducer: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPLOAD_REDUCER':
            return Object.assign({}, state, {
                reducer: action.reducer
            });

        default:
            return state;
    }
};

export default reducer;