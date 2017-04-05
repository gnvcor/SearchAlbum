import { connect } from 'react-redux';

import Search from '../../components/Search';

import Api from '../../api';

import { checkEmptySearch, updateLocalData } from '../../actions';

const mapStateToProps = (state) => {
    return {
        emptySearch: state.emptySearch,
        data: state.data,
        localData: state.localData
    };
};

const mergeProps = (stateProps, dispatchProps) => {
    const { emptySearch, data, localData } = stateProps;
    const { dispatch } = dispatchProps;

    const sendData = (searchValue) => {
        try {
            if (!searchValue) {
                throw new SyntaxError("Empty value");
            }

            dispatch(checkEmptySearch(false));

            Api.getData(searchValue);

        } catch(e) {
            if (e.name == 'SyntaxError') {
                dispatch(checkEmptySearch(true));

                console.log(e);
            }
        }
    };

    const addFavorite = (title, artist, id) => {
        let srt = title + ";" + artist;

        localStorage.setItem(id, srt);

        dispatch(updateLocalData(localStorage));
    };

    return {
        emptySearch: emptySearch,
        data: data,
        localData: localData,
        sendData: (searchValue) => sendData(searchValue),
        addFavorite: (title, artist, id) => addFavorite(title, artist, id)
    }
};

const SearchContainer = connect(
    mapStateToProps,
    null,
    mergeProps
)(Search);

export default SearchContainer;