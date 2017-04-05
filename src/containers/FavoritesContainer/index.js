import { connect } from 'react-redux';

import Favorites from '../../components/Favorites';

import { updateLocalData } from '../../actions';

const mapStateToProps = (state) => {
    return {
        localData: state.localData
    };
};

const mergeProps = (stateProps, dispatchProps) => {
    const { localData } = stateProps;
    const { dispatch } = dispatchProps;

    const deleteFavorite = (id) => {
        localStorage.removeItem(id);

        dispatch(updateLocalData(localStorage));
    };

    return {
        localData: localData,
        deleteFavorite: (id) => deleteFavorite(id)
    }
};

const FavoritesContainer = connect(
    mapStateToProps,
    null,
    mergeProps
)(Favorites);

export default FavoritesContainer;