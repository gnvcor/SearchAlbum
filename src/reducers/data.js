const initialState = {
    data: null
};

const data = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_DATA':
            return Object.assign({}, state, {
                data: action.data
            });

        default:
            return state;
    }
};

export default data;