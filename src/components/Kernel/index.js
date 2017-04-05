import React, { Component } from 'react';

import Search from '../../containers/SearchContainer';
import Favorites from '../../containers/FavoritesContainer';

import './index.css';

export default class Kernel extends Component {

    render() {
        return(
            <div className="kernel">
                <Search />
                <Favorites />
            </div>
        )
    }
}