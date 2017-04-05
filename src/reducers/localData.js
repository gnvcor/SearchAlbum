const initialState = {
    localData: localStorage || null
};

const localData = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_LOCAL_DATA':
            return Object.assign({}, state, {
                localData: action.localData
            });

        default:
            return state;
    }
};

export default localData;