export const checkEmptySearch = (emptySearch) => {
    return {
        type: 'CHECK_EMPTY_SEARCH',
        emptySearch
    }
};

export const updateData = (data) => {
    return {
        type: 'UPDATE_DATA',
        data
    }
};

export const updateLocalData = (localData) => {
    return {
        type: 'UPDATE_LOCAL_DATA',
        localData
    }
};