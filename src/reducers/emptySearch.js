const initialState = {
    emptySearch: false
};

const emptySearch = (state = initialState, action) => {
    switch (action.type) {
        case 'CHECK_EMPTY_SEARCH':
            return Object.assign({}, state, {
                emptySearch: action.emptySearch
            });

        default:
            return state;
    }
};

export default emptySearch;